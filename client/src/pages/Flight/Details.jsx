import "./Details.css"
import { FaRegCircle } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import FlightDuration from "../../components/FlightDuration/FlightDuration";

function Details({ flight }) {

    return (
        <div id="flight-details">
            <div>
                <h2>FLIGHT {flight.id}</h2>
            </div>
            <div>
                <div id="graphic">
                    <FaRegCircle className="circle-icon" />
                    <hr />
                    <IoIosAirplane id="airplane-icon" />
                    <hr />
                    <FaRegCircle className="circle-icon" />
                </div>
                <div id="info">
                    <div>
                        <b>Departure</b>
                        <b>Arrival</b>
                    </div>
                    <div>
                        <b>{flight.origin.code}</b>
                        <FlightDuration duration={flight.duration} />
                        <b>{flight.destination.code}</b>
                    </div>
                    <div id="cities">
                        <p>{flight.origin.city}</p>
                        <p>{flight.destination.city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
