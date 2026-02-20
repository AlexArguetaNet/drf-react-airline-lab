import axios from "axios"
import PlaneImg1 from "../assets/images/plane1.png"
import PlaneImg2 from "../assets/images/plane2.png"
import PlaneImg3 from "../assets/images/plane3.png"

const API_PREFIX = import.meta.env.VITE_API_PREFIX;

export const fetchFlights = async () => {
    
    try {

        const res = await axios.get(`${API_PREFIX}/api/flights/all`);

        const flights = await res.data;

        // Return the flights
        return flights;
        
    } catch (err) {
        console.log(`err: ${err}`);
        return null;
    }

}

export const fetchSingleFlight = async (flightId) => {

    try {

        const res = await axios.get(`${API_PREFIX}/api/flights/${flightId}`);
        return res.data;
        
    } catch (err) {
        
        if (err.response) {
            console.log(`Err: ${err.response.status}`);
        }

        return null;

    }

}

export const getAircraftImg = (flight) => {
        
        if (!flight) {
            return null;
        }

        const aircraftId = flight.aircraft.id;

        switch (aircraftId) {
            case 1:
                return PlaneImg1;
            case 2:
                return PlaneImg2;
            case 3:
                return PlaneImg3;
        }

    }
