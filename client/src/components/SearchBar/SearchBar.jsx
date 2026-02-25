import { useState } from "react";
import "./SearchBar.css"
import { IoIosSearch } from "react-icons/io";

function SearchBar({ handleSearch, resetFlightList }) {

    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query != "") {
            handleSearch(query);
        }
    }

    const handleChange = (e) => {

        if (e.target.value != "") {
            setQuery(e.target.value);
        } else {
            resetFlightList();
            setQuery("");
        }

    }

    return (
        
        <form onSubmit={handleSubmit} id="search-bar">
            <div>
                <input type="text" placeholder="Enter flight number" onChange={(e) => handleChange(e)} value={query} />
                <button onClick={handleSubmit}>
                    <IoIosSearch />
                </button>
            </div>
        </form>
    )
}

export default SearchBar
