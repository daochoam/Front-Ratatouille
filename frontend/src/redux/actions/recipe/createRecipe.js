import { CREATE_RECIPE } from "./actionTypes"

const createRecipe = (recipe) => {
    return {
        type: CREATE_RECIPE,
        payload: recipe
    }
}

export default createRecipe