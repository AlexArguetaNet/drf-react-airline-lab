import "./FlightList.css"
import { MdAirplaneTicket } from "react-icons/md"
import { GoHorizontalRule } from "react-icons/go"
import { MdOutlineAirplanemodeActive } from "react-icons/md"
import { Link } from "react-router-dom"

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
            <div id="number">
                <MdAirplaneTicket />
                <h3>Flight {flight.id}</h3>
            </div>
            <div id="graphic">
                <p>{flight.origin.code}</p>
                <GoHorizontalRule /> <MdOutlineAirplanemodeActive id="plane" /> <GoHorizontalRule />
                <p>{flight.destination.code}</p>
            </div>
            <div id="price">
                <h2>${flight.price}</h2>
                <Link>Details</Link>
            </div>
        </div>
    )
}

export default FlightList
