import { useEffect, useState } from "react";
import { dataTypePlace } from "../../utils/consts";
import { CardTypePlace } from "./CardTypePlace";

export function FirstStep({setFormData, setAuthOptions}) {
    const [controllerSelect, setControllerSelect] = useState(null)
    
    useEffect(() => {
        if(controllerSelect !== null) {
            setAuthOptions(true)
        } else {
            setAuthOptions(false)
        }

    }, [controllerSelect])
    return (
        <>
            <section className="containerOfHeaderForPlace">
                <h1> 
                    ¿Qué tipo de lugar quieres registrar?
                </h1>
                <div className="containerCardsOfPlace">
                    {
                        dataTypePlace.map((item, index) => (
                            <CardTypePlace
                                key={index}
                                controllerSelect={controllerSelect}
                                controllerSelectChange={(value) => setControllerSelect(value)}
                                setFormData={setFormData}
                                index={index}
                                name={item.name}
                                icon={item.icon}
                                className={item.className}
                                tipoSelect={"lugar"}
                                elementToChange={"tipo_de_negocio"}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    )
}