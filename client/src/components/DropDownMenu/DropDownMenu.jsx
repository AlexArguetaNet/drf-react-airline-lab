import "./DropDownMenu.css"
import { useState } from "react"

function DropDownMenu({ title, options }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown-menu" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <div className="dropdown-menu-button">
                <p>{ title }</p>    
            </div>

            {/* Check if the mouse is hovering over the menu button */}
            {   
                isOpen && (
                    <div className="menu-options-container">
                        <div className="options-container">
                            {options.map((option, index) => (
                                    <div className="option-container">
                                        {option}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DropDownMenu
