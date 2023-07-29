import axios from 'axios'
import path from 'path';
import { handlerError, handlerRecipe } from '../../services/index.js'
import config from '../../config/config.js'
import db from '../../db.js';

const getAllRecipes = async (req, res) => {
    // try {
    //     const myRecipes = await db.Recipes.findAll()
    //     const apiRecipe = await axios
    //         .get(path.join(config.URL_SPOONACULAR, `complexSearch${config.API_KEY}&addRecipeInformation=true`))


    // }
    // catch (error) {

    // }
    return await axios
        .get(path.join(config.URL_SPOONACULAR, `complexSearch${config.API_KEY}&addRecipeInformation=true`))
        .then(({ data }) => { return data })
}

export default getAllRecipes