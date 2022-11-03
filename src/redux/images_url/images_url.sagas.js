import { take, takeEvery, takeLatest, all, call, put } from "redux-saga/effects"
import { ImagesActionTypes } from "./images_url.types"
import {  
    fetchImagesSuccess,
    fetchImagesFailure,
    fetchClickedSlideImagesSuccess,
    fetchClickedSlideImagesFailure,
    switchGenderSuccess,
    switchGenderFailure,
    changeTemplateTopPosition,
} from "./images_url.action"



export function* changeTemplateTopPositionStart({payload}) {
    yield put(changeTemplateTopPosition(payload))
}
export function* fetchClickedSlideImagesStart({payload}) {
    console.log(payload)
    try{
        yield put(fetchClickedSlideImagesSuccess(payload))
    } catch (error){
        yield put(fetchClickedSlideImagesFailure(error.message))
    }
}
export function* fetchImagesStart({payload}) {
    try{
        yield put(fetchImagesSuccess(payload))
    } catch (error){
        yield put(fetchImagesFailure(error.message))
    }
}
export function* switchGenderStart({payload}) {
    try{
        yield put(switchGenderSuccess(payload))
    } catch (error){
        yield put(switchGenderFailure(error.message))
    }
}
export function* onFetchClickedSlideImagesStart() {
    yield takeLatest(ImagesActionTypes.FETCH_CLICKED_SLIDE_IMAGES_START, 
        fetchClickedSlideImagesStart)
}
export function* onFetchImagesStart() {
    yield takeLatest(ImagesActionTypes.FETCH_IMAGES_START, 
        fetchImagesStart)
}
export function* onSwitchGenderStart() {
    yield takeLatest(ImagesActionTypes.SWITCH_GENDER_START, 
        switchGenderStart)
}
export function* onChangeTemplateTopPosition() {
    yield takeLatest(ImagesActionTypes.CHANGE_TEMPLATE_TOP_POSITION, 
        changeTemplateTopPositionStart)
}
export function* imageSagas(){
    yield all([ 
        call(onFetchClickedSlideImagesStart),
        call(onFetchImagesStart),
        call(onSwitchGenderStart),
        call(onChangeTemplateTopPosition),
    ])
}


