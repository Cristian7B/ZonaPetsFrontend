import layoutGrid from "../static/assets/LayoutGrid.webp"
import layoutGrid2 from "../static/assets/LayoutGrid2.webp"
import layoutGrid3 from "../static/assets/LayoutGrid3.webp"
import layoutGrid4 from "../static/assets/LayoutGrid4.webp"

export function GridContent() {
    return (
        <div className="centerGridZonaPets">

            <div className="gridContainerZonaPets">
                <article className="cardContentGridZonaPets1">
                    <section className="description">
                        <h1>Sobre nuestra web</h1>
                        <p>ZonaPets te permite descubrir rápidamente lugares cercanos a ti. ¡Haz que tu mascota sea feliz con nosotros!
                        </p>
                    </section>
                    <img className="mockup1" src={layoutGrid} alt="Mockup"/>
                </article>
                <article className="cardContentGridZonaPets2">
                    <section className="description">
                        <h1>Registra un lugar</h1>
                        <p>En ZonaPets puedes registrar los sitios a los que has ido con tus adorables peluditos. </p>
                    </section>
                    <img src={layoutGrid2} className="plusIconGrid" alt="Ícono añadir" />
                </article>
                <article className="cardContentGridZonaPets3">
                    <section className="description">
                        <h1>¡Descubre lugares!</h1>
                        <p>Con nuestro sistema de Geolocalización puedes descubrir los mejores lugares en un radio de 2000 metros a
                            la redonda. </p>
                    </section>
                    <img 
                        src={layoutGrid3} 
                        alt="Ícono locate" 
                        className="plusIconGrid" 
                        id="plusIconGrid1"
                    />
                </article>
                <article className="cardContentGridZonaPets4">
                    <section className="description">
                        <h1>¡Crea una cuenta!</h1>
                        <p>Crea una cuenta y ZonaPets y guarda todos los lugares en tus favoritos. Crea listas y compártelas.</p>
                    </section>
                    <img src={layoutGrid4} alt="Mockup del mapa"/>
                </article>
            </div>
        </div>
        )
}