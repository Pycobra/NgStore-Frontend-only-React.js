import React, { useEffect } from "react";
import "./cart-hover.styles.css";
import CustomButton from "../custom-button/custom-button.component";



const CartHover = () => (
        <template id="cart-hover"> 
            <div className="content">
                <div className="block1">
                    <h1>YOUR BAG</h1>
                    <p>There are no items inyour cart, wanna draw inspiration? take a look at the complete NgStoreBoy range</p>
                    <CustomButton buttonType="borderType">SHOP NOW</CustomButton>
                </div>
                <div className="block2">
                    <div className="first"><span>Total</span> <span>$0.00</span></div>
                    <span className="last">View Bag</span>
                </div>
            </div>

        </template>
    )
export default CartHover;