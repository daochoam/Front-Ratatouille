import { ADD_FAVORITE } from "./actionTypes"

const addFavorite = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}

export default addFavorite