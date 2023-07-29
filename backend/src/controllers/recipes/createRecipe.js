
import { handlerError, handlerSuccess } from '../../services/index.js'
import db from '../../db.js';

const createRecipe = async (req, res) => {
    const { name, image, summaryOfDish, healthScore, stepByStep, diets } = req.body

    try {
        const recipe = await db.Recipe.create({ name, image, summaryOfDish, healthScore, stepByStep })
        if (recipe) {
            if (diets.length > 0) {
                diets.forEach(async (idDiet) => {
                    const diet = await db.Diet.findByPk(idDiet);
                    if (diet) { await recipe.addDiet(diet) }
                    else return handlerError('find', 'Diet', res)
                });
            }
        }
        handlerSuccess('create', 'Recipe', res, recipe)
    }
    catch (error) {
        return handlerError(error, null, res)
    }
}

export default createRecipe