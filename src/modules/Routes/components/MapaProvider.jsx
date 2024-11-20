import { Mapa } from "../../principal-pages/mapa/components/Mapa";
import { FilterProvider } from "../../principal-pages/mapa/context/FilterContext";
import { GeolocationProvider } from "../../principal-pages/mapa/context/GeolocationsContext";
import { InfoProvider } from "../../principal-pages/mapa/context/InfoContext";

export function MapaProvider() {
    return (
        <FilterProvider>
            <GeolocationProvider>
                <InfoProvider>
                    <Mapa/>
                </InfoProvider>
            </GeolocationProvider>
        </FilterProvider>
    )
}