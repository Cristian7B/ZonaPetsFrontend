import axios from "axios";
import { toast, Toaster } from "sonner";
import { useEffect, useState } from "react";

import { NavForSteps } from "./NavForSteps";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import { FourthStep } from "./FourthStep";
import { ProgressBar } from "./ProgressBar";

import "../../Registrar.css";
import { useLocation } from "../../../../Routes/context/GeolocationContext";

export function ControllerSteps() {
    const [step, setStep] = useState(1);
    const [valueStep, setValueStep] = useState(0);
    const [controllerInput, setControllerInput] = useState(1);
    const [dataTypeRegistry, setDataTypeRegistry] = useState(null);
    const [authOptions, setAuthOptions] = useState(false);
    
    const {objectLocation, setObjectLocation,  userLocation, setUserLocation} = useLocation();

    const styleButton = {
        display: step === 4 ? "block" : "none",
        backgroundColor: "hsl(140, 86%, 33%)",
        color: "#fff",
        borderRadius: "30px",
        padding: "10px 20px",
        fontSize: "1.2rem",
    }

    const styleButton2 = {
        display: step === 4 ? "none" : "block",
    }


    useEffect(() => {
        setValueStep(step * 25)
        setAuthOptions(false)
    }, [step]);



    const handleStep = () => {
        setStep(prevState => prevState + 1)
    }

    const handleBackStep = () => {
        if(step === 1) return;
        setStep(prevState => prevState - 1)
    }

    const warningOption = () => {
        toast.warning(`Debes seleccionar una opción`, {className: "toastWarningRender"})
    }

    const [formData, setFormData] = useState({
        nombre_compania: '',
        latitud: objectLocation? objectLocation.lat : "",
        longitud: objectLocation ? objectLocation.lng : "",
        tipo_de_negocio: '',
        correo_electronico: '',
        telefono_usuario: '',
    });

    console.log(formData)


    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            latitud: objectLocation? objectLocation.lat : "",
            longitud: objectLocation ? objectLocation.lng : ""
        }))
    },[objectLocation])
    
    const handleLocationChange = (newLocation) => {
        setFormData(prevState => ({
            ...prevState,
            latitud: newLocation.lat,
            longitud: newLocation.lng
        }));
    };  

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        toast.promise(
            sendData(), 
            {
                loading: 'Registrando el lugar...',
                success: '¡Completado!',
                error: 'No se ha podido registrar el lugar.',
            }
        );
    };
    
    const sendData = async () => {
        try {
            const urlToSend = dataTypeRegistry === "Propietario del lugar" ? "empresa/": ""
            const response = await axios.post(`https://zonapets.vercel.app/back/procesar/${urlToSend}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.data.mensaje) {
                setFormData({
                    nombre_compania: '',
                    latitud: objectLocation.lat,
                    longitud: objectLocation.lng,
                    tipo_de_negocio: '',
                    correo_electronico: null,
                    telefono_usuario: '',
                });
                setStep(1);
            } else if (response.data.errors) {
                throw new Error("Errores: " + JSON.stringify(response.data.errors));
            }
        } catch (error) {
            throw new Error("No se ha podido registrar el lugar.");
        }
    };

    return (
            <div className="containerAllFromStepRegister">
                <Toaster richColors expand={true}/>
                <div className="containerFormStepRegister">
                    <NavForSteps/>
                    {step === 1 && (
                        <FirstStep
                            setFormData={setFormData}
                            setAuthOptions={setAuthOptions}
                        />
                    )}
                    {step === 2 && (
                        <SecondStep
                            userLocation={userLocation}
                            setUserLocation={setUserLocation}
                            setObjectLocation={setObjectLocation}
                            objectLocation={objectLocation}
                            setAuthOptions={setAuthOptions}
                            onLocationChange={handleLocationChange}
                        />
                    )}
                    {step === 3 && (
                        <ThirdStep
                            setFormData={setFormData}
                            setDataTypeRegistry={(nameRegistry) => setDataTypeRegistry(nameRegistry)}
                            setAuthOptions={setAuthOptions}
                        />
                    )}
                    {
                        step === 4 && (
                            <FourthStep 
                                dataTypeRegistry={dataTypeRegistry}
                                setFormData={setFormData}
                                handleSubmit={handleSubmit}
                                formData={formData}
                                setAuthOptions={setAuthOptions}
                                setControllerInput={setControllerInput}
                            />
                        )
                    }
                    <article className="bottomProgressAndButtons">
                        <ProgressBar value={valueStep}/>
                        <div className="buttonsForNextAndBack">
                            <button className="buttonsForNextAndBack1" onClick={handleBackStep}>Atrás</button>
                            <button style={styleButton2} className="buttonsForNextAndBack2" onClick={authOptions ? handleStep: warningOption}>Siguiente</button>
                            <button style={styleButton} className="buttonsForSaveSteps" onClick={controllerInput === 0 ? handleSubmit: warningOption}>Guardar</button>
                        </div>
                    </article>
                    <div className="provisionaDivResponsiveSteps"></div>
                </div>
            </div>
    )
}