import mapOutline from "../assets/map-outline.svg"
import addOutline from "../assets/add-outline-tool.svg"
import personOutline from "../assets/person-outline.svg"

export const elementsTool = [
    {
        icon: mapOutline,
        text: 'Mapa',
        link: 'mapa'
    },
    {
        icon: addOutline,
        text: 'Registrar',
        link: 'registrar'
    },  
    {
        icon: personOutline,
        text: 'Cuenta',
        link: 'iniciarsesion'
    }
]

export const LINKS = {
    "/mapa": 0,
    "/registrar": 1,
    "/iniciarsesion": 2
}