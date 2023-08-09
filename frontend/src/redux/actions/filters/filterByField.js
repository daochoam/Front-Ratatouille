import { FILTER_BY_FIELD } from "./actionTypes"

const filterByField = (payload) => {
    return {
        type: FILTER_BY_FIELD,
        payload: payload
    }
}

export default filterByField