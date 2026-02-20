
import "./AircraftInfo.css"

function AircraftInfo({ img, name }) {
    
    return (
        <div id="aircraft-info">
            <h2>Aircraft Information</h2>
                <div id="aircraft-img-container">
                    <div id="img-background">
                        <img src={img} alt="aircraftImg" />
                    </div>
                    <p>{name}</p>
                </div>
        </div>
    )
}

export default AircraftInfo
