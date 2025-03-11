import { createContext, useContext, useState, useEffect } from "react";
import { useGeolocation } from "../hooks/useGeolocation";

const LocationContext = createContext();

export function LocationProvider({ children }) {
    const [objectLocation, setObjectLocation] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const {location, userLocation1} = useGeolocation();
    console.log("GEOLOCATION", location);

    useEffect(() => {
        if (location) setObjectLocation(location);
        if (userLocation1) setUserLocation(userLocation1);
    }, [location]);

    console.log("MY ACTUAL LOCATION", objectLocation);
    return (
        <LocationContext.Provider value={{ objectLocation, setObjectLocation, userLocation, setUserLocation }}>
          {children}
        </LocationContext.Provider>
    );
}

export const useLocation = () => useContext(LocationContext);