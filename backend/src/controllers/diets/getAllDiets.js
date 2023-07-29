import { handlerAllDiets, handlerSuccess, handlerError } from '../../services/index.js';
import db from '../../db.js';

const getAllDiets = async (__, res) => {
    try {
        await handlerAllDiets()
        const diets = await db.Diet.findAll()
        handlerSuccess('find', 'Diets', res, diets)
    }
    catch (error) {
        return handlerError(error, null, res)
    }
}

export default getAllDiets