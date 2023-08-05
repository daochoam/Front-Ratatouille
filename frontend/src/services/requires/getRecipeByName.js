import { URL_RATATOUILLE } from "../../const"
import axios from "axios"

/**
 * @param {*} Name request name of the character
 * @returns Character: {id, name, image, status, species, gender}
 */
const reqRecipeByName = async (name) => {
    return await axios(`${URL_RATATOUILLE}/recipes?name=${name}`)
        .then(({ data }) => { return data })
        .then(({ data, message }) => {
            return { message: message, data: data }
        }).catch((error) => {
            return { message: error.message }
        })
}

export default reqRecipeByName
