import { GET_RECIPE_BY_ID } from "./actionTypes"
import { reqRecipeById } from "../../../services"

const getRecipeById = (id) => {
  return async (dispatch) => {
    await reqRecipeById(id).then(({ data, message }) => {
      dispatch({
        type: GET_RECIPE_BY_ID,
        payload: data
      })
    }).catch((err) => { return err })
  }
}

export default getRecipeById