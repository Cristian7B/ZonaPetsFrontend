import { Registrar } from "../Registrar";

export function SecondStep({handleLocationChange, userLocation, setUserLocation, setObjectLocation}) {
    return (
            <Registrar
                onLocationChange={handleLocationChange}
            />
    )
}