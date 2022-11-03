import React from "react";
import "./custom-button.styles.css";


const CustomButton = ({children, buttonType, ...otherProps}) => (
    <button className={`${
        (buttonType === "shopNow") ? "shop-now-btn" 
        : (buttonType === "textAlone") ? "text-alone"
        : (buttonType === "borderType") ? "border-type" 
        : ''} custom-button`} {...otherProps}>
        { children }
    </button>
)
export default CustomButton;