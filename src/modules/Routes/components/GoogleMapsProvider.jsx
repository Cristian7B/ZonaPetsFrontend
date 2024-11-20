import { LoadScript } from "@react-google-maps/api";

export function GoogleMapsProvider ({ children }) {
    const libraries = ['geometry'];

    return (
        <LoadScript 
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY} 
            libraries={libraries}
        >
            {children}
        </LoadScript>
    );
}
