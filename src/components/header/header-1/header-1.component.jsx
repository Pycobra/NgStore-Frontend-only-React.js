import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector} from "reselect"; 
import { Link, renderMatches } from "react-router-dom";
import "./header-1.styles.css";
// import { selectShopCategoryAfterTransformToArray } from "../../../redux/shop/shop.selectors";
// import { selectShopCategoryData} from "../../../redux/shop/shop.selectors";


const Header1 = ({category_data_array}) => { 
        return (
            <div className="header-1">
                <div className="main-box">
                    <div className="place-1">
                        <Link className="sellpage" to="/sell-page">Sell On NGStoreBoy</Link>
                    </div>
                    <div className="place-2">
                        <span className="box-1">NG - $ USD</span>
                    </div>
                </div>
            </div>
        )
}
// const mapStateToProps = createStructuredSelector({
//     category_data_array: selectShopCategoryAfterTransformToArray,
// })

export default Header1;
// export default connect(mapStateToProps)(Header1);
