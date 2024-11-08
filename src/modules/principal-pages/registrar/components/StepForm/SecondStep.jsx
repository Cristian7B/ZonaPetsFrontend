import { Registrar } from "../Registrar";

export function SecondStep({handleLocationChange}) {
    return (
        <Registrar
            onLocationChange={handleLocationChange}
        />
    )
}