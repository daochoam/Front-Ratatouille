import { URL_RATATOUILLE } from "../../const"
import axios from "axios"

/**
 * 
 * @returns Character: {id, name, image, status, species, gender}
 */
const getAllRecipes = async () => {
    return await axios(`${URL_RATATOUILLE}/recipes`)
        .then(({ data }) => {
            return data
        })
        .then(({ data, message }) => {
            return data
        }).catch((error) => {
            return { message: error.message }
        })
}

export default getAllRecipes