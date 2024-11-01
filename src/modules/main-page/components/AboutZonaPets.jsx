import { Link } from "react-router-dom";
import macImage from "../static/assets/LayoutPrincipal.webp"
import closeMenuIcon from "../static/assets/close-outline.svg"
import menuIcon from "../static/assets/menu-outline.svg"
import linkIcon from "../static/assets/link-outline.svg"

import { useState } from "react";
export function AboutZonaPets() {
    const [display, setDisplay] = useState(false);
    
    const stylesFromResponsive = {
        display: display ? "flex" : "none"
    }

    const handleDisplay = () => {
        setDisplay(prevState => !prevState);
    }

    return (
        <div className="allContainerFirstZonaPets">
            <nav className="contentNav">
                <div className="navProvisional">
                    <div className="sideLeftNav">
                        <Link to="/mapa">Mapa</Link>
                        <Link to="/registrar">Registrar</Link>
                    </div>
                    <h2>ZonaPets</h2>
                    <div className="sideRightNav">
                        <Link to="/iniciarsesion/login">Login</Link>
                        <Link to="/iniciarsesion/registrar"><button>Crear Cuenta</button></Link>
                    </div>
                    <img onClick={handleDisplay} className="menuBarZonaPets" src={display ? closeMenuIcon: menuIcon} alt="Ícono de menú" />
                </div>
            </nav>
            <div style={stylesFromResponsive} className="navResponsiveGeneralZonaPets">
                <div className="containerLinksNavResponsive">
                    <article className="anchordUrlFromNavZonaPets">
                        <Link to="/mapa">Mapa</Link>
                        <img src={linkIcon} width="30px" alt="" />
                    </article>
                    <article className="anchordUrlFromNavZonaPets">
                        <Link to="/registrar">Registrar</Link>
                        <img src={linkIcon} width="30px" alt="" />
                    </article>
                    <article className="anchordUrlFromNavZonaPets">
                        <Link to="/iniciarsesion/login">Login</Link>
                        <img src={linkIcon} width="30px" alt="" />
                    </article>
                </div>
                <hr />
                <Link to="/iniciarsesion/registrar"><button>Crear Cuenta</button></Link>
            </div>
            <div className="generalContainer">
                <header className="headerFromZonaPets">
                    <div className="provisionalHeader">
                        <h1>Lugares Pet-Friendly para tu peludito</h1>
                    </div>
                    <img src={macImage} alt="" />
                </header>
            </div> 
        </div>
    );
}
