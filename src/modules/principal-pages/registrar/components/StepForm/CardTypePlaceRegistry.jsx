import { useEffect, useState } from "react";
import { toast } from "sonner";

export function CardTypePlaceRegistry({ controllerSelect, index, controllerSelectChange, name, icon, className, tipoSelect}) {
    const [style, setStyle] = useState(false);
    const styleSelected = `${style ? "selected" : ""}`;

    const verifyHandleAndClass = (e) => {
        if (controllerSelect === null) {
            setStyle(prevState => !prevState);
            controllerSelectChange(index); 
        } else if (controllerSelect === index) {
            setStyle(prevState => !prevState);
            controllerSelectChange(null); 
        } else {
            toast.warning(`Solo puedes seleccionar un tipo de ${tipoSelect}`, {className: "toastWarningRender"})
        }
    };

    return (
        <>
            <article 
                onClick={verifyHandleAndClass} 
                className={`cardOfPlaceSteps${className} ${styleSelected}`}
            >
                <img src={icon} alt={name}/>
                <p>{name}</p>
            </article>
        </>
    );
}