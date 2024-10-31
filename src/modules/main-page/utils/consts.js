import earthOutline from "../static/assets/earth-outline.svg"
import peopleOutline from "../static/assets/people-circle-outline.svg"
import searchOutline from "../static/assets/search-circle-outline.svg"


export const dataForCard = [
    {   
        title: "Disfruta en tu ciudad",
        icon: earthOutline,
        description: "En ZonaPets podrás encontrar los sitios que reciben a tu peludito y así ir a tu destino preferido."
    },
    {
        title: "Obtén el premium",
        icon: searchOutline,
        description: "Proximamente en ZonaPets estará disponible el plan premium para que encuentres los mejores sitios y promociones."
    },
    {
        title: "Crea tu cuenta",
        icon: peopleOutline,
        description: "Inicia sesion. Recibe promociones y actualizaciones, guarda sitios en lo que has estado y compartelos con tus amigos."
    }
]

export const enjoyPlaces = [
    {
        title: "Divierte a tu mascota",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing eligendi ased asd"
    },
    {
        title: "Guarda el lugar en tu cuenta",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing eligendi ased asd"
    },
    {
        title: "¡Sugiere el lugar!",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing eligendi ased asd"
    }
]

import registerPhoneIcon from "../static/assets/phone-portrait-outline.svg"
import registerAddIcon from "../static/assets/add-outline.svg"
import registerCheckIcon from "../static/assets/checkmark-outline.svg"
import registerLayoutIcon from "../static/assets/LayoutIcon.webp"
// ------------------------------------------------------
import mapGlobalIcon from "../static/assets/globe-outline.svg"
import mapFlagIcon from "../static/assets/flag-outline.svg"
import mapSaveIcon from "../static/assets/bookmark-outline.svg"
import mapLayoutIcon from "../static/assets/LayoutIcon2.webp"

export const cardIconsConst = [
    {
        title: "¡Uno Nuevo!",
        subtitle: "Ve a un lugar.",
        paragraph: "Explora el mapa interactivo de nuestra página y descubre una gran variedad de lugares pet-friendly donde puedes disfrutar con tu mascota.",
        linkTo: "/mapa",
        textLinkTo: "Ve a un nuevo lugar",
        icon1: mapGlobalIcon,
        icon2: mapFlagIcon,
        icon3: mapSaveIcon,
        text1H3: "Ve al destino",
        text1p: "Busca sitios pet-friendly en tu zona.",
        text2H3: "Visita y disfruta",
        text2p: "Disfruta de nuevas experiencias.",
        text3H3: "Guarda favoritos",
        text3p: "Guarda los lugares que te gustaron.",
        layoutIcon: mapLayoutIcon
    },
    {
        title: "¿Te gusto?",
        subtitle: "Registralo.",
        paragraph: "Registra los lugares que has visitado con tus mascotas. Compártelos con la comunidad y ayuda a otros a encontrar lugares alrededor del mundo.",
        linkTo: "/registrar",
        textLinkTo: "Registra un nuevo lugar",
        icon1: registerPhoneIcon,
        icon2: registerAddIcon,
        icon3: registerCheckIcon,
        layoutIcon: registerLayoutIcon,
        text1H3: "Fuí a un lugar",
        text1p: "Haz visitado un lugar Pet-Friendly.",
        text2H3: "Registra",
        text2p: "Registra los lugares que has visitado",
        text3H3: "Guardar",
        text3p: "Guarda tu lugar y compartelo.",
    },
]