import { URL_RATATOUILLE } from "../../const"
import axios from "axios"

/**
 * 
 * @param {*} id request id of the character
 * @returns Character: {id, name, image, status, species, gender}
 */
const reqRecipeById = async (id) => {
    console.log(id)
    return await axios(`${URL_RATATOUILLE}/recipes/${id}`)
        .then(({ data }) => { return data })
        .then(({ data, message }) => {
            console.log(data)
            return { message: message, data: data }
        }).catch((error) => {
            return { message: error.message }
        })
}

export default reqRecipeById
