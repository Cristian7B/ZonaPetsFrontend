import logoSvg from "../../static/assets/logo.svg";
import questionIcon from "../../static/assets/help-outline.svg"
import "../../Registrar.css"
import logoIcon from "../../../../general/assets/zonapetslogo.png"


export function NavForSteps() {
    return (
        <nav className="navForSteps">
            <article className="containerLogoFromNavSteps">
                <img src={logoIcon} width="80px" alt="" />
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
                <a href="https://zonapets.vercel.app/mapa">
                    <button className="buttonSaveSteps">
                        Salir
                    </button>
                </a>
            </article>
        </nav>
    )
}