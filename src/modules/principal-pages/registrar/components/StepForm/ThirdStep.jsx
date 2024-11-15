import { useEffect, useState } from "react"
import { dataTypeRegistry } from "../../utils/consts"
import { CardTypePlaceRegistry } from "./CardTypePlaceRegistry"

export function ThirdStep({setDataTypeRegistry, setAuthOptions}) { 
    const [controllerSelect, setControllerSelect] = useState(null)
    useEffect(() => {
        if(controllerSelect !== null) {
            setDataTypeRegistry(dataTypeRegistry[controllerSelect].tipo)
            setAuthOptions(true)
        } else {
            setDataTypeRegistry("")
            setAuthOptions(false)
        }
    }, [controllerSelect])
    return (
            <>
                <section className="containerOfHeaderForPlace">
                    <h1> 
                        ¿Qué tipo de lugar quieres registrar?
                    </h1>
                    <div className="containerCardsOfPlaceRegistry">
                        {
                            dataTypeRegistry.map((item, index) => (
                                <CardTypePlaceRegistry
                                    key={index}
                                    controllerSelect={controllerSelect}
                                    controllerSelectChange={(value) => setControllerSelect(value)}
                                    index={index}
                                    name={item.tipo}
                                    icon={item.icon}
                                    className={item.className}
                                    tipoSelect={"registro"}
                                />
                            ))
                        }
                    </div>
                </section>
            </>
    )
}