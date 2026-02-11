import { createContext, useContext, useState, useEffect } from "react";
import { getUser, refreshToken } from "../utils/authAPI";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {

        const checkAuth = async () => {

            const data = await refreshToken();
            if (data && data.access) {
                setAccessToken(data.access);
                const userData = await getUser(data.access);
                setUser(userData);
            }

        }
        checkAuth();

    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);
