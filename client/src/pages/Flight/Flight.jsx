import "./Flight.css"
import { useEffect, useState } from "react";
import Page from "../UI/Page/Page"
import { useParams, useLocation } from "react-router-dom"
import { fetchSingleFlight } from "../../utils/flightsAPI";
import Details from "./Details";

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
                    <div className="content">
                        <Details flight={flight} />
                        {/* TODO: Create Price component */}
                    </div>
                )
            }
        </Page>
    )
}

export default Flight
