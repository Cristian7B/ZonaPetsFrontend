import { Link } from "react-router-dom";
import redirectIcon from "../static/assets/arrow-forward-circle-outline.svg";


export function CardIcons({title, subtitle, paragraph, linkTo, textLinkTo, icon1, icon2, icon3, layoutIcon, text1H3, text1p, text2H3, text2p, text3H3, text3p}) {
    return (
        <div className="containerAllCardZonaPets">
            <div className="cardContainerIconZonaPets">
                <div className="leftSideContainerIcon">
                    <h1>{title}</h1>
                    <h1>{subtitle}</h1>
                    <p>
                        {paragraph}
                    </p>
                    <Link to={linkTo}>
                        <p>{textLinkTo}</p>
                        <img width="25px" src={redirectIcon} alt="" />
                    </Link>
                </div>
                <img className="imgAllRegisterResponsive" src={layoutIcon} alt="" />
                <div className="rightSideContainerIcon">
                    <div className="containerCoatZonaPets">
                        <article className="iconContainerZonaPets">
                            <img src={icon1} alt="Icono de bombilla" width="70px"/>
                            <div className="containerTextFromIcon">
                                <h3>{text1H3}</h3>
                                <p>{text1p}</p>
                            </div>
                        </article>
                        <article className="iconContainerZonaPets">
                            <img width="70px" src={icon2} alt="Icono de añadir" />
                            <div className="containerTextFromIcon">
                                <h3>{text2H3}</h3>
                                <p>{text2p}</p>
                            </div>
                        </article>
                        <article className="iconContainerZonaPets">
                            <img width="70px" src={icon3} alt="Icono de check" />
                            <div className="containerTextFromIcon">
                                <h3>{text3H3}</h3>
                                <p>{text3p}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <img className="imgAllRegister" src={layoutIcon} alt="" />
        </div>
    )
}