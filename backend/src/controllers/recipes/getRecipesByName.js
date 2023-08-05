import path from 'path';
import axios from 'axios'
import db from '../../db.js';
import { Op } from 'sequelize';
import config from '../../config/config.js'
import { Recipe, handlerSuccess, handlerError, handlerRecipes, handlerObjToArray } from '../../services/index.js';

const getRecipesByName = async (req, res) => {
    const { name } = req.query

    try {
        if (!/^[A-Z][A-Z\s]+$/i.test(name)) throw Error('Parameter introduced by query is invalid')

        const recipeDataBase = await db.Recipe.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
            include: {
                model: db.Diet,
                as: 'diets',
                through: { attributes: [] }, // Evita traer atributos de la tabla intermedia
            }
        });

        const recipeDB = handlerObjToArray(recipeDataBase, 'diets', 'name')

        const recipesAPI = await axios
            .get(path.join(config.URL_SPOONACULAR, `complexSearch${config.API_KEY}&addRecipeInformation=true&titleMatch=${name}&number=100`))
            .then(({ data }) => { return data.results })
            .then((data) => { return data.map(recipe => { return Recipe.getRecipe(recipe) }) })
        // .then((data) => {
        //     return data.map(recipe => {// Remove Ingredient Attribute
        //         return Object.fromEntries(Object.entries(recipe).filter(([key]) => key !== 'ingredients'));
        //     })
        // })

        handlerSuccess('find', 'Recipe', res, [...recipeDB, ...recipesAPI])
    }
    catch (error) {
        handlerError(error.message, null, res)
    }
}

export default getRecipesByName