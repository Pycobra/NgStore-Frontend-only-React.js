import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./single-collection.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import { selectClickedSlideImages } from '../../redux/images_url/images_url.selectors.js';
import { createStructuredSelector } from 'reselect';



const SingleCollection = ({clickedSlideImages, cancelSlideModal}) => (
        <template id="single-collection">
            {clickedSlideImages
            ? <div className="content">
                    <div className="inner-block1">
                        <img alt='' className='img-top' src={require(`../../Media/fashion/${clickedSlideImages[0]}-unsplash.jpg`)} />
                        <img alt='' className='img-bottom' src={require(`../../Media/fashion/${clickedSlideImages[0]}-unsplash.jpg`)} />
                    </div>

                    {Object.keys(clickedSlideImages[1]).map((key, idx) => 
                    (<div key={idx} className="inner-block2">
                        <div className='image'>
                            <img alt='' src={require(`../../Media/fashion/${clickedSlideImages[1][`${key}`]}-unsplash.jpg`)} />
                        </div>
                        <div className='img-text'>
                            <span>NICE LOOKING BEAUTIFUL SHIRT</span>
                        </div>
                        <CustomButton buttonType="shopNow">SHOP NOW</CustomButton>
                    </div>)
                    )}
                    <span className='item-next'>&#10095;</span>
                    <span className='cancel' onClick={(e) => cancelSlideModal(e)}>X</span>
                </div>
            : null}
        </template>
    )


const mapStateToProps = createStructuredSelector({
    clickedSlideImages: selectClickedSlideImages,
  })
   export default connect(mapStateToProps)(SingleCollection);