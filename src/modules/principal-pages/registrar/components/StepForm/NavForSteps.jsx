import logoSvg from "../../static/assets/logo.svg";
import questionIcon from "../../static/assets/help-outline.svg"
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
                <a href="" className="buttonQuestionsStepsResponsive">  
                    <img src={questionIcon} width="20px" alt="" />
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