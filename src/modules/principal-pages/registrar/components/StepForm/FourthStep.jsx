import { CompRegister } from "../CompRegister";
import { UserRegister } from "../UserRegister";

export function FourthStep({setFormData, dataTypeRegistry, formData, handleSubmit}) {
    return (
        <>
        {
            dataTypeRegistry === "Propietario del lugar" ? (
                <>
                    <CompRegister
                        setFormData={setFormData}
                        formData={formData}
                    />
                </>
            ):(
                <>
                    <UserRegister
                        setFormData={setFormData}
                        formData={formData}
                    />
                </>
            )
        }
        </>
    )
}