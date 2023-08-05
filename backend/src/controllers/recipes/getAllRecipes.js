import db from '../../db.js';
import { handlerError, handlerSuccess, handlerObjToArray, handlerRecipes, Recipe } from '../../services/index.js';


const getAllRecipes = async (req, res) => {

    try {
        const recipeDataBase = await db.Recipe.findAll({
            include: {
                model: db.Diet,
                as: 'diets',
                through: { attributes: [] }, // Evita traer atributos de la tabla intermedia
            }
        });
        // Convert the diets:[{name:value}, {name:value}] to diets:[value,value]
        const recipeDB = handlerObjToArray(recipeDataBase, 'diets', 'name')

        const recipesAPI = await handlerRecipes()
            .then((data) => {
                return data.map(recipe => { return Recipe.getRecipe(recipe) })
            })
        handlerSuccess('find', 'Recipe', res, [...recipeDB, ...recipesAPI])

    } catch (error) {
        handlerError('find', 'Recipe', res)
    }

}

export default getAllRecipes