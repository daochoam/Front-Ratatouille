import { handlerError, handlerSuccess } from '../../services/index.js'
import db from '../../db.js';

const updateRecipeById = async (req, res) => {
    const { idRecipe } = req.params
    const { name, image, summaryOfDish, healthScore, stepByStep, diets } = req.body

    try {
        const recipe = await db.Recipe.findByPk(idRecipe)
        if (recipe) {
            if (diets.length > 0) {
                diets.forEach(async (idDiet) => {
                    const diet = await db.Diet.findByPk(idDiet);
                    if (diet) { await recipe.addDiet(diet) }
                    else return handlerError('found', 'Diet', res)
                });
            }
        }
        return handlerSuccess('create', 'Recipe', res, recipe)
    }
    catch (error) {
        return handlerError(error, null, res)
    }
}

export default updateRecipeById