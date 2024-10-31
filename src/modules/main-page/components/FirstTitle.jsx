import { Link } from "react-router-dom";
import earthIcon from "../static/assets/earth-outline.svg"
export function FirstTitle() {
    return (
        <div className="centerTitleZonaPets">
            <div className="titleFromZonaPetsDiv">
                <h1>Empieza en segundos</h1>
                <p>Encuentra lugares pet-friendly para tu mascota en un solo click.</p>
            </div>
            <div className="buttonsTitleFromZonaPets">
                <Link className="toMapaTitleZonaPets" to="/mapa">
                    <button className="buttonTitleFromZonaPets">
                        <img src={earthIcon} width="25px" alt="Icono de la tierra" />
                        Mapa
                    </button>
                </Link>
                <Link className="toRegistrarTitleZonaPets" to="/registrar">
                    <button className="buttonTitleFromZonaPets">Regístrate</button>
                </Link>
            </div>
        </div>
    )
}