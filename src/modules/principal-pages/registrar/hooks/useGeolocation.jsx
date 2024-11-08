import { useEffect, useState } from "react";

export function useGeolocation() {
    const [userLocation, setUserLocation] = useState(null);
    const [objectLocation, setObjectLocation] = useState({ lat: "", lng: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("La geolocalización no es compatible en este navegador.");
            setLoading(false);
            return;
        }

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const userLatLng = new window.google.maps.LatLng(
                    position.coords.latitude,
                    position.coords.longitude
                );
                setUserLocation(userLatLng);
                setObjectLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
                setLoading(false);
            },
            (err) => {
                setError(`Error obteniendo la ubicación: ${err.message}`);
                setLoading(false);
            },
            {
                enableHighAccuracy: true, 
                timeout: 10000,           
                maximumAge: 0             
            }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    return { setUserLocation, setObjectLocation, userLocation, objectLocation, loading, error };
}
