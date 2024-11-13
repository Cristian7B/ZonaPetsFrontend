import logoSvg from "../../static/assets/logo.svg";

import "../../Registrar.css"
export function NavForSteps({handleSubmit}) {
    return (
        <nav className="navForSteps">
            <article className="containerLogoFromNavSteps">
                <img src={logoSvg} width="80px" alt="" />
            </article>
            <article className="containerButtonsFromNavSteps">
                <a href="">
                    <button className="buttonQuestionsSteps">
                        ¿Preguntas?
                    </button>
                </a>
                <a href="">
                    <button onClick={handleSubmit} className="buttonSaveSteps">
                        Guardar y salir
                    </button>
                </a>
            </article>
        </nav>
    )
}