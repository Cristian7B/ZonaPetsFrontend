import { Footer } from "../../../../general/components/Footer";
import { PrincipalNav } from "../../../../general/components/PrincipalNav";
import { privacyPolicyTerms } from "../utils/consts";
import "../Politicas.css"

export function Politicas() {
    return (
        <>
            <PrincipalNav/>
                <div className="allContainerTycDisplay">
                    <div className="containerAllTyc">
                        <h1>Políticas de privacidad</h1>
                        {
                            privacyPolicyTerms.map((term, index) => (
                                <div key={index} className="itemTermOrPrivacyContainer">
                                    <h2>{term.title}</h2>
                                    {
                                        term.description.length == 1 ? (
                                            <p>{term.description[0].text}</p>
                                        ) : (
                                            <ul>
                                                {
                                                    term.description.map((item, idx) => (
                                                        <li key={idx}>
                                                            <strong>{item.bold}</strong> {item.text}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            <Footer/>
        </>
    )

}