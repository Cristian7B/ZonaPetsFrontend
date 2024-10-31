import logoTiktok from '../static/assets/logo-tiktok.svg';
import logoInstagram from '../static/assets/logo-instagram.svg';
import logoFacebook from '../static/assets/logo-facebook.svg';
import mailIcon from "../static/assets/mail-outline.svg"
import logoZonaPets from "../../general/assets/zonapetslogo.png"
export function Footer() {
    return (
        <footer>
            <div className="zonapets-footer">
                <div className="zonapets-footer-top">
                    <div className="zonapets-footer-img-divfooter1">
                        <img className="zonapets-footer-img-footer" src={logoZonaPets} alt=""/>
                        <h1 className="zonapets-footer-logo-title">ZonaPets</h1>
                    </div>
                    <div className="zonapets-footer-logo-footer">
                        <div className="zonapets-footer-img-divfooter">
                            <img className="zonapets-footer-img-footer" src={logoZonaPets} alt=""/>
                            <h1 className="zonapets-footer-logo-title">ZonaPets</h1>
                        </div>
                        <div className="zonapets-footer-social-media">
                            <a className="zonapets-footer-plus-icon3" href="https://www.instagram.com/zonapets0?igsh=MTUzdHBwanJ2NGJwdQ=="
                                target="_blank">
                                    <img src={logoInstagram} className='zonapets-footer-plus-icon3' width="25px" alt='Logo '/>
                            </a>
                            <a className="zonapets-footer-plus-icon3" href="https://www.facebook.com/zonappets?mibextid=ZbWKwL"
                                target="_blank">
                                    <img src={logoFacebook} width="25px" alt='Logo ' className='zonapets-footer-plus-icon3'/>
                            </a>
                            <a className="zonapets-footer-plus-icon3" href="https://www.tiktok.com/@zonapets0?_t=8kor95lpkeb&_r=1"
                                target="_blank">
                                    <img src={logoTiktok} width="25px" alt='Logo ' className='zonapets-footer-plus-icon3'/>
                            </a>
                            <a className="zonapets-footer-plus-icon3" href="mailto:zonapetscompany@gmail.com" target="_blank">
                                <ion-icon className="plus-icon3" name="mail-open-outline"></ion-icon>
                                <img src={mailIcon} width="25px" alt='Logo ' className='zonapets-footer-plus-icon3'/>
                            </a>
                        </div>

                    </div>
                    <div className="zonapets-footer-description-footer">
                        <div className="zonapets-footer-footer-container">
                            <div className="zonapets-footer-footer-divs">
                                <h1 className="zonapets-footer-title-desc">
                                    Nosotros
                                </h1>
                                <div className="zonapets-footer-width-url">
                                    <a className="zonapets-footer-url-footer" href="https://zonapets.vercel.app/acercade/" target="_blank">Sobre ZonaPets</a>
                                    <a className="zonapets-footer-url-footer" href="https://zonapets.vercel.app/terminos-y-condiciones/" target="_blank">Términos y condiciones</a>                            </div>
                            </div>
                            <div className="zonapets-footer-footer-divs">
                                <h1 className="zonapets-footer-title-desc">
                                    Servicio
                                </h1>
                                <div className="zonapets-footer-width-url">
                                    <a className="zonapets-footer-url-footer" href="https://zonapets.vercel.app/preguntas-frecuentes/" target="_blank">Preguntas frecuentes</a>
                                    <a className="zonapets-footer-url-footer" href="https://zonapets.vercel.app/contacto/" target="_blank">Contacto</a>
                                </div>
                            </div>
                            <div className="zonapets-footer-footer-divs">
                                <h1 className="zonapets-footer-title-desc">
                                    Comunidad
                                </h1>
                                <div className="zonapets-footer-width-url">
                                    <a className="zonapets-footer-url-footer" href="https://www.instagram.com/zonapets0" target="_blank">Instagram</a>
                                    <a className="zonapets-footer-url-footer" href="https://www.facebook.com/zonappets" target="_blank">Facebook</a>
                                    <a className="zonapets-footer-url-footer" href="https://zonapets.vercel.app/contacto/" target="_blank">Reportar un bug</a>
                                    <a className="zonapets-footer-url-footer" href="https://zonapets.vercel.app/registrar/" target="_blank">Pon tu lugar en ZonaPets</a>
                                </div>
                            </div>
                            <div className="zonapets-footer-footer-divs">
                                <h1 className="zonapets-footer-title-desc">
                                    Links de interés
                                </h1>
                                <div className="zonapets-footer-width-url">
                                    <a className="zonapets-footer-url-footer" href="https://zonapets.vercel.app/mapa/" target="_blank">Mapa de lugares</a>
                                    <a className="zonapets-footer-url-footer" href="https://zonapets.vercel.app/registrar/" target="_blank">Registrar un lugar</a>
                                    <a className="zonapets-footer-url-footer" href="https://zonapets.vercel.app/afiliate/" target="_blank">Trabaja con nosotros</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="zonapets-footer-bottom">
                    <p className="zonapets-footer-copyrigth">Copyright © 2023, ZonaPets.</p>
                    <p className="zonapets-footer-copyrigth2">Contactános <span><a
                                href="mailto:zonapetscompany@gmail.com">zonapetscompany@gmail.com</a></span></p>
                </div>
            </div>
        </footer>
    )
}