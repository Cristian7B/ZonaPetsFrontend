export function CompRegister({formData, setFormData}) {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="containerOfHeaderForPlace">
            <section className="containerCardsOfPlaceRegistryForm">
                <form className="formForRegisterUser">
                    <article>
                        <label htmlFor="inputForUser">Tu Nombre</label>
                        <input
                            type="text"
                            id="inputForUser"
                            name="nombre_de_quien_registra"
                            placeholder="John Doe"
                            onChange={handleChange}
                        />
                    </article>
                    <article>
                        <label htmlFor="inputForEmail">Correo Electrónico</label>
                        <input
                            type="email"
                            id="inputForEmail"
                            name="correo_electronico"
                            placeholder="zonapets@zonapets.com"
                            onChange={handleChange}
                        />
                    </article>
                    <article>
                        <label htmlFor="inputForComp">Nombre del Lugar</label>
                        <input
                            type="text"
                            id="inputForComp"
                            name="nombre_compañia"
                            placeholder="ZonaPets"
                            onChange={handleChange}                          
                        />
                    </article>
                    <article>
                        <label htmlFor="inputForTel">Tu número de teléfono</label>
                        <input
                            type="number"
                            id="inputForTel"
                            name="telefono_usuario"
                            placeholder="213123123"
                            onChange={handleChange}
                        />
                    </article>
                </form>
            </section>
        </div>
    )
}