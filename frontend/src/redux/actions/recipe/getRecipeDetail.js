import { GET_RECIPE_DETAIL } from "./actionTypes"
import { getRecipeById } from "../../../services"

const getRecipeDetail = (id) => {
    return async (dispatch) => {
        await getRecipeById(id).then(({ data, message }) => {
            dispatch({
                type: GET_RECIPE_DETAIL,
                payload: data
            })
        }).catch((err) => { return err })
    }
}

export default getRecipeDetail