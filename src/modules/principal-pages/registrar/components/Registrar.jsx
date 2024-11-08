import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { center } from "../../mapa/consts";
import { useEffect, useRef, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import userMarkerIcon from "../../mapa/static/assets/markerUser.png"
import pinIcon from "../static/assets/pin-outline.svg"
import "../Registrar.css"
import { PrincipalNav } from "../../../general/components/PrincipalNav";
export function Registrar({onLocationChange}) {
    const mapRef = useRef(null)
    const {userLocation, setUserLocation, setObjectLocation, loading} = useGeolocation()
    const [data, setData] = useState(false)
    const markerUserRef = useRef(null)

    
    useEffect(() => {
        if (userLocation && data && !loading && mapRef.current) {
            if (markerUserRef.current) {
                markerUserRef.current.setMap(null);
            }
    
            markerUserRef.current = new window.google.maps.Marker({
                position: userLocation,
                map: mapRef.current,
                icon: {
                    url: userMarkerIcon,
                    scaledSize: new window.google.maps.Size(60, 60),
                },
                draggable: true,
            });
    
            markerUserRef.current.addListener("dragend", (event) => {
                const newPosition = event.latLng;
                setUserLocation(newPosition);
    
                const newLocation = {
                    lat: newPosition.lat(),
                    lng: newPosition.lng(),
                };
                setObjectLocation(newLocation);
                onLocationChange(newLocation);
            });
    
            mapRef.current.setCenter(userLocation);
            mapRef.current.setZoom(14);
        }
    }, [data, userLocation, loading]);
    

    return (
        <>
            <div>
                <LoadScript
                    googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
                >
                    <div className="allContainer">
                        
                        <div className="containerFormAll"> 
                            <article>
                                <img src={pinIcon} width="50px" alt="" />
                                <h1>Pon la ubicación del lugar</h1>
                                <p>Arrastra el marcador si es necesario</p>
                            </article>
                            <GoogleMap
                                center={center}
                                zoom={11}
                                id="mapRegister"
                                onLoad={map => {
                                    mapRef.current = map
                                    setData(true)
                                }}
                            />
                        </div>
                    </div>
                </LoadScript>
            </div>  
        </>
    )
}