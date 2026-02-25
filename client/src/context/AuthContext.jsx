import { createContext, useContext, useState, useEffect } from "react";
import { getUser, refreshToken } from "../utils/authAPI";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const checkAuth = async () => {

            try {
                const data = await refreshToken();
                if (data && data.access) {
                    setAccessToken(data.access);
                    const userData = await getUser(data.access);
                    setUser(userData);
                }

            } catch (err) {
                console.log("Auth check failed", err);
            } finally {
                setIsLoading(false);
            }

        }
        checkAuth();

    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, accessToken, setAccessToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);
