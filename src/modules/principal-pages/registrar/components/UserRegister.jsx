export function UserRegister({formData, setFormData}) {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div className="containerOfHeaderForPlace">
            <section className="containerCardsOfPlaceRegistryForm">
                <form className="formForRegisterUser">
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

// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }
