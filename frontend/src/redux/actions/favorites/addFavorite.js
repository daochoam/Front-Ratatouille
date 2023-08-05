import { ADD_FAVORITE } from "./actionTypes"

const addFavorite = (recipe) => {
    return {
        type: ADD_FAVORITE,
        payload: recipe
    }
}

export default addFavorite