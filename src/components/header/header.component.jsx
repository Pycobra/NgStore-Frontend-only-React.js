import React, { useEffect, useState } from "react";
import Header1 from "./header-1/header-1.component";
import Header2 from "./header-2/header-2.component";
import Header3 from "./header-3/header-3.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./header.styles.css";
import { selectCurrentImageForUse } from "../../redux/images_url/images_url.selectors";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import HeaderListHover from "../header-list-hover/header-list-hover.component";
import SearchHover from "../search-hover/search-hover.component";
import CartHover from "../cart-hover/cart-hover.component";
import MenuBarHover from "../menu-bar-hover/menu-bar-hover.component";
import { fetchImagesStart, switchGenderStart } from "../../redux/images_url/images_url.action";




const Header = ({switchGenderStart, cancelSlideModal, fetchImagesStart}) => {
    const HandleClick = (e, gender) => {
        const {className} = e.target 
        const effect = document.querySelectorAll(".href-focus")
        Array.from(effect).map(itm => itm.classList.remove('href-focus'))
        // const theClass = document.querySelectorAll(`.${className.split(" ")[0]}`)
        const theClass = document.querySelectorAll(`.${className}`)
        Array.from(theClass).map(itm => itm.classList.add('href-focus'))
        switchGenderStart({gender: gender})
        console.log(gender)

        if (gender === 'MEN') {
            let li_list = document.querySelectorAll('template#menu-bar-hover > .content > .place-2 > ul > li')
            Array.from(li_list).map(itm => itm.setAttribute('style', 'background-color: #dde1e7;'))
        } 
        else {        
            let li_list = document.querySelectorAll('template#menu-bar-hover > .content > .place-2 > ul > li')
            Array.from(li_list).map(itm => itm.setAttribute('style', 'background-color: #dbd1d1;'))
        }
    } 
    const HandleMenuBarClick = (e) => {
        const clickedParent = e.target.parentElement
        const parent = Array.from(document.querySelectorAll('#menu-bar-box > .menu'))
        const menubar = Array.from(document.querySelectorAll('#menu-bar-box > #menubar'))
        const menutimes = Array.from(document.querySelectorAll('#menu-bar-box > #menutimes'))
        parent.map(menu => {
            menu.setAttribute('style', 'display:none;')
            if (clickedParent.id === menu.id && menu.id === 'menubar'){
                menutimes.map(itm => itm.setAttribute('style', 'display:block'))
                    const headerHeight = document.querySelector('.header').clientHeight
                    document.querySelector('.header-3').setAttribute('style', 'border-bottom:1px solid rgb(219, 209, 209);')
                    document.querySelector('template#menu-bar-hover').classList.remove('slide-out-menu-bar')
                    document.querySelector('template#menu-bar-hover').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:none;`)
            }
            else if (clickedParent.id === menu.id && menu.id==='menutimes'){
                menubar.map(itm => itm.setAttribute('style', 'display:block'))
                document.querySelector('template#menu-bar-hover').classList.add('slide-out-menu-bar')
                document.querySelector('template#header-list-hover.header-list-hover-added-class > .content.content-added-class').setAttribute('style', 'width: 100%')
                if (window.scrollY > 0){
                    document.querySelector('.header-3').setAttribute('style', 'border-bottom:none;')
                }
            }
        })
    }
    const HandleHeaderListHover = (e) => {
        // React.createElement({
        //     type: "input", 
        //     props?: (React.InputHTMLAttributes<HTMLInputElement>), //& React.ClassAttributes<HTMLInputElement>) | null | undefined, 
        //     ...children: React.ReactNode[]}
        //     )
        const {className} = e.target
        const className0 = className.split(' ')[0]
        const className1 = className.split(' ')[1]
        const className2 = className.split(' ')[2]
        const headerHeight = document.querySelector('.header').clientHeight
        if (document.querySelector('template#cart-hover').hasAttribute('style', 'display:flex;')){
            document.querySelector('template#cart-hover').classList.add('slide-out-cart')
        }
        document.querySelector('template#search-hover').setAttribute('style', 'display:none;')
        document.querySelector('template#sign-up').setAttribute('style', 'display:none;')
        document.querySelector('template#single-collection').setAttribute('style', 'display:none;')
        
        // fetchImagesStart({'className1': className1, 'className2': className2})
        // if (className0 === 'option' && className.split(' ')[3] === 'menu-bar-link'){
        //     console.log(className0 === 'option')
        //     console.log(className.split(' ')[3])
        //     document.querySelector('template#header-list-hover').classList.add('header-list-hover-added-class')
        //     document.querySelector('template#header-list-hover.header-list-hover-added-class').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:none;`)
        //     document.querySelector('template#header-list-hover.header-list-hover-added-class > .content').classList.add('content-added-class')
        //     if (window.scrollY === 0){
        //         document.querySelector('template#header-list-hover.header-list-hover-added-class').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:1px solid #ffffff80;`)
        //     } else {
        //         document.querySelector('template#header-list-hover.header-list-hover-added-class').setAttribute('style', 'border-top:none;')
        //     }
        // }
        // else{
        //     document.querySelector('template#header-list-hover').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:none;`)
        //     if (window.scrollY === 0){
        //         document.querySelector('template#header-list-hover').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:1px solid #ffffff80;`)
        //     } else {
        //         document.querySelector('template#header-list-hover').setAttribute('style', 'border-top:none;')
        //     }
        // } 

        // //meant to remove menubar slide
        // window.onclick = (event) => {
        //     if (event.target.className === 'filler'){
        //         if (window.scrollY > 0){
        //             document.querySelector('.header-3').setAttribute('style', 'border-bottom:none;')
        //         }
        //         document.querySelector('template#menu-bar-hover').classList.add('slide-out-menu-bar')
        //     } 
        //     else if (event.target.className !== 'filler' ){
        //         document.querySelector('template#header-list-hover').setAttribute('style', `display:none;top:${headerHeight}px;`)
        //     }
        // }
        // window.onmouseover = (event) => {
        //     if (event.target.className !== 'filler' ){
        //         document.querySelector('template#header-list-hover').setAttribute('style', `display:none;top:${headerHeight}px;`)
        //     }
        // }

        window.onmouseover = (event) => {
            if (event.target.classList.contains('option')) {
                fetchImagesStart({'className1': className1, 'className2': className2})
                if (event.target.classList.contains('menu-bar-link')){
                    document.querySelector('template#header-list-hover').classList.add('header-list-hover-added-class')
                    document.querySelector('template#header-list-hover.header-list-hover-added-class').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:none;`)
                    document.querySelector('template#header-list-hover.header-list-hover-added-class > .content').classList.add('content-added-class')
                    if (window.scrollY === 0){
                        document.querySelector('template#header-list-hover.header-list-hover-added-class').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:1px solid #ffffff80;`)
                    } else {
                        document.querySelector('template#header-list-hover.header-list-hover-added-class').setAttribute('style', 'border-top:none;')
                    }
                    // document.querySelector('template#header-list-hover').setAttribute('style', 'display:flex')
                }
                else {
                    document.querySelector('template#header-list-hover').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:none;`)
                    if (window.scrollY === 0){
                        document.querySelector('template#header-list-hover').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:1px solid #ffffff80;`)
                    } else {
                        document.querySelector('template#header-list-hover').setAttribute('style', 'border-top:none;')
                    }
                    // document.querySelector('template#header-list-hover').setAttribute('style', 'display:flex')
                }
            } 
            else if (event.target.className === 'filler'){
                const parent = Array.from(document.querySelectorAll('#menu-bar-box > #menutimes'))
                parent.map(menu => {
                    menu.setAttribute('style', 'display:none;')
                    if (menu.previousElementSibling){menu.previousElementSibling.style.display='block'}
                    if (menu.nextElementSibling){menu.nextElementSibling.style.display='block'}
                    return
                })
                
                document.querySelector('template#menu-bar-hover').classList.add('slide-out-menu-bar')
                document.querySelector('template#header-list-hover.header-list-hover-added-class > .content.content-added-class').setAttribute('style', 'width: 100%')
                if (window.scrollY > 0){
                    document.querySelector('.header-3').setAttribute('style', 'border-bottom:none;')
                }
            }
            else if (event.target.className !== 'filler'){
                document.querySelector('template#header-list-hover').setAttribute('style', `display:none;top:${headerHeight}px;`)
                document.querySelector('template#header-list-hover.header-list-hover-added-class > .content.content-added-class').setAttribute('style', 'width: 65%')
            }
        }
    }
    const HandleSearchHover = (e) => {
        const headerHeight = document.querySelector('.header').clientHeight
        document.querySelector('template#cart-hover').classList.add('slide-out-cart')
        document.querySelector('template#header-list-hover').setAttribute('style', 'display:none;')
        document.querySelector('template#sign-up').setAttribute('style', 'display:none;')
        document.querySelector('template#single-collection').setAttribute('style', 'display:none;')
        window.onmouseover = (event) => {
        if (event.target.className === "search-filler") {
            document.querySelector('.header-3 > .main-box > .place-2').setAttribute('style', 'display:none')
            document.querySelector('template#search-hover').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:1px solid #ffffff80;`)
        }
        else if (event.target.className !== "search-filler" &&
            event.target !== document.querySelector('.header-2 > .main-box > .place-3 > .box-2') &&
            event.target !== document.querySelector('.header-2 > .main-box > .place-3') &&
            event.target !== document.querySelector('.header-3 > .main-box > .place-3 > .box-2') &&
            event.target !== document.querySelector('.header-3 > .main-box > .place-3') &&
            event.target !== document.querySelector('.header-3') &&
            event.target !== document.querySelector('.header-3 > .main-box') &&
            event.target !== document.querySelector('template#search-hover') &&
            event.target.closest('template#search-hover') === null){
            document.querySelector('template#search-hover').setAttribute('style', 'display:none')
            document.querySelector('.header-3 > .main-box > .place-2').setAttribute('style', 'display:flex')
        }
        // document.querySelector('.header-3 > .main-box > .place-2').setAttribute('style', 'display:none')
        // document.querySelector('template#search-hover').setAttribute('style', 'display:flex')
        // document.querySelector('template#search-hover').classList.add('make-dom-this-search-btn-been-clicked')
        }   
    }
    const HandleCartHover = () => {
        const headerHeight = document.querySelector('.header').clientHeight
        document.querySelector('template#search-hover').setAttribute('style', 'display:none;')
        document.querySelector('template#header-list-hover').setAttribute('style', 'display:none;')
        document.querySelector('template#sign-up').setAttribute('style', 'display:none;')
        document.querySelector('template#single-collection').setAttribute('style', 'display:none;')
        window.onmouseover = (event) => {
        if (event.target.className === "cart-filler") {
            document.querySelector('.header-3').setAttribute('style', 'border-bottom:1px solid rgb(219, 209, 209);')
            document.querySelector('template#cart-hover').setAttribute('style', `display:flex;top:${headerHeight}px`)
            document.querySelector('template#cart-hover').classList.remove('slide-out-cart')
        }
        else if ((event.target.className !== "cart-filler" &&
            event.target !== document.querySelector('.header-2 > .main-box > .place-3 > .box-2') &&
            event.target !== document.querySelector('.header-2 > .main-box > .place-3') &&
            event.target !== document.querySelector('.header-3 > .main-box > .place-3 > .box-2') &&
            event.target !== document.querySelector('.header-3 > .main-box > .place-3') &&
            event.target !== document.querySelector('.header-3') &&
            event.target !== document.querySelector('.header-3 > .main-box') &&
            event.target !== document.querySelector('template#cart-hover') &&
            event.target.closest('template#cart-hover') === null) || 
            (event.target === document.querySelector('template#cart-hover'))){
                document.querySelector('.header-3').setAttribute('style', 'border-bottom:none')
                document.querySelector('template#cart-hover').classList.add('slide-out-cart')
                // document.querySelector('template#cart-hover.slide-out-cart').setAttribute('style', 'left:1500px;')
                // document.querySelector('template#cart-hover').setAttribute('style', 'display:none')
                // document.querySelector('template#cart-hover > .content').setAttribute('style', 'animation: slideRightCart 2s ease-in-out 1')
        }
        // document.querySelector('.header-3 > .main-box > .place-2').setAttribute('style', 'display:none')
        // document.querySelector('template#search-hover').setAttribute('style', 'display:flex')
        // document.querySelector('template#search-hover').classList.add('make-dom-this-search-btn-been-clicked')
        } 
    }
    return (
        <div id="big-head" className="header">
            <Header1 />
            <Header2 
                handleMenuBarClick={HandleMenuBarClick}
                handleClick={HandleClick}
                handleSearchHover={HandleSearchHover} 
                handleCartHover={HandleCartHover}/>
            <Header3 
                handleMenuBarClick={HandleMenuBarClick}
                handleSearchHover={HandleSearchHover} 
                handleCartHover={HandleCartHover}
                handleHeaderListHover={HandleHeaderListHover}/>
            <HeaderListHover cancelSlideModal={cancelSlideModal}/>
            <SearchHover />
            <CartHover />
            <MenuBarHover 
            handleClick={HandleClick}
            handleHeaderListHover={HandleHeaderListHover} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentImgUrl: selectCurrentImageForUse
})
const mapDispatchToProps = (dispatch) => ({
   fetchImagesStart: (url) => dispatch(fetchImagesStart(url)),
   switchGenderStart: (content) => dispatch(switchGenderStart(content))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default connect(mapStateToProps)(Header);


