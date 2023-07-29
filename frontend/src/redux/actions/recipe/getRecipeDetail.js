import { URL_RATATOUILLE } from "../../../const"
import { GET_RECIPE_DETAIL } from "./actionTypes"
import { reqRecipeById } from "../../../services"
import axios from 'axios'

const getRecipeDetail = (id) => {
    return async (dispatch) => {
        await axios.get(`${URL_RATATOUILLE}/detail/${id}`)
            .then(({ data }) => {
                dispatch({
                    type: GET_RECIPE_DETAIL,
                    payload: reqRecipeById(data)
                })
            });
    }
}

export default getRecipeDetail