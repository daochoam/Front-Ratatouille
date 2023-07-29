import { handlerAllDiets, handlerError, handlerSuccess } from '../../services/index.js';
import db from '../../db.js';

const createDiet = async (req, res) => {
    const { name } = req.body
    try {
        handlerAllDiets()
        const isDiet = await db.Diet.findOne({ where: { name: { [Op.iLike]: `%${name}%` } } })
        if (isDiet === null) {
            const newDiet = db.Diet.create({ name })
            return handlerSuccess('create', 'Diet', res, newDiet)
        }
        else {
            return handlerError('create', 'Diet', res)
        }

    }
    catch (error) {
        return handlerError(error, null, res)
    }
}

export default createDiet