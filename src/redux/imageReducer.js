import axios from "axios"
import reactDom from "react-dom"

const SetImages = "SET_IMAGES"

const API = {
    key: "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043",
    root: "https://api.unsplash.com",
    URL() { return `${this.root}/photos/random?client_id=${this.key}&count=10` }
}

let initialState =
    {
        urls: {
            small: 'small',
            full: 'full'
        },
        id: '000',
        user: {
            name: 'name'
        }
    }

const ImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetImages:
            state = action.images
            return state
        default:
            return state
    }
}

export const ImagesActionCreator = (images) => {
    return {
        type: SetImages,
        images: images,
    }
}

export const fetchImages = () => {
    return (dispatch) => {
        try {
            axios.get(API.URL())
                .then(res => res.data)
                .then(result => {
                    dispatch({
                        type: SetImages,
                        images: result,
                    })
                })
        } catch (error) {
            console.log(error)
        }
    }
}

export default ImageReducer