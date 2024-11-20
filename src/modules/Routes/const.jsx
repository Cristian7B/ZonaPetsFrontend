import { AcercaDe } from "../info-pages/pages/acercade/components/AcercaDe";
import { Afiliate } from "../info-pages/pages/afiliate/components/Afiliate";
import { Contacto } from "../info-pages/pages/contacto/components/Contacto";
import { Faq } from "../info-pages/pages/faq/components/Faq";
import { Respuesta } from "../info-pages/pages/faq/components/Respuesta";
import { Politicas } from "../info-pages/pages/politicasdeprivacidad/components/Politicas";
import { PremiumLanding } from "../info-pages/pages/premium/PremiumLanding";
import { Tyc } from "../info-pages/pages/terminosycondiciones/components/Tyc";
import { ZonaPets } from "../main-page/components/ZonaPets";
import { Registrar } from "../principal-pages/registrar/components/RegistrarLanding/Registrar";

export const ROUTES = [
    { path: "/", element: <ZonaPets /> },
    { path: "/acercade", element: <AcercaDe /> },
    { path: "/contacto", element: <Contacto /> },
    { path: "/faq", element: <Faq /> },
    { path: "/faq/:category/:question", element: <Respuesta /> },
    { path: "/terminos", element: <Tyc /> },
    { path: "/politicas", element: <Politicas /> },
    { path: "/afiliate", element: <Afiliate /> },
    { path: "/premium", element: <PremiumLanding /> },
    { path: "/registrar", element: <Registrar/>}
];