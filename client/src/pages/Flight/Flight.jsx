import { useEffect, useState } from "react";
import Page from "../UI/Page/Page"
import { useParams, useLocation } from "react-router-dom"
import { fetchSingleFlight } from "../../utils/flightsAPI";

function Flight() {

    const location = useLocation();
    const { flightId } = useParams();
    const [flight, setFlight] = useState(location.state?.flightData);

    useEffect(() => {

        if (!flight) {
            const hadleFetchSingleFlight = async () => {

                const flight = await fetchSingleFlight(flightId);
                setFlight(flight);

            }
            hadleFetchSingleFlight();
        }

    }, []);

    return (
        <Page secondClassName={"flight-page"}>
            {/* Render page when flight data is available */}
            { 
                flight && (
                    <h1>Flight {flight.id}</h1>
                )
            }
        </Page>
    )
}

export default Flight
