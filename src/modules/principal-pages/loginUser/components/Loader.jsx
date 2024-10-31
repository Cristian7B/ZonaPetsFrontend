import { PulseLoader } from "react-spinners";

export function Loader() {
    return (
        <div style={{display:"flex", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            <PulseLoader
                color="#3b9af3"
                speedMultiplier={0.7}
            />
        </div>
    )
}