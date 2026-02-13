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
