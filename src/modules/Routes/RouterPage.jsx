import { BrowserRouter as Router, Routes } from "react-router-dom";
import { DataUserProvider } from "../principal-pages/loginUser/context/DataUserContext";
import { MapsComponents } from "./components/MapsComponents";
import { LoginProvider } from "./components/LoginProvider";
import { RoutesGroup } from "./components/RoutesGroup";
import { GoogleMapsProvider } from "./components/GoogleMapsProvider";

export function RouterPage() {
    return (    
        <>
            <GoogleMapsProvider>
                <DataUserProvider>
                    <Router>
                        <Routes>
                            {MapsComponents()}
                            {LoginProvider()}
                            {RoutesGroup()}
                        </Routes>
                    </Router>
                </DataUserProvider>
            </GoogleMapsProvider>
        </>
    );
}
