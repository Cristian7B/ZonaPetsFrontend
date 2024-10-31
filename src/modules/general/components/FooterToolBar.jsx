import { ComponentTool } from "./ComponentTool"
import { elementsTool } from "../utils/consts"
import "../styles/ToolBar.css"

export function FooterToolBar() {    
    return (
        <nav className="navGeneralTool">
            <div className="navGeneralTool-box">
                <ul className="navGeneralTool-container">
                    {
                        elementsTool.map((element, index) => (
                            <ComponentTool 
                                key={index} 
                                icon={element.icon} 
                                text={element.text} 
                                link={element.link} 
                            />
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}