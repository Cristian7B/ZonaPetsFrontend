import { PrincipalNav } from "../../../../general/components/PrincipalNav";
import { termsAndConditions } from "../utils/consts";
import "../Tyc.css"
import { Footer } from "../../../../general/components/Footer";

export function Tyc() {
    return (
        <>
            <PrincipalNav/>
            <div className="allContainerTycDisplay">
                <div className="containerAllTyc">
                    <h1>Términos y Condiciones</h1>  
                    {
                        termsAndConditions.map((term, index) => (
                            <div key={index} className="itemTermOrPrivacyContainer">
                                <h2>{term.title}</h2>
                                <p>{term.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}