import { URL_RATATOUILLE } from "../../const"
import axios from "axios"

/**
 * 
 * @param {*} id request id of the character
 * @returns Character: {id, name, image, status, species, gender}
 */
const reqRecipeById = async (id) => {
    return await axios(`${URL_RATATOUILLE}/${id}`)
        .then(({ data }) => {
            return { data: data }
        }).catch((error) => {
            return { message: error.message }
        })
}

export default reqRecipeById
