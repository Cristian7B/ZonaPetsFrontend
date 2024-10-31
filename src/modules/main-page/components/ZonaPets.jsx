import { AboutZonaPets } from "./AboutZonaPets"
import { Footer } from "./Footer"
import { GridContent } from "./GridContent"

import "../ZonaPets.css"
import { FirstTitle } from "./FirstTitle"
import { IterCardIcons } from "./IterCardIcons"
export function ZonaPets() {
    return (
        <>
            <AboutZonaPets/>
            <FirstTitle/>
            <IterCardIcons/>
            <GridContent/>
            <Footer/>
        </>
    )   
}