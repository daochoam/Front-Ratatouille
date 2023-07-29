import { REMOVE_FAVORITE } from "./actionTypes"

const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}

export default removeFavorite