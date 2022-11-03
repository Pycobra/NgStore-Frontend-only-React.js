import {combineReducers} from "redux"
import imageUrlReducer from "./images_url/images_url.reducer"


const rootReducer = combineReducers({
    images: imageUrlReducer,
})

export default rootReducer;



