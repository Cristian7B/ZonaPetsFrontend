import travelDogs from "../../static/assets/TravelDogs.webp"
import travelDogsResponsive from "../../static/assets/TravelDogsResponsive.webp"
export function RightSide() {
    return (
        <article className="rightSideContainerRegistrarForLanding">
            <img src={travelDogs} alt="" className="firstImageContainerRegistrarForLading"/>
            <img src={travelDogsResponsive} className="secondImageContainerRegistrarForLading" alt="" />
        </article>
    )
}