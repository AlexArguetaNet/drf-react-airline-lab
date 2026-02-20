import "./FlightList.css"
import { MdAirplaneTicket } from "react-icons/md"
import { GoHorizontalRule } from "react-icons/go"
import { MdOutlineAirplanemodeActive } from "react-icons/md"
import { Link } from "react-router-dom"
import FlightDuration from "../FlightDuration/FlightDuration"
import Button from "../Button/Button"

function FlightList({ flights }) {

    return (
        <div className="flight-list-container">
            {/* Must wait for the list to populate on re-render */}
            {
                flights.length > 0 ? flights.map((flight, index) => (
                    <FlightListItem flight={flight} key={index} />
                )) : (
                    <p></p>
                )
            }
        </div>
    )
}

function FlightListItem({ flight }) {

    return (
        <div className="flight-list-item">
            <div className="row">
                <div>
                    <MdAirplaneTicket id="ticket-icon" />
                </div>
                <div id="graphic" className="middle">
                    <p>{flight.origin.code}</p>
                    <GoHorizontalRule className="line" />
                    <MdOutlineAirplanemodeActive id="airplane-icon" />
                    <GoHorizontalRule className="line" />
                    <p>{flight.destination.code}</p>
                </div>
                <div id="price">
                    <p>${flight.price}</p>
                </div>
            </div>
            <div className="row">
                <div>
                    <p id="number">FLIGHT {flight.id}</p>
                </div>
                <FlightDuration duration={flight.duration} className={"middle"} />
                <Button>
                    <Link to={`/flights/${flight.id}`} state={{ flightData: flight }} >Details</Link>
                </Button>
            </div>
        </div>
    )
}

export default FlightList
