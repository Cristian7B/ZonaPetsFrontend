import { useState } from "react";
import { toast } from "sonner";

export function CardTypePlace({ controllerSelect, setFormData, index, controllerSelectChange, name, icon }) {
    const handleChange = (nameValue) => {
        setFormData(prevState => ({
            ...prevState,
            tipo_de_negocio: nameValue
        }));
    };

    const [style, setStyle] = useState(false);
    const styleSelected = `${style ? "selected" : ""}`;

    const verifyHandleAndClass = (e) => {
        if (controllerSelect === null) {
            setStyle(prevState => !prevState);
            controllerSelectChange(index); 
            handleChange(name); 
        } else if (controllerSelect === index) {
            setStyle(prevState => !prevState);
            controllerSelectChange(null); 
            handleChange(""); 
        } else {
            toast.warning("Solo puedes seleccionar un tipo de lugar", {className: "toastWarningRender"})
        }
    };

    return (
        <>
            <article 
                onClick={verifyHandleAndClass} 
                className={`cardOfPlaceSteps ${styleSelected}`}
            >
                <img src={icon} alt={name} width="50px"/>
                <p>{name}</p>
            </article>
        </>
    );
}
