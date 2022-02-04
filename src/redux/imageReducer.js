import axios from "axios"

const SetImages = "SET_IMAGES"

const API = {
    key: "4PaSIIS3JUE-xy06EU5ohRJAoJn1FWW0W6ixIvst5Zs",
    root: "https://api.unsplash.com",
    URL() { return `${this.root}/photos/random?client_id=${this.key}&count=5` }
}

let initialState =
    [{
        urls: {
            small: "https://images.unsplash.com/photo-1628808592704-22b6bd0ce13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTc3NDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDM5OTQyMzk&ixlib=rb-1.2.1&q=80&w=400",
            full: "https://images.unsplash.com/photo-1628808592704-22b6bd0ce13b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyOTc3NDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDM5OTQyMzk&ixlib=rb-1.2.1&q=85"
        },
        id: "3q29ALgnoR8",
        user: {
            name: "Nathan Dumlao"
        }
    },]

const ImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetImages:
            state = [...action.images]
            return state
        default:
            return state
    }
}

export const ImagesActionCreator = (images) => {
    return {
        type: SetImages,
        images: [...images],
    }
}

export const fetchImages = (state) => {
    return (dispatch) => {
        axios.get(API.URL())
            .then(res => {
                dispatch({
                    type: SetImages,
                    images: [...state, ...res.data],
                })
            })
    }
}

export default ImageReducer