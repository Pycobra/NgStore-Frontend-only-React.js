import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as HelpSvg } from '../../asset/help.svg';
import { ReactComponent as ShoppingCartSvg } from '../../asset/shopping-cart5.svg';
import { ReactComponent as StarSvg } from '../../asset/star.svg';
import { ReactComponent as GoogleSvg } from '../../asset/google-play-black.svg';
import { ReactComponent as StarSvg2 } from '../../asset/star2.svg';
import { ReactComponent as UserSvg } from '../../asset/user.svg';
// import { switchGenderStart } from "../../../redux/images_url/images_url.action";
import "./header-2.styles.css";
import { useEffect } from "react";






const Header2 = ({handleSearchHover, handleCartHover, handleMenuBarClick, handleClick}) => {
    let navigate = useNavigate()
    let location = useLocation()
    // const setTimer_ = (child, duration) => {
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //            resolve(() =>  child.classList.add('dontDisplay1'))
    //          }, duration)
    //     })
    //     return promise
    // }
    const onWindowScroll = window.onscroll = async () => {
        // const clonedPlace2 = document.querySelector('.header-2 > .main-box > .place-2').cloneNode(true)
        // const clonedPlace3 = document.querySelector('.header-2 > .main-box > .place-3').cloneNode(true)
        const header = document.querySelector('.header')
        const header1 = document.querySelector('.header-1')
        const header2 = document.querySelector('.header-2')
        const header3 = document.querySelector('.header-3')
        if (window.scrollY > 0){
            // headerChild.map(child => child.classList.remove('main-box'))
            // header3.insertAdjacentHTML('afterBegin', clonedPlace2)
            // header3.insertAdjacentHTML('beforeEnd', clonedPlace3)
            header1.setAttribute('style', 'height:70px;')
            header3.setAttribute('style', 'height:70px;border-bottom:1px solid rgb(219, 209, 209)')
            document.querySelector('.header-3 > .main-box > .place-1').setAttribute('style', 'display:flex;')
            document.querySelector('.header-3 > .main-box > .place-2').setAttribute('style', 'width:38%;')
            // document.querySelector('.header-3 > .main-box > .place-4#menu-bar-box').setAttribute('style', 'display:flex;')

            // document.querySelector('.header-3 > .main-box > .place-3').setAttribute('style', 'display:flex;')

            document.querySelector('.header-3 > .main-box').setAttribute('style', 'justify-content: space-between;')
            header2.setAttribute('style', 'display:none')

            if (document.querySelector('template#search-hover').classList.contains('make-dom-this-search-btn-been-clicked')){
                header3.setAttribute('style', 'height:70px;border-bottom:none;')
                document.querySelector('.header-3 > .main-box > .place-2').setAttribute('style', 'display:none')
            }
            // header2.classList.add('header-2-no-display')
            // header3.classList.add('header-3-no-display')
            // headerChild2.map(child => child.classList.add('header-2-no-display'))
            // headerChild3.map(child => child.classList.add('header-3-no-display'))
        } else {
            document.querySelector('.header-3 > .main-box').setAttribute('style', 'display:flex')
            header1.removeAttribute('style', 'height:70px;')
            header2.setAttribute('style', 'display:flex')
            header3.removeAttribute('style', 'height:70px;border-bottom:none')
            document.querySelector('.header-3 > .main-box > .place-1').setAttribute('style', 'display:none;')
            document.querySelector('.header-3 > .main-box > .place-4#menu-bar-box').setAttribute('style', 'display:none;')
            document.querySelector('.header-3 > .main-box > .place-2').setAttribute('style', 'width:auto;')
            // document.querySelector('.header-3 > .main-box > .place-3').setAttribute('style', 'display:none;')
            document.querySelector('.header-3 > .main-box').setAttribute('style', 'justify-content:center;width:auto;')
            // header2.classList.remove('header-2-no-display')
            // header3.classList.remove('header-3-no-display')
            // headerChild2.map(child => child.classList.toggle('header-2-no-display'))
            // headerChild3.map(child => child.classList.toggle('header-3-no-display'))

        }
        if (window.scrollY === 0 && window.innerWidth >= 769){
            console.log('000 window.innerWidth')
            document.querySelector('.header-3 > .main-box > .place-3').setAttribute('style', 'display:none;')
        } 
        if (window.scrollY > 0 && window.innerWidth >= 769){
            console.log('111 window.innerWidth')
            document.querySelector('.header-3 > .main-box > .place-4#menu-bar-box').setAttribute('style', 'display:none;')
            document.querySelector('.header-3 > .main-box > .place-3').setAttribute('style', 'display:flex;')
        }
        if (window.scrollY > 0 && window.innerWidth <= 768){
            console.log('222 window.innerWidth')
            document.querySelector('.header-3 > .main-box > .place-4#menu-bar-box').setAttribute('style', 'display:flex;')
            document.querySelector('.header-3 > .main-box > .place-4#menu-bar-box >').setAttribute('style', 'display:flex;')
            document.querySelector('.header-3 > .main-box > .place-3').setAttribute('style', 'display:none;')
        }
    }
    // const HandleClick = (e, gender) => {
    //     const {className} = e.target 
    //     console.log(typeof e.target.classList.contains('href-focus'))
    //     const effect = document.querySelectorAll(".href-focus")
    //     Array.from(effect).map(itm => itm.classList.remove('href-focus'))

    //     const theClass = document.querySelector(`.${className.split(" ")[0]}`)
    //     theClass.classList.add('href-focus')
    //     switchGenderStart({gender: gender})
    // }
    return ( 
        <div className="header-2">
            <div className="main-box">
                <div className="place-1">
                    <span onClick={(e) => handleClick(e, 'MEN')} className="men-href href-focus" to='/'>MEN</span>
                    <span onClick={(e) => handleClick(e, 'WOMEN')} className="women-href" to='/'>WOMEN</span>
                </div>
                <div className="place-2">
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
//    switchGenderStart: (content) => dispatch(switchGenderStart(content))
// })
// export default connect(null, mapDispatchToProps)(Header2);
export default Header2;