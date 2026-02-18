import axios from "axios"

const API_PREFIX = import.meta.env.VITE_API_PREFIX;

// Send a POST request to register a new user
export const registerUser = async (userData) => {
    try {

        const res = await axios.post(`${API_PREFIX}/api/users/register`, 
            userData,
            { withCredentials: true }
        );

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

        console.log(`Network err: ${err.message}. Make sure .env exists`);
        return {"err": `Network error or server is down`};
    }
}

// Use the refresh token to get a new access token
export const refreshToken = async () => {
    try {

        const res = await axios.post(`${API_PREFIX}/api/users/token/refresh`, 
            {}, 
            { withCredentials: true }
        );

        console.log("User logged in");
        return res.data;
        
    } catch (err) {

        if (err.response && err.response.status == 400) {
            console.log("No active session found");
        } else {
            console.log("Server error");
            alert("Seeing this alert means that the server is most likely down. Things might not work as expected on this website. Please wait until the server is running again. Thank you.")
        }

        return null; // Cookie with refresh token doesn't exist or expired
    }
}

// Get a user
export const getUser = async (accessToken) => {

    try {

        const res = await axios.get(`${API_PREFIX}/api/users/user`, 
            {headers: { Authorization: `Bearer ${accessToken}`}},
            { withCredentials: true }            
        );

        return res.data;
        
    } catch (err) {
        console.log(err.message);
        return null;
    }

}

// Login the user
export const login = async (username, password) => {

    try {

        const res = await axios.post(`${API_PREFIX}/api/users/login`,
            { username, password },
            { withCredentials: true }
        );

        return res.data; // Returns the access token
        
    } catch (err) {
        return {"err": "Username or password invalid"};
    }

}

// Logout the user
export const logout = async () => {

    try {

        const res = await axios.post(`${API_PREFIX}/api/users/logout`, 
            {}, 
            { withCredentials: true }
        );

        console.log("User logged out?")

        return res.data;
        
    } catch (err) {
        console.log(`Err: ${err.message}`);
        return null;
    }

}