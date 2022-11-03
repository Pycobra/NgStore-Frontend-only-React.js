import { createSelector } from "reselect";

const selectImage = state => state.images


export const selectAllImages = createSelector(
    [selectImage],
    (images) => images.images_url
)
export const selectCurrentImage = createSelector(
    [selectImage],
    (images) => images.currentImgurl
)
export const selectCurrentImageForUse = createSelector(
    [selectAllImages, selectCurrentImage],
    (allImg, currentImg) => {
        const useImage = []
        Object.values(currentImg).map(url => useImage.push(allImg[url]))
        console.log(useImage)
        return useImage
    }
)
export const selectAllImagesArray = createSelector(
    [selectImage],
    (all_urls) => Object.keys(all_urls).map(cat_key => all_urls[cat_key])
)
export const selectSlideImages = createSelector(
    [selectImage],
    (images) => images.slideImages
)
export const selectClickedSlideImages = createSelector(
    [selectImage],
    (images) => images.clickedSlideImages
)
export const selectSlideShowImages = createSelector(
    [selectImage],
    (images) => images.slideImages
)


