import { GoogleMap } from "@react-google-maps/api";
import { center } from "../../mapa/consts";
import { useEffect, useRef, useState } from "react";
import userMarkerIcon from "../../mapa/static/assets/markerUser.png";
import pinIcon from "../static/assets/pin-outline.svg";
import "../Registrar.css";

export function Registrar({ onLocationChange, userLocation, setUserLocation, setObjectLocation, objectLocation }) {
    const mapRef = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const markerUserRef = useRef(null);

    console.log(userLocation);
    console.log(objectLocation)

    useEffect(() => {
        if (userLocation && mapLoaded && mapRef.current) {
            console.log("IASDFNA")
            const userLatLng = new window.google.maps.LatLng(
                objectLocation.lat,
                objectLocation.lng
            );
            if (markerUserRef.current) {
                markerUserRef.current.setMap(null);
            }
            markerUserRef.current = new window.google.maps.Marker({
                position: userLatLng,
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
    }, [mapLoaded, userLocation, mapRef.current]);

    return (
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
                    onLoad={(map) => {
                        mapRef.current = map;
                        setMapLoaded(true);  
                    }}
                />
            </div>
        </div>
    );
}
