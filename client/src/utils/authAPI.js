import axios from "axios"

const API_PREFIX = import.meta.env.VITE_API_PREFIX;

// Send a POST request to register a new user
export const registerUser = async (userData) => {
    try {

        const res = await axios.post(`${API_PREFIX}/api/users/register`, userData);

        return res.data;

    } catch (err) {

        if (err.response && err.response.data) {
            let errMsg;

            // Check if the  username caused the error
            if (Object.hasOwn(err.response.data, "username")) {
                errMsg = "Username or email already taken";
            }

            return {"err": errMsg};
        }

        console.log(`Network err: ${err.message}`);
        return {"err": `Network error or server is down: ${err}`};
    }
}

