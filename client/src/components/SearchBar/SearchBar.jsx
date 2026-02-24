import { useState } from "react";
import "./SearchBar.css"
import { IoIosSearch } from "react-icons/io";

function SearchBar({ handleSearch, resetFlightList }) {

    const [query, setQuery] = useState("");

    const handleClick = () => {
        handleSearch(query);
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
        <div id="search-bar">
            <input type="text" placeholder="Enter flight number" onChange={(e) => handleChange(e)} value={query} />
            <button onClick={handleClick}>
                <IoIosSearch />
            </button>
        </div>
    )
}

export default SearchBar
