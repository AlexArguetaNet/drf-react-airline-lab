import "./SearchBar.css"
import { IoIosSearch } from "react-icons/io";

function SearchBar({ query, handleSearch }) {

    return (
        <div id="search-bar">
            <input type="number" placeholder="Enter flight number" />
            <button>
                <IoIosSearch />
            </button>
        </div>
    )
}

export default SearchBar
