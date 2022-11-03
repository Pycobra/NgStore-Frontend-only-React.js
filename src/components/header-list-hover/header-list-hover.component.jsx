import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./header-list-hover.styles.css";
import { selectCurrentImageForUse } from "../../redux/images_url/images_url.selectors";
import { createStructuredSelector } from 'reselect';



const HeaderListHover = ({currentImgUrl, cancelSlideModal}) => (
        <template id="header-list-hover">
                <div className="content">
                    <div className="block1">
                        <div>aaaaaaaaaaaaaaaaaaa</div>
                        <div>bbbbbbbbbbbbbbbbbbbbbbbbbb</div>
                        <div>cccccccccccccc</div>
                        <div>dddd dddddddddddddddddd sddddddddd</div>
                        <div>eeeeeeeeeeeeeeee eeeeeeeeeeeeeee</div>
                    </div>
                    <div className="block2">
                        {/* <div className="img-block"></div> */}
                        {currentImgUrl.length > 0 
                        ? (<div className="img-block">
                            <img src={require(`../../Media/fashion/${currentImgUrl[1]}-unsplash.jpg`)} />
                            <img src={require(`../../Media/fashion/${currentImgUrl[0]}-unsplash.jpg`)} />
                        </div>)
                        : null}
                    </div>
                    <div className="filler">
                        <span className='cancel' onClick={(e) => cancelSlideModal(e)}>X</span>
                    </div>
                </div>
            </template>
    )

const mapStateToProps = createStructuredSelector({
    currentImgUrl: selectCurrentImageForUse
})
export default connect(mapStateToProps)(HeaderListHover);
