import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LINKS } from "../utils/consts";

export function ComponentTool({icon, text, link}) {
    const location = useLocation(); 
    const [liClass, setLiClass] = useState(null);

    const actualizeLink = linkFor => {
        if (LINKS[linkFor] === LINKS[`/${link}`]) {
            setLiClass("navGeneralTool-item active");
        } else {
            setLiClass("navGeneralTool-item");
        }
    }
    
    useEffect(() => {
        actualizeLink(location.pathname); 
    }, [location.pathname]); 

    return (
        <li className={liClass}>
            <Link to={link}  className="navGeneralTool-item-link">
                <img className="navGeneralTool-item-icon" src={icon} alt={text} />
                <span className="navGeneralTool-item-text">{text}</span>
            </Link>
        </li>
    )
}
