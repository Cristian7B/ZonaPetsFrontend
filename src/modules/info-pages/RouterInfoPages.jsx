import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AcercaDe } from "./pages/acercade/components/AcercaDe";
import { Contacto } from "./pages/contacto/components/Contacto";
import { Faq } from "./pages/faq/components/Faq";
import { Mapa } from "../principal-pages/mapa/components/Mapa";
import { FilterProvider } from "../principal-pages/mapa/context/FilterContext";
import { GeolocationProvider } from "../principal-pages/mapa/context/GeolocationsContext";
import { InfoProvider } from "../principal-pages/mapa/context/InfoContext";
import { Respuesta } from "./pages/faq/components/Respuesta";
import { UserRegister } from "../principal-pages/registrar/components/UserRegister";
import { CompRegister } from "../principal-pages/registrar/components/CompRegister";
import { InicialLandingLogin } from "../principal-pages/loginUser/components/InicialLanding";
import { AccountLogin } from "../principal-pages/loginUser/components/AccountLogin";
import { AccountRegister } from "../principal-pages/loginUser/components/AccountRegister";
import { DataUserProvider } from "../principal-pages/loginUser/context/DataUserContext";
import { Tyc } from "./pages/terminosycondiciones/components/Tyc";
import { Afiliate } from "./pages/afiliate/components/Afiliate";
import { PremiumLanding } from "./pages/premium/PremiumLanding";
import { FooterToolBar } from "../general/components/FooterToolBar";
import { useWidth } from "../general/hooks/useWidth";
import { ZonaPets } from "../main-page/components/ZonaPets";
import { Politicas } from "./pages/politicasdeprivacidad/components/Politicas";
import { FirstStep } from "../principal-pages/registrar/components/StepForm/FirstStep";
import { ControllerSteps } from "../principal-pages/registrar/components/StepForm/ControllerSteps";

export function RouterInfoPages() {
    const width = useWidth()

    return (
        <>
            <DataUserProvider>
                <Router>
                    {
                        width < 600 ? (
                            <FooterToolBar/>
                        ) : null
                    }
                    <Routes>
                        <Route path="/" element={<ZonaPets/>}/>
                        <Route path="/acercade" element={<AcercaDe />} />
                        <Route path="/terminos" element={<Tyc />} />
                        <Route path="/politicas" element={<Politicas/>} />
                        <Route path="/afiliate" element={<Afiliate />} />
                        <Route path="/premium" element={<PremiumLanding />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/registrar/steps" element={<ControllerSteps />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/iniciarsesion" element={<InicialLandingLogin />} />
                        <Route path="/iniciarsesion/login" element={<AccountLogin />} />
                        <Route path="/iniciarsesion/registrar" element={<AccountRegister />} />
                        <Route path="/registrar" element={<UserRegister />} />
                        <Route path="/registrar/empresa" element={<CompRegister />} />
                        <Route path="/faq/:category/:question" element={<Respuesta />} />
                        <Route path="/mapa" element={
                            <FilterProvider>
                                <GeolocationProvider>
                                    <InfoProvider>
                                        <Mapa />
                                    </InfoProvider>
                                </GeolocationProvider>
                            </FilterProvider>
                        } />
                    </Routes>
                </Router>

            </DataUserProvider>
        </>
    );
}
