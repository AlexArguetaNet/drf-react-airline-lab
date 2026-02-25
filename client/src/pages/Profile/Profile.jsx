import Page from "../UI/Page/Page"
import { useAuth } from "../../context/AuthContext"
import FlightList from "../../components/FlightLIst/FlightList";
import { useEffect, useState } from "react";
import { fetchUserFlights } from "../../utils/flightsAPI";
import { refreshToken } from "../../utils/authAPI";

function Profile() {

    const { user } = useAuth();
    const [flights, setFlights] = useState([]);

    useEffect(() => {

        if (user) {
            const handleFetchFlights = async () => {
                const token = await refreshToken();
                const userFlights = await fetchUserFlights(token.access);
                setFlights(userFlights);
            }
            handleFetchFlights();
        }


    }, [user]);

    return (
        <Page secondClassName={"profile-page"}>
            {
                user && <h1>{user.username}</h1>
            }
            {
                flights ? <FlightList flights={flights} />
                :
                <p>No flights</p>
            }
        </Page>
    )
}

export default Profile
