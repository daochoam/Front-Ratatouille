import { FILTER_BY_DIETS } from "./actionTypes"

const filterByDiets = (payload) => {
    console.log(payload)
    return {
        type: FILTER_BY_DIETS,
        payload: payload
    }
}

export default filterByDiets