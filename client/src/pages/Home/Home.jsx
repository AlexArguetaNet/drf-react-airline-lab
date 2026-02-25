import "./Home.css"
import Page from "../UI/Page/Page"
import FlightList from "../../components/FlightLIst/FlightList"
import SearchBar from "../../components/SearchBar/SearchBar"
import { fetchFlights } from "../../utils/flightsAPI"
import { useState, useEffect } from "react"

function Home() {

    const [flights, setFlights] = useState([]);
    const [flightsFiltered, setFlightsFiltered] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const handleFetchFlights = async () => {
            const flights = await fetchFlights();

            setFlights(flights);
            setFlightsFiltered(flights);

        }
        handleFetchFlights();
    }, []);

    const search = (query) => {
        const results = flights.filter(flight => flight.id == query);
        setFlightsFiltered(results);
    }

    const resetFlightsList = () => {
        setFlightsFiltered(flights);
    }

    const displayList = () => {
        if (flightsFiltered.length > 0) {
            return <FlightList flights={flightsFiltered} />
        } else {
            return <p>No results</p>
        }
    }

    return (
        <Page secondClassName={"home-page"}>
            <SearchBar handleSearch={search} resetFlightList={resetFlightsList}/>
            <h2>Available Flights</h2>
            {
                flightsFiltered ?  displayList()
                        : <p>No flights</p>
            }
        </Page>
    )
}

export default Home
