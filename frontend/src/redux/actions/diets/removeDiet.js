import { REMOVE_DIET } from "./actionTypes"

const removeDiet = (payload) => {
    return {
        type: REMOVE_DIET,
        payload: payload
    }
}

export default removeDiet