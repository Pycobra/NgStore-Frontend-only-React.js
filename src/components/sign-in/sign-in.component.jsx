import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import { selectClickedSlideImages } from '../../redux/images_url/images_url.selectors.js';
import { createStructuredSelector } from 'reselect';
import FormInput from "../form-input/form-input.component";
import RadioInput from "../radio-input/radio-input.component";
import { useState } from "react";



const SignIn = () => {
    const [userCredential, setUserCredential] = useState({email: '', password: ''})
    const {email, password} = userCredential

    const HandleChange = (e) => {
        const {name, value} = e.target;
        setUserCredential({...userCredential, [name]: value})
    }
    const handleSignUp = () => {
        document.querySelector('template#sign-up').setAttribute('style', 'display:flex')
    }
    
    return(
        <section id="sign-in">
        <div className="content">
            <h1 className="head">My Account</h1>
            <div className="block">
                <div className="inner-block1">
                    <h2 className="head">SIGN IN</h2>
                    <p>Required Fields*</p>
                    <form>
                        <FormInput 
                            shrinkinputtype="true"
                            name="email" 
                            type='email' 
                            label="Email*"
                            value={email}
                            handleChange={(e) => HandleChange(e)}
                            style={{color: 'var(--normalblack)'}}
                            required  /> 
                        <FormInput 
                            shrinkinputtype="true"
                            name="password" 
                            type='password' 
                            label="Password*"
                            value={password}
                            handleChange={(e) => HandleChange(e)}
                            style={{color: 'var(--normalblack)'}}
                            required  />
                        <RadioInput name="gender" blacklabel='true' type='radio' label="Keep me logged in"/> 
                        <CustomButton buttonType="shopNow">Login</CustomButton>
                        <span>Forgot Your Password</span>
                    </form>
                </div>

                <div className="inner-block2">
                    <h2 className="head">Create Account</h2>
                    <div>Create an account to track your order, manage your address books and update your peference</div>
                    <CustomButton onClick={() => handleSignUp()} buttonType="borderType">Create Account</CustomButton>
                </div>    
            </div>
            </div>
        </section>
    )
}


const mapStateToProps = createStructuredSelector({
    clickedSlideImages: selectClickedSlideImages,
  })
   export default SignIn;