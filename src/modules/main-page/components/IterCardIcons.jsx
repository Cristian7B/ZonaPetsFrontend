import { cardIconsConst } from "../utils/consts"
import { CardIcons } from "./CardIcons"

export function IterCardIcons() {
    return (
        <section className="cardIconsIterZonaPets">
            {
                cardIconsConst.map((card, index) => (
                    <CardIcons 
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        paragraph={card.paragraph}
                        linkTo={card.linkTo}
                        textLinkTo={card.textLinkTo}
                        icon1={card.icon1}
                        icon2={card.icon2}
                        icon3={card.icon3}
                        layoutIcon={card.layoutIcon}
                        text1H3={card.text1H3}
                        text1p={card.text1p}
                        text2H3={card.text2H3}
                        text2p={card.text2p}
                        text3H3={card.text3H3}
                        text3p={card.text3p}
                    />
                ))
            }
        </section>
    )
}