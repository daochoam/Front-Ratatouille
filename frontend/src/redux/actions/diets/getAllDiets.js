import { GET_ALL_DIETS } from "./actionTypes"
import { getDiets } from '../../../services';


const getAllDiets = () => {
  return async (dispatch) => {
    await getDiets().then(({ data, message }) => {
      dispatch({
        type: GET_ALL_DIETS,
        payload: data
      })
    }).catch((err) => { return err })
  }
}

export default getAllDiets