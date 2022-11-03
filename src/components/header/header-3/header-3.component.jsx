

import React from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as HelpSvg } from '../../asset/help.svg';
import { ReactComponent as ShoppingCartSvg } from '../../asset/shopping-cart5.svg';
import { ReactComponent as GoogleSvg } from '../../asset/google-play-black.svg';
import { ReactComponent as StarSvg } from '../../asset/star.svg';
import { ReactComponent as StarSvg2 } from '../../asset/star2.svg';
import { ReactComponent as UserSvg } from '../../asset/user.svg';
import { fetchImagesStart } from "../../../redux/images_url/images_url.action";
import { connect } from "react-redux";
import "./header-3.styles.css";



const Header3 = ({handleSearchHover, handleCartHover, handleHeaderListHover, handleMenuBarClick}) => {
    let navigate = useNavigate()
    let location = useLocation()
    
    return ( 
        <div className="header-3">
            <div className="main-box">
                 <div className="place-1">
                     {/* <Link className="logo-container" to='/'>
                         <strong>NGStore<br/>Boy
                             <span className="outSpan"><ShoppingCartSvg className="logo shopping-cart" /><StarSvg2 className="logo star" /></span>
                         </strong>
                     </Link> */}
                    <span className="logo-container">
                        <Link to="">
                            <strong>NGStore<br/>Boy
                                <span className="cart"><ShoppingCartSvg className="logo shopping-cart" /><StarSvg className="logo star" /></span>
                            </strong>
                        </Link>
                    </span>
                 </div>
                <div className="place-2">
                    <ul>
                        <li className="option option1 option6" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Jacket</li>
                        <li className="option option2 option7" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Shirt</li>
                        <li className="option option3 option8" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Shoe</li>
                        <li className="option option4 option9" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Tuxedo</li>
                        <li className="option option5 option10" 
                            onMouseOver={(e) => handleHeaderListHover(e)}>Sandals</li>
                    </ul>
                    {/* <ul>
                        <li className="option option1 option6">
                            <span>Jacket</span><span onMouseOver={(e) => handleHeaderListHover(e)} className="list-filler"></span>
                        </li>
                        <li className="option option2 option7">
                            <span>Shirt</span><span onMouseOver={(e) => handleHeaderListHover(e)} className="list-filler"></span>
                        </li>
                        <li className="option option3 option8">
                            <span>Shoe</span><span onMouseOver={(e) => handleHeaderListHover(e)} className="list-filler"></span>
                        </li>
                        <li className="option option4 option9">
                            <span>Tuxedo</span><span onMouseOver={(e) => handleHeaderListHover(e)} className="list-filler"></span>
                        </li>
                        <li className="option option5 option10">
                            <span>Sandals</span><span onMouseOver={(e) => handleHeaderListHover(e)} className="list-filler"></span>
                        </li>
                    </ul> */}
                </div>
                 <div className="place-3">
                     <span className="box-1">NG - $ USD</span>
                     <div className="box-2">
                         <span className="search-box"><HelpSvg /><span onMouseOver={(e) => handleSearchHover(e)} className="search-filler"></span></span>
                         <span><StarSvg /></span>
                         <span onClick={(e) => navigate(`${location.pathname}accounts/signin`)}><UserSvg /></span>
                        <span className="cart-box"><ShoppingCartSvg /><span onMouseOver={(e) => handleCartHover(e)} className="cart-filler"></span></span>
                     </div>
                 </div>
                <div className="place-4" id="menu-bar-box">
                    <div id="menubar" className="menu"><GoogleSvg /><span onClick={(e) => handleMenuBarClick(e)} className="menu-bar-filler"></span></div>
                    <div id="menutimes" className="menu"><StarSvg /><span onClick={(e) => handleMenuBarClick(e)} className="menu-bar-filler"></span></div>
                </div>
            </div>
        </div>
)}
// const mapDispatchToProps = (dispatch) => ({
//    fetchImagesStart: (url) => dispatch(fetchImagesStart(url))
// })
export default Header3;
// export default connect(null, mapDispatchToProps)(Header3);














// var slideOpen = true;
// var heightChecked = false;
// var initHeight = 0;
// var intVal = null;
// function slideToggle(){
//     window.clearInterval(intVal);
//     var mdiv = document.getElementById('mdiv');
//     if (!heightChecked){
//         initHeight = mdiv.offsetHeight;
//         heightChecked = true
//     }
//     if (slideOpen){
//         var h = initHeight;
//         slideOpen = false;
//         intVal = setInterval(function(){
//             h--;
//             mdiv.style.height = h + 'px'
//             if (h <= 0)
//                 window.clearInterval(intVal);
//         }, 1
//         );
//     }
//     else {

//         var h=0
//         slideOpen = true;
//         intVal = setInterval(function(){
//             h++;
//             mdiv.style.height = h + 'px'
//             if (h >= initHeight)
//                 window.clearInterval(intVal);
//         }, 1
//         );
//     }
// }
// // CSS
// #mdiv{
//     -webki-transition: all 1s ease-in-out;
//     transition: all 1s ease-in-out;
// }
// // java
// var slideOpen = true;
// var heightChecked = false;
// var initHeight = 0;

// function slideToggle(){
//     var mdiv = document.getElementById('mdiv');
//     if (!heightChecked){
//         initHeight = mdiv.offsetHeight;
//         heightChecked = true
//     }
//     if (slideOpen){
//         slideOpen = false;
//         mdiv.style.height = '0px'
//     }
//     else {
//         slideOpen = true;
//         mdiv.style.height = initHeight + 'px'
//     }
// }
// // if we want the start height to be zero
// var slideOpen = false;
// var initHeight = 120;

// const HandleCart = () => {
//     window.onmouseover = (event) => {
//     if (event.target.className === "cart-filler") {
//         document.querySelector('.header-3').slid
//         .setAttribute('style', 'border-bottom:1px solid rgb(219, 209, 209)')
//         document.querySelector('template#cart-hover.slide-in-cart').setAttribute('style', 'display:flex')
//         // document.querySelector('template#cart-hover').classList.add('slide-in-cart')
//     }
//     else if ((event.target.className !== "cart-filler" &&
//         event.target !== document.querySelector('.header-2 > .main-box > .place-3 > .box-2') &&
//         event.target !== document.querySelector('.header-2 > .main-box > .place-3') &&
//         event.target !== document.querySelector('.header-3 > .main-box > .place-3 > .box-2') &&
//         event.target !== document.querySelector('.header-3 > .main-box > .place-3') &&
//         event.target !== document.querySelector('.header-3') &&
//         event.target !== document.querySelector('.header-3 > .main-box') &&
//         event.target !== document.querySelector('template#cart-hover') &&
//         event.target.closest('template#cart-hover') === null) || 
//         (event.target === document.querySelector('template#cart-hover'))){
//             document.querySelector('.header-3').setAttribute('style', 'border-bottom:none')
//             // document.querySelector('template#cart-hover').setAttribute('style', 'display:none')
//             // document.querySelector('template#cart-hover > .content').setAttribute('style', 'animation: slideRightCart 2s ease-in-out 1')
//             document.querySelector('template#cart-hover').classList.remove('slide-in-cart').classList.add('slide-out-cart')
//     }
//     // document.querySelector('.header-3 > .main-box > .place-2').setAttribute('style', 'display:none')
//     // document.querySelector('template#search-hover').setAttribute('style', 'display:flex')
//     // document.querySelector('template#search-hover').classList.add('make-dom-this-search-btn-been-clicked')
//     } 
// }




