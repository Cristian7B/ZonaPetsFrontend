import { Route } from "react-router-dom";
import { MapaProvider } from "./MapaProvider";
import { ControllerSteps } from "../../principal-pages/registrar/components/StepForm/ControllerSteps";

export function MapsComponents() {
    return (
        <>
            <Route
                path="/mapa"
                element={
                        <MapaProvider />
                }
            />
            <Route
                path="/registrar/steps"
                element={
                        <ControllerSteps />
                }
            />
        </>
    );
}
