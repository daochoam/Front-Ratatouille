import { handlerError, handlerSuccess } from '../../services/index.js'
import db from '../../db.js';


const removeRecipeById = async (req, res) => {
    const { idRecipe } = req.params

    try {
        const recipe = await db.Recipe.findByPk(idRecipe)
        if (recipe) {
            await recipe.destroy();
            handlerSuccess('remove', 'Recipe', res)
        }
        else {
            handlerError('remove', 'Recipe', res)
        }
    }
    catch (error) {
        return handlerError(error, null, res)
    }
}

export default removeRecipeById