import { PrincipalNav } from "../../../../general/components/PrincipalNav";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

import "../../Registrar.css"

export function Registrar() {
    return (
        <>
            <PrincipalNav/>
            <div className="containerForAllOfRegistrarForLanding">
                <div className="containerOfRegistrarForLanding">
                    <section className="containerBlurOfRegistrarForLanding">
                        <LeftSide/>
                        <RightSide/>
                    </section>
                </div>
            </div>
        </>
    )
}
