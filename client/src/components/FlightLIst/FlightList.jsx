
function FlightList({ flights }) {

    return (
        <div className="flight-list-container">
            <h2>Flights</h2>
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
            <p>{flight.origin.code} to {flight.destination.code}</p>
        </div>
    )
}

export default FlightList
