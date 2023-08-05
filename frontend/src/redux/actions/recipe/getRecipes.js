import { GET_RECIPES } from "./actionTypes"
import { getAllRecipes } from "../../../services"

const getRecipes = () => {
    return async (dispatch) => {
        await getAllRecipes().then((data) => {
            dispatch({
                type: GET_RECIPES,
                payload: data
            })
        }).catch((err) => { return err })
    }
}


export default getRecipes