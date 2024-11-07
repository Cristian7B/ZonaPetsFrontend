import axios from "axios";
import { toast } from "sonner";

import { useEffect, useState } from "react";
import { useGeolocation } from "../../hooks/useGeolocation";

import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { NavForSteps } from "./NavForSteps";

import "../../Registrar.css";
import { ProgressBar } from "./ProgressBar";
export function ControllerSteps() {
    const [step, setStep] = useState(1);
    const [valueStep, setValueStep] = useState(0);

    useEffect(() => {
        if (step === 1) {
            setValueStep(33);
        } else if (step === 2) {
            setValueStep(66);
        } else if (step === 3) {
            setValueStep(100);
        } else {
            setValueStep(0);
        }
    }, [step]);

    const handleStep = () => {
        setStep(prevState => prevState + 1)
    }

    const handleBackStep = () => {
        setStep(prevState => prevState - 1)
    }


    const {objectLocation} = useGeolocation()
    const [formData, setFormData] = useState({
        nombre_compañia: '',
        latitud: objectLocation.lat,
        longitud: objectLocation.lng,
        tipo_de_negocio: '',
        correo_electronico: null,
        telefono_usuario: '',
    });

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            latitud: objectLocation.lat,
            longitud: objectLocation.lng
        }))
    },[objectLocation])
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLocationChange = (newLocation) => {
        setFormData(prevState => ({
            ...prevState,
            latitud: newLocation.lat,
            longitud: newLocation.lng
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // const csrftoken = getCookie('csrftoken'); 
        axios.post('http://127.0.0.1:8000/back/procesar/', formData, {
            headers: {
                'Content-Type': 'application/json',
                // 'X-CSRFToken': csrftoken,  
            },
        })
        .then(response => {
            if (response.data.mensaje) {
                toast.success(`Haz registrado "${formData.nombre_compañia}"`, {
                    className: "toastSuccesRender"
                })
                setFormData({
                    nombre_compañia: '',
                    latitud: objectLocation.lat,
                    longitud: objectLocation.lng,
                    tipo_de_negocio: '',
                    correo_electronico: null,
                    telefono_usuario: '',
                })
            } else if (response.data.errors) {
                alert("Errores: " + JSON.stringify(response.data.errors));
            }
        })
        .catch(error => {
            toast.error(`No se ha podido registrar el lugar.`, {
                className: "toastErrorRender"
            })
        });
    }

    return (
        <div className="containerAllFromStepRegister">
            <div className="containerFormStepRegister">
                <NavForSteps/>
                {step === 1 && (
                    <FirstStep
                        formData={formData}
                        handleChange={handleChange}
                        handleLocationChange={handleLocationChange}
                        setStep={setStep}
                    />
                )}
                {step === 2 && (
                    <SecondStep
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        setStep={setStep}
                    />
                )}
                <article className="bottomProgressAndButtons">
                    <ProgressBar value={valueStep}/>
                    <div className="buttonsForNextAndBack">
                        <button className="buttonsForNextAndBack1" onClick={handleBackStep}>Atrás</button>
                        <button className="buttonsForNextAndBack2" onClick={handleStep}>Siguiente</button>
                    </div>
                </article>
            </div>
        </div>
    )
}