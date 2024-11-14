import hotelIcon from "../static/assets/bed-outline.svg"
import restaurantIcon from "../static/assets/restaurant-outline.svg"
import parkIcon from "../static/assets/partly-sunny-outline.svg"
import paseoIcon from "../static/assets/footsteps-outline.svg"
import mallIcon from "../static/assets/business-outline.svg"
import planeIcon from "../static/assets/airplane-outline.svg"
import storeIcon from "../static/assets/storefront-outline.svg"
import addIcon from "../static/assets/add-outline.svg"

export const dataTypePlace = [
    {
        name: "Hoteles",
        icon: hotelIcon,
        className: "",
    },
    {
        name: "Restaurante",
        icon: restaurantIcon,
        className: "",
    },
    {
        name: "Parque Para Mascotas",
        icon: parkIcon,
        className: "",
    },
    {
        name: "Centro Comercial",
        icon: mallIcon,
        className: "",
    },
    {
        name: "Tienda de Mascotas",
        icon: storeIcon,
        className: "",
    },
    {
        name: "Sitios Turísticos",
        icon: planeIcon,
        className: "",
    },
    {
        name: "Servicio De Paseo",
        icon: paseoIcon,
        className: "",
    },
    {
        name: "Otros",
        icon: addIcon,
        className: "",
    },
];

import personIcon from "../static/assets/walk-outline.svg"
import businessIcon from "../static/assets/storefront-outline2.svg"

export const dataTypeRegistry = [
    {
        tipo: "Propietario del lugar",
        icon: businessIcon,
        className: "TypeRegistry"
    },
    {
        tipo: "Visitante del lugar",
        icon: personIcon,
        className: "TypeRegistry"
    }
]   
