import { handlerAllDiets, handlerError, handlerSuccess } from '../../services/index.js'
import { Op } from 'sequelize';
import db from '../../db.js';

const createRecipe = async (req, res) => {
    const { name, image, summaryOfDish, healthScore, stepByStep, diets } = req.body


    try {
        const isRecipe = await db.Recipe.findOne({ where: { name: { [Op.iLike]: `%${name}%` } } })
        if (isRecipe) return handlerError('create', 'Recipe', res)

        await handlerAllDiets()
        const recipe = await db.Recipe.create({ name, image, healthScore, summaryOfDish, stepByStep });

        if (diets && diets.length > 0) {
            const dietValue = [... new Set(diets)]
            const dietsToRecipe = await db.Diet.findAll({
                where: { id: dietValue }, // Filtrar los diets por los IDs en el array diets
            });
            await recipe.setDiets(dietsToRecipe);
        }
        const newRecipe = await db.Recipe.findByPk(recipe.id,
            {
                include: {
                    model: db.Diet,
                    as: 'diets',
                    through: { attributes: [] }, // Evita traer atributos de la tabla intermedia
                }
            });

        handlerSuccess('create', 'Recipe', res, newRecipe)
    }
    catch (error) {
        return handlerError(error.message, null, res)
    }
}

export default createRecipe