import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AppleSvg } from '../asset/apple.svg';
import { ReactComponent as GooglePlaySvg } from '../asset/google-play.svg';
import { ReactComponent as ShoppingCartSvg } from '../asset/shopping-cart1.svg';
import { ReactComponent as StarSvg } from '../asset/star.svg';
import { ReactComponent as TwitterSvg } from '../asset/twitter.svg';
import { ReactComponent as FaceBookSvg } from '../asset/facebook.svg';
import "./footer.styles.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { useState } from "react";





const Footer = () => {
    const [email, setEmail] = useState('')

    const HandleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value)
        setEmail(value)
    }
    return (
        <footer>
            <section className="first-side">
                <div className="block1" id="inside1">
                    <div className="site-logo">
                        <span className="logo-container">
                            <Link to="">
                                <strong>NGStore<br/>Boy
                                    <span className="cart"><ShoppingCartSvg className="logo shopping-cart" /><StarSvg className="logo star" /></span>
                                </strong>
                            </Link>
                        </span>
                        <span className="money">NG - $ USD</span>
                    </div>
                    <div className="contact">
                        <div className="box-1">
                            <div className="service">
                                <span> CUSTOMER SERVICE</span>
                                <span> Help And Contact Us</span>
                                <span> Shipping And Returns</span>
                                <span> Care And Guidelines</span>
                            </div>
                            <div className="others">
                                <div className="inner-block1">
                                    <span>ABOUT</span>
                                    <span>About Us</span>
                                    <span>Stores</span>
                                </div>
                                <div className="inner-block2">
                                    <span>LET US FIX IT</span>
                                    <span>Help Center</span>
                                    <span>How To Sell On NGStoreboy</span>
                                </div>
                            </div>
                        </div>
                        <div className="box-2">
                            <p>STAY IN THE KNOW</p>
                            <form>
                                <FormInput 
                                    shrinkinputtype="true"
                                    name="email" 
                                    type='email' 
                                    label="Email"
                                    value={email}
                                    handleChange={(e) => HandleChange(e)}
                                    required  /> 
                                <CustomButton buttonType="textAlone">SIGN UP</CustomButton>
                            </form>
                        </div>
                    </div>
                    <div style={{color: 'var(--normalwhite)'}} className="last-block">
                        <div style={{color: 'var(--normalwhite)'}} className="box-1">
                            <span>STORE FINDER {'>'}</span>
                            <span>Terms and Condition</span>
                            <span>Privacy Policy</span>
                            <span>Social Network</span>
                        </div>
                        <div style={{color: 'var(--normalwhite)'}} className="box-2">
                            <span>Copyright &copy; NGstoreboy All Rights Reserved</span>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )}


export default Footer;


