import { REMOVE_RECIPE } from "./actionTypes"

const removeRecipe = (payload) => {
    return {
        type: REMOVE_RECIPE,
        payload: payload
    }
}

export default removeRecipe