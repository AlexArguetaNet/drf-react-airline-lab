import "./FlightDuration.css"

function FlightDuration({ duration, className }) {

    return (
        <div id="duration" className={className} >
            <p>{duration}</p>
        </div>
    )
}

export default FlightDuration
