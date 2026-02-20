import "./Flight.css"
import { useEffect, useState } from "react";
import Page from "../UI/Page/Page"
import { useParams, useLocation } from "react-router-dom"
import { fetchSingleFlight, getAircraftImg } from "../../utils/flightsAPI";
import Details from "./Details";
import Price from "./Price";
import AircraftInfo from "./AircraftInfo";

function Flight() {

    const location = useLocation();
    const { flightId } = useParams();
    const [flight, setFlight] = useState(location.state?.flightData);
    const [aircraftImg, setAircraftImg] = useState(getAircraftImg(flight));

    useEffect(() => {

        const handleFetchFlight = async () => {
            const flight = await fetchSingleFlight(flightId);
            setFlight(flight);
            setAircraftImg(getAircraftImg(flight));
        }

        if (!flight) handleFetchFlight();

    }, []);

    return (
        <Page secondClassName={"flight-page"}>
            {/* Render page when flight data is available */}
            { 
                flight && (
                    <div className="content">
                        <div>
                            <Details flight={flight} />
                            <Price flight={flight} />
                        </div>
                        <div>
                            <AircraftInfo img={aircraftImg} name={flight.aircraft.name} />
                        </div>
                    </div>
                )
            }
        </Page>
    )
}

export default Flight
