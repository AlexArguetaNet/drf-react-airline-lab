import Page from "../UI/Page/Page"
import FlightList from "../../components/FlightLIst/FlightList"
import { fetchFlights } from "../../utils/flightsAPI"
import { useState, useEffect } from "react"

function Home() {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const handleFetchFlights = async () => {
            const flights = await fetchFlights();

            setFlights(flights);

        }
        handleFetchFlights();
    }, []);

    return (
        <Page secondClassName={"home-page"}>
            {
                flights ?  <FlightList flights={flights} />
                        : <p>No flights</p>
            }
        </Page>
    )
}

export default Home
