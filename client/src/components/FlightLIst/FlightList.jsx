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
            <div id="number-container">
                <MdAirplaneTicket />
                <h3 id="number">FLIGHT {flight.id}</h3>
            </div>
            <div id="graphic-container">
                <p>{flight.origin.code}</p>
                <GoHorizontalRule id="line" /> 
                <MdOutlineAirplanemodeActive id="plane" /> 
                <GoHorizontalRule id="line" />
                <p>{flight.destination.code}</p>
            </div>
            <div id="price-container">
                <p id="price">${flight.price}</p>
                <Link id="details-link">Details</Link>
            </div>
        </div>
    )
}

export default FlightList
