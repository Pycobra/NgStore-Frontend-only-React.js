import React from 'react';
import { useState } from 'react';
import "./landingpage.styles.css"
import { createStructuredSelector } from 'reselect';
import { fetchClickedSlideImagesStart } from '../../redux/images_url/images_url.action';
import { selectSlideImages } from "../../redux/images_url/images_url.selectors";
import { connect } from "react-redux";
import CustomButton from '../../components/custom-button/custom-button.component';




 const Homepage = ({slideImages, clickedSlideImagesStart}) => {
    // const [slideImages, setSlideImages] = useState({currentImg:{image1:, image2:,image3:, image4:,image5:}})
    const handleSlideClick = (e, url, allImages) => {
        clickedSlideImagesStart([url, allImages])
        const headerHeight = document.querySelector('.header').clientHeight
        document.querySelector('template#single-collection').setAttribute('style', `display:flex;top:${headerHeight}px;border-top:none;`)
    } 
    return (
        <div className='homepage'>
            <div className='block1'>
                {/* <a className="side" onclick="plusSlides(-1)">&#10094;</a> */}
                <div className="slideshow-container">

                    {/* <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src={require("../../Media/fashion/christian-bolt-VW5VjskNXZ8-unsplash.jpg")} />
                        <div className="text">Caption One</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img src={require("../../Media/fashion/whereslugo-ad047kyPBh8-unsplash.jpg")} />
                        <div className="text">Caption Two</div>
                    </div> */}
                    {slideImages.length != 0
                    ? slideImages.map(({url, currentSlide, ...allImages}, idx) => {
                        return idx === 1
                        ? (<div key={idx} className="mySlides fade" onClick={(e) => handleSlideClick(e, url, {...allImages})}>
                            <div className="numbertext">3 / 3</div>
                            <img src={require(`../../Media/fashion/${url}-unsplash.jpg`)} />
                            <div className="text">Caption Three</div>
                        </div>)
                        : null
                    })
                    : null}  
                    <div className='text-block'>
                        <span className=''>50% discount</span>
                        <CustomButton buttonType="shopNow">SHOP NOW</CustomButton>
                    </div>

                    <a className="prev">&#10094;</a>
                    <a className="next">&#10095;</a>

                    <div className='dot-wrap' style={{textAlign:"center"}}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                {/* <div className='home-image'>
                    <div className='text-block'>
                        <span className=''>50% discount</span>
                        <span className=''>DEAL OFF</span>
                    </div>
                </div> */}
                {/* <a class="side" onclick="plusSlides(1)">&#10095;</a> */}
            </div>
            <div className='home-body'>
                <div className="box-1">
                    <span className='head'>New Arrival</span>
                    <div className='block'>
                        <div className='img-1'>
                            <img src={require(`../../Media/fashion/mediamodifier-7cERndkOyDw-unsplash.jpg`)} />
                            <span>ST JOHN BIEGE GARBADENE COTTON SHORT TRENCH COAT</span>
                        </div>
                        <div className='img-2'>
                            <img src={require(`../../Media/fashion/tobias-tullius-Fg15LdqpWrs-unsplash.jpg`)} />
                            <span>NORFOLK KHAKI BROWN WAXED COTTON COAT</span>
                        </div>
                    </div>
                    <div className='block'>
                        <div className='img-1'>
                            <img src={require(`../../Media/fashion/engin-akyurt-RSm7GBuMqos-unsplash.jpg`)} />
                            <span>MAC BERNARD TOURQUOISE GREYISH LANKER FIRE PANT</span>
                        </div>
                        <div className='img-2'>
                            <img src={require(`../../Media/fashion/engin-akyurt-5raPrOhbKQo-unsplash.jpg`)} />
                            <span>ICELANDIC SWIMMERS RAY CONCOON FLYING TRACK JUMPER</span>
                        </div>
                    </div>
                </div>
                <div className="box-1 two">
                    <span className='head'>Best Selling</span>
                    <div className='block'>
                        <div className='img-1'>
                            <img src={require(`../../Media/fashion/laura-chouette-SQrZ_lGJXCo-unsplash.jpg`)} />
                            <span>ST JOHN BIEGE GARBADENE COTTON SHORT TRENCH COAT</span>
                        </div>
                        <div className='img-2'>
                            <img src={require(`../../Media/fashion/engin-akyurt-ehdI_89nzMo-unsplash.jpg`)} />
                            <span>NORFOLK KHAKI BROWN WAXED COTTON COAT</span>
                        </div>
                    </div>
                    <div className='block'>
                        <div className='img-1'>
                            <img src={require(`../../Media/fashion/engin-akyurt-5raPrOhbKQo-unsplash.jpg`)} />
                            <span>MAC BERNARD TOURQUOISE GREYISH LANKER FIRE PANT</span>
                        </div>
                        <div className='img-2'>
                            <img src={require(`../../Media/fashion/christian-bolt-VW5VjskNXZ8-unsplash.jpg`)} />
                            <span>ICELANDIC SWIMMERS RAY CONCOON FLYING TRACK JUMPER</span>
                        </div>
                    </div>
                </div>
                <div className="box-3">
                    <div className='block'>
                        <img src={require(`../../Media/fashion/office.jpg`)} />
                        <div className='aside'>
                            <span>LAGOS STORE</span>
                            <span>29, Maro b/stop Mile 12, Lagos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 };

const mapStateToProps = createStructuredSelector({
    slideImages: selectSlideImages
})
 const mapDispatchToProps = (dispatch) => ({
    clickedSlideImagesStart: (url) => dispatch(fetchClickedSlideImagesStart(url))
 })
 //export default Header3;
 export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
