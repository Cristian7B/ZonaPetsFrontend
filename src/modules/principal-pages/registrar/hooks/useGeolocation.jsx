import { useEffect, useState } from "react";
import userMarkerIcon from "../../mapa/static/assets/markerUser.png"

export function useGeolocation() {
    const [userLocation, setUserLocation] = useState(null)
    const [objectLocation, setObjectLocation] = useState({
        lat: "",
        lng: "",
    })

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setObjectLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                    const userLatLng2 = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    setUserLocation(userLatLng2)
                    setLoading(false);
                },
            );
        } 
        
        else {
            console.error("La geolocalización no es compatible en este navegador.");
            setLoading(false)
        }

    }, []); 

    return {setUserLocation, setObjectLocation, userLocation, objectLocation, loading}
}