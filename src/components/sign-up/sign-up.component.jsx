import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./sign-up.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import { selectClickedSlideImages } from '../../redux/images_url/images_url.selectors.js';
import { createStructuredSelector } from 'reselect';
import FormInput from "../form-input/form-input.component";
import RadioInput from "../radio-input/radio-input.component";
import { useState } from "react";



const SignUp = ({cancelSlideModal}) => {
    const [userCredential, setUserCredential] = useState({email: '', firstname: '', lastname: ''})
    const {email, firstname, lastname} = userCredential

    const HandleChange = (e) => {
        const {name, value} = e.target;
        setUserCredential({...userCredential, [name]: value})
    }
    return(
        <template id="sign-up">
            <div className="content">
                <div className="inner-block1">
                    <img className='img-top' src={require('../../Media/fashion/brock-wegner-7yONARoUsbY-unsplash.jpg')} />
                </div>

                <div className="inner-block2">
                    <div className='box-1'>
                        <span>DON'T MISS OUT</span>
                        <span>SUSCRIBE TO OUR NEWSLETTER TO RECIEVE 10% OFF YOUR FIRST ORDER AS WELL AS ACCESS TO THE LATEST NGSTORE BOY NEWS, COLLECTIONS, PROMOTIONS AND IN-STORE EVENTS</span>
                    </div>
                    <div className='box-2'>
                        <div className="radio-div">
                            <div><RadioInput name="gender" blacklabel='true' type='radio' label="Male"/></div>
                            <div><RadioInput name="gender" blacklabel='true' type='radio' label="Female"/></div>
                        </div>
                        <form>
                            <div className="top">
                                <FormInput 
                                    shrinkinputtype="true"
                                    inputtype='SmallInputType2'
                                    name="firstname" 
                                    type='text' 
                                    label="First Name*"
                                    value={firstname}
                                    handleChange={(e) => HandleChange(e)}
                                    required  /> 
                                <FormInput 
                                    shrinkinputtype="true"
                                    inputtype='SmallInputType2'
                                    name="lastname" 
                                    type='text' 
                                    label="Last Name*"
                                    value={lastname}
                                    handleChange={(e) => HandleChange(e)}
                                    required  /> 
                            </div>
                            <FormInput 
                                shrinkinputtype="true"
                                name="email" 
                                type='email' 
                                label="Email*"
                                value={email}
                                handleChange={(e) => HandleChange(e)}
                                style={{color: 'var(--normalblack)'}}
                                required /> 
                            <CustomButton buttonType="shopNow">Sign Up</CustomButton>
                        </form>
                    </div>
                </div>    
                <span className='cancel' onClick={(e) => cancelSlideModal(e)}>X</span>
                
            </div>
        </template>
    )
}


const mapStateToProps = createStructuredSelector({
    clickedSlideImages: selectClickedSlideImages,
  })
   export default SignUp;