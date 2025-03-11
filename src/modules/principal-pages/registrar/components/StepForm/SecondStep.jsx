import {  GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useEffect, useRef } from "react";
import { center } from "../../../mapa/consts";
import userMarkerIcon from "../../../mapa/static/assets/markerUser.png";
import pinIcon from "../../static/assets/pin-outline.svg";


export function SecondStep({ onLocationChange, userLocation, setUserLocation, setObjectLocation, objectLocation, setAuthOptions }) {
    const mapRef = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [markerPosition, setMarkerPosition] = useState(null);
    console.log("USER LOCATION 2", objectLocation);
    useEffect(() => {
        if (mapLoaded) {
            const userLatLng = objectLocation;
            setMarkerPosition(userLatLng);
            mapRef.current.setCenter(userLatLng);
            mapRef.current.setZoom(14);
            setAuthOptions(true);
        }
    }, [mapLoaded, objectLocation]);

    return (
        <div className="allContainer">
            <div className="containerFormAll">
                <article>
                    <img src={pinIcon} width="50px" alt="" />
                    <h1>Pon la ubicación del lugar</h1>
                    <p>Arrastra el marcador si es necesario</p>
                </article>
                <GoogleMap
                    center={markerPosition || center}
                    zoom={11}
                    id="mapRegister"
                    onLoad={(map) => {
                        mapRef.current = map;
                        setMapLoaded(true);
                    }}
                >
                    {markerPosition && (
                        <Marker
                            position={markerPosition}
                            draggable={true}
                            icon={{
                                url: userMarkerIcon,
                                scaledSize: new window.google.maps.Size(60, 60),
                            }}
                            onDragEnd={(event) => {
                                const newPosition = {
                                    lat: event.latLng.lat(),
                                    lng: event.latLng.lng(),
                                };
                                setMarkerPosition(newPosition);
                                setUserLocation(newPosition);
                                setObjectLocation(newPosition);
                                onLocationChange(newPosition);
                            }}
                        />
                    )}
                </GoogleMap>
            </div>
        </div>
    );
}
