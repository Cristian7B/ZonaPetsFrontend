import { CompRegister } from "../CompRegister";
import { UserRegister } from "../UserRegister";

export function FourthStep({setFormData, dataTypeRegistry, formData, setControllerInput}) {
    return (
        <>
        {
            dataTypeRegistry === "Propietario del lugar" ? (
                <>
                    <CompRegister
                        setFormData={setFormData}
                        formData={formData}
                        setControllerInput={setControllerInput}
                    />
                </>
            ):(
                <>
                    <UserRegister
                        setFormData={setFormData}
                        formData={formData}
                        setControllerInput={setControllerInput}
                    />
                </>
            )
        }
        </>
    )
}