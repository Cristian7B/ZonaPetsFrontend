import { useState, useEffect } from "react";

export function useGeolocation() {
  const [location, setLocation] = useState(null);
  const [userLocation1, setUserLocation1] = useState(null);

  useEffect(() => {
    console.log("LLAMANDO A GEOLOCATION");

    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const userLatLng = new window.google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        setUserLocation1(userLatLng);
        console.log("Nueva ubicación:", newLocation);
        setLocation(newLocation);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  return {location, userLocation1};
}
