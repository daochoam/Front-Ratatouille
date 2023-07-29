import axios from 'axios'
import { URL_RATATOUILLE } from '../../../const'
import { GET_ALL_DIETS } from "./actionTypes"

const getAllDiets = () => {
  return async (dispatch) => {
    await axios(`${URL_RATATOUILLE}/diets`).then(({ data, message }) => {
      dispatch({
        type: GET_ALL_DIETS,
        payload: data
      })
    }).catch((err) => { return err })
  }
}

export default getAllDiets