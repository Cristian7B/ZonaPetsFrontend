import { Route } from "react-router-dom";
import { InicialLandingLogin } from "../../principal-pages/loginUser/components/InicialLanding";
import { AccountLogin } from "../../principal-pages/loginUser/components/AccountLogin";
import { AccountRegister } from "../../principal-pages/loginUser/components/AccountRegister";

export function LoginProvider() {
    return (
        <>
            <Route path="/iniciarsesion" element={<InicialLandingLogin />} />
            <Route path="/iniciarsesion/login" element={<AccountLogin />} />
            <Route path="/iniciarsesion/registrar" element={<AccountRegister />} />
        </>
    )
}