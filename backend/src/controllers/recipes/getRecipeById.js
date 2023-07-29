import axios from 'axios'
import path from 'path';
import config from '../../config/config.js'
import { Recipe, handlerRecipe, handlerSuccess, handlerError } from '../../services/index.js';


const getRecipeById = async (req, res) => {
    const { idRecipe } = req.params

    if (isNaN(idRecipe)) return handlerError('The entered value is not a valid id', null, res)

    try {
        let recipe = await db.Recipe.findByPk(idRecipe);
        if (recipe === null) {
            recipe = await axios
                .get(path.join(config.URL_SPOONACULAR, idRecipe, 'information' + config.API_KEY))
                .then(({ data }) => {
                    return Recipe.getRecipe(data)
                })
        }
        handlerSuccess('find', 'Recipe', res, recipe)

    } catch (error) {
        handlerError('find', 'Recipe', res)
    }
}

export default getRecipeById