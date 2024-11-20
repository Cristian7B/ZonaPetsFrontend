import { ItemMomento } from "./ItemMomento";
import { Portada } from "./Portada";
import { QueOfrecemos } from "./QueOfrecemos";
import { ZonaPetsInfo } from "./ZonaPetsInfo"
import { Mision } from "./Mision"
import { Objetivos } from "./Objetivos"
import { SwiperComp } from "./Swiper";
import { Footer } from "../../../../general/components/Footer";
import "../AcercaDe.css"
import { PrincipalNav } from "../../../../general/components/PrincipalNav";
export function AcercaDe() {
    return (
        <>
            <PrincipalNav/>
            <Portada/>
            <div className="container-all">
                <ItemMomento/>
                <QueOfrecemos/>
                <ZonaPetsInfo/>
                <Mision/>
                <Objetivos/>
                <SwiperComp/>
            </div>
            <Footer/>
        </>
    )
}