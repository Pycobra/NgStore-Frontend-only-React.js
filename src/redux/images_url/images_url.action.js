import { ImagesActionTypes } from "./images_url.types"

export const fetchImagesStart = (className) => ({
    type: ImagesActionTypes.FETCH_IMAGES_START,
    payload: className
})
export const fetchImagesSuccess = (className) => ({
    type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
    payload: className
})
export const fetchImagesFailure = (error) => ({
    type: ImagesActionTypes.FETCH_IMAGES_FAILURE,
    payload: error
})

export const fetchClickedSlideImagesStart = (className) => ({
    type: ImagesActionTypes.FETCH_CLICKED_SLIDE_IMAGES_START,
    payload: className
})
export const fetchClickedSlideImagesSuccess = (className) => ({
    type: ImagesActionTypes.FETCH_CLICKED_SLIDE_IMAGES_SUCCESS,
    payload: className
})
export const fetchClickedSlideImagesFailure = (error) => ({
    type: ImagesActionTypes.FETCH_CLICKED_SLIDE_IMAGES_FAILURE,
    payload: error
})
export const fetchSlideImagesStart = (className) => ({
    type: ImagesActionTypes.FETCH_SLIDE_IMAGES_START,
    payload: className
})
export const fetchSlideImagesSuccess = (className) => ({
    type: ImagesActionTypes.FETCH_SLIDE_IMAGES_SUCCESS,
    payload: className
})
export const fetchSlideImagesFailure = (error) => ({
    type: ImagesActionTypes.FETCH_SLIDE_IMAGES_FAILURE,
    payload: error
})
export const switchGenderStart = (className) => ({
    type: ImagesActionTypes.SWITCH_GENDER_START,
    payload: className
})
export const switchGenderSuccess = (className) => ({
    type: ImagesActionTypes.SWITCH_GENDER_SUCCESS,
    payload: className
})
export const switchGenderFailure = (className) => ({
    type: ImagesActionTypes.SWITCH_GENDER_FAILURE,
    payload: className
})
export const changeTemplateTopPosition = (pixel) => ({
    type: ImagesActionTypes.CHANGE_TEMPLATE_TOP_POSITION,
    payload: pixel
})