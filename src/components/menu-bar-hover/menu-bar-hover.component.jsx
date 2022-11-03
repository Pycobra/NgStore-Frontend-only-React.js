import React, { useEffect } from "react";
import "./menu-bar-hover.styles.css";
import CustomButton from "../custom-button/custom-button.component";








const MenuBarHover = ({handleClick, handleHeaderListHover}) => (
        <template id="menu-bar-hover"> 
            <div className="content">
                <div className="place-1">
                    <div className="inside">
                        <span onClick={(e) => handleClick(e, 'MEN')} className="men-href href-focus" to='/'>MEN</span>
                        <span onClick={(e) => handleClick(e, 'WOMEN')} className="women-href" to='/'>WOMEN</span>
                    </div>
                </div>
                {/* <span className="split-line"/> */}
                <div className="place-2">
                    <ul>
                        <li className="option option1 option6 menu-bar-link" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Jacket</li>
                        <li className="option option2 option7 menu-bar-link" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Shirt</li>
                        <li className="option option3 option8 menu-bar-link" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Shoe</li>
                        <li className="option option4 option9 menu-bar-link" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Tuxedo</li>
                        <li className="option option5 option10 menu-bar-link" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Sandals</li>
                    </ul>
                </div>
            </div>

        </template>
    )
export default MenuBarHover;