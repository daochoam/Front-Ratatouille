import { URL_RATATOUILLE } from "../../const"
import axios from "axios"

/**
 * @returns Character: {id, name, image, status, species, gender}
 */
const reqDiets = async () => {
    return await axios(`${URL_RATATOUILLE}/diets`)
        .then(({ data }) => { return data })
        .then(({ data, message }) => {
            return { message: message, data: data }
        }).catch((error) => {
            return { message: error.message }
        })
}

export default reqDiets