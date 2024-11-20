import { Link } from "react-router-dom";

export function LeftSide() {
    return (
        <article className="leftSideContainerRegistrarForLanding">
            <section className="tagNewContainerRegistrarForLanding">
                Nuevo
            </section>
            <section className="textSectionRegistrarForLanding">
                <h1>
                    ¡Comparte un 
                    lugar especial!
                </h1>
                <p>
                ¿Conoces un lugar increíble para disfrutar con tu mascota? Ayuda a la comunidad compartiendo tus experiencias. Desde parques hasta cafés pet-friendly.
                </p>
            </section>
            <section className="buttonSectionRegistrarForLanding">
                <Link to="/registrar/steps">
                    <button>
                        Crear un lugar
                    </button>
                </Link>
            </section>
        </article>
    )
}