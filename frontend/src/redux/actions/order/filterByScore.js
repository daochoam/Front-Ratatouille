import { FILTER_BY_SCORE } from "./actionTypes"

const filterByScore = (payload) => {
    return {
        type: FILTER_BY_SCORE,
        payload: payload
    }
}

export default filterByScore