import { GET_RECIPES_BY_NAME } from "./actionTypes"
import { getRecipeByName } from "../../../services"

const getRecipesByName = (name) => {
    return async (dispatch) => {
        await getRecipeByName(name).then(({ data, message }) => {
            dispatch({
                type: GET_RECIPES_BY_NAME,
                payload: data
            })
        }).catch((err) => { return err })
    }
}

export default getRecipesByName