import axios from 'axios';
import { URL_RATATOUILLE } from '../../../const';
import { GET_DIET_BY_ID } from "./actionTypes"

const getDietById = (idDiet) => {
  return async (dispatch) => {
    await axios(`${URL_RATATOUILLE}/diets/${idDiet}`).then(({ data, message }) => {
      dispatch({
        type: GET_DIET_BY_ID,
        payload: data
      })
    }).catch((err) => { return err })
  }
}

export default getDietById