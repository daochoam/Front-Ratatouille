import { URL_RATATOUILLE } from "../../const"
import axios from "axios"

/**
 * @returns Character: {id, name, image, status, species, gender}
 */
const createRecipe = async (payload) => {
    return await axios.post(`${URL_RATATOUILLE}/diets`, payload)
        .then(({ data }) => { return data })
        .then(({ data, message }) => {
            return { message: message, data: data }
        }).catch((error) => {
            return { message: error.message }
        })
}

export default createRecipe