import axios from 'axios'
import path from 'path';
import config from '../../config/config.js'
import db from '../../db.js';
import { Recipe, handlerSuccess, handlerError, handlerRecipes, validateRecipe, valRecipe } from '../../services/index.js';


const getRecipeById = async (req, res) => {
    const { idRecipe } = req.params

    try {
        validateRecipe.id(idRecipe)
        let recipe

        // if (valRecipe.id.uuid.test(idRecipe)) {
        //     recipe = await db.Recipe.findByPk(idRecipe,
        //         {
        //             include: {
        //                 model: db.Diet,
        //                 as: 'diets',
        //                 through: { attributes: [] }, // Evita traer atributos de la tabla intermedia
        //             }
        //         }
        //     );

        // }

        // if (valRecipe.id.number.test(idRecipe)) {
        // recipe = await axios
        //     .get(path.join(config.URL_SPOONACULAR, idRecipe, 'information' + config.API_KEY))
        //     .then(({ data }) => {
        //         return Recipe.getRecipe(data)
        //     })

        recipe = await handlerRecipes()
            .then(data => { return data.find(item => item.id == idRecipe) })
            .then(recipe => {
                return Recipe.getRecipe(recipe)
            })
        console.log(recipe)
        // }

        handlerSuccess('find', 'Recipe', res, recipe)
    } catch (error) {
        handlerError('find', 'Recipe', res)
    }
}

export default getRecipeById