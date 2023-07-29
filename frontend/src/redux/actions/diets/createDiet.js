import { CREATE_DIET } from "./actionTypes"

const createDiet = (diet) => {
    return {
        type: CREATE_DIET,
        payload: diet
    }
}

export default createDiet