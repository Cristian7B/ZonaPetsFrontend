import axios from "axios";
import { toast, Toaster } from "sonner";
import { useGeolocation } from "../../hooks/useGeolocation";
import { useEffect, useState } from "react";

import { FirstStep } from "./FirstStep";
import { NavForSteps } from "./NavForSteps";
import { ProgressBar } from "./ProgressBar";
import { ThirdStep } from "./ThirdStep";
import { FourthStep } from "./FourthStep";
import { LoadScript } from "@react-google-maps/api";
import { Registrar } from "../Registrar";



import "../../Registrar.css";

export function ControllerSteps() {
    const [step, setStep] = useState(1);
    const [valueStep, setValueStep] = useState(0);
    const [dataTypeRegistry, setDataTypeRegistry] = useState(null);
    
    const {objectLocation, setObjectLocation, setUserLocation, userLocation} = useGeolocation()


    useEffect(() => {
        setValueStep(step * 25)
    }, [step]);

    const handleStep = () => {
        setStep(prevState => prevState + 1)
    }

    const handleBackStep = () => {
        if(step === 1) return;
        setStep(prevState => prevState - 1)
    }

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
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
        >
            <div className="containerAllFromStepRegister">
                <Toaster richColors expand={true}/>
                <div className="containerFormStepRegister">
                    <NavForSteps 
                        handleSubmit={handleSubmit}
                    />
                    {step === 1 && (
                        <FirstStep
                            setFormData={setFormData}
                        />
                    )}
                    {step === 2 && (
                        <Registrar
                            handleLocationChange={handleLocationChange}
                            userLocation={userLocation}
                            setUserLocation={setUserLocation}
                            setObjectLocation={setObjectLocation}
                            objectLocation={objectLocation}
                        />
                    )}
                    {step === 3 && (
                        <ThirdStep
                            setFormData={setFormData}
                            setDataTypeRegistry={(nameRegistry) => setDataTypeRegistry(nameRegistry)}
                        />
                    )}
                    {
                        step === 4 && (
                            <FourthStep 
                                dataTypeRegistry={dataTypeRegistry}
                                setFormData={setFormData}
                                handleSubmit={handleSubmit}
                                formData={formData}
                            />
                        )
                    }
                    <article className="bottomProgressAndButtons">
                        <ProgressBar value={valueStep}/>
                        <div className="buttonsForNextAndBack">
                            <button className="buttonsForNextAndBack1" onClick={handleBackStep}>Atrás</button>
                            <button className="buttonsForNextAndBack2" onClick={handleStep}>Siguiente</button>
                        </div>
                    </article>
                    <div className="provisionaDivResponsiveSteps"></div>
                </div>
            </div>
        </LoadScript>
    )
}