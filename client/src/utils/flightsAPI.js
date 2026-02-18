import axios from "axios"

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

        console.log(res.data);

        return res.data;
        
    } catch (err) {
        
        if (err.response) {
            console.log(`Err: ${err.response.status}`);
        }

        return null;

    }

}
