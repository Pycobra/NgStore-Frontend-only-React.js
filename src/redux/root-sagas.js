import { call, all } from "redux-saga/effects"
import { imageSagas } from "./images_url/images_url.sagas"


export default function* rootSaga(){
    yield all([
        call(imageSagas), 
    ])
}
