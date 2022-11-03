import WOMEN_HOVER_IMAGES_URL from "./urls/women-hover-image-url.js";
import MEN_HOVER_IMAGES_URL from "./urls/men-hover-image-url.js";
import {MEN_SLIDESHOW_IMAGES} from "./urls/men-slideshow-image.js";
import {WOMEN_SLIDESHOW_IMAGES} from "./urls/women-slideshow-image.js";
import { ImagesActionTypes } from './images_url.types';
import { genderShuffle, genderSlideShuffle } from './images_url.utils';


const INITIAL_STATE = {
    images_url: MEN_HOVER_IMAGES_URL,
    currentImgurl: "",
    isFetching: false,
    slideImages:MEN_SLIDESHOW_IMAGES,
    clickedSlideImages: undefined,
    templateTop: undefined,
}

const imageUrlReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ImagesActionTypes.FETCH_IMAGES_START:
            return{
                ...state,
                isFetching: true,
            }
        case ImagesActionTypes.FETCH_IMAGES_SUCCESS:
            return{
                ...state,
                isFetching: false,
                currentImgurl: action.payload,
            }
        case ImagesActionTypes.FETCH_IMAGES_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        case ImagesActionTypes.FETCH_CLICKED_SLIDE_IMAGES_START:
            return{
                ...state,
                isFetching: true,
            }
        case ImagesActionTypes.FETCH_CLICKED_SLIDE_IMAGES_SUCCESS:
            return{
                ...state,
                isFetching: false,
                clickedSlideImages: action.payload,
            }
        case ImagesActionTypes.FETCH_CLICKED_SLIDE_IMAGES_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        case ImagesActionTypes.SWITCH_GENDER_START:
            return{
                ...state,
                isFetching: true,
            }
        case ImagesActionTypes.SWITCH_GENDER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                images_url: genderShuffle(action.payload, WOMEN_HOVER_IMAGES_URL, MEN_HOVER_IMAGES_URL),
                slideImages: genderSlideShuffle(action.payload, WOMEN_SLIDESHOW_IMAGES, MEN_SLIDESHOW_IMAGES),
            }
        case ImagesActionTypes.SWITCH_GENDER_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        case ImagesActionTypes.CHANGE_TEMPLATE_TOP_POSITION:
            return{
                ...state,
                templateTop: action.payload, 
            }
        default:
            return state
    }
}
 
export default imageUrlReducer;





