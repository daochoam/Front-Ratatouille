import { handlerError, handlerSuccess } from '../../services/index.js';
import db from '../../db.js';

const updateDietById = async (req, res) => {
    const { name } = req.query
    const { idDiet } = req.params

    if (isNaN(id)) return handlerError('The entered value is not a valid id', null, null, res)

    try {
        const diet = await db.Diet.findByPk(idDiet)
        if (diet) {
            db.Diet.update({ name: name }, { where: { id: idDiet } })
            return handlerSuccess('update', 'Diet', res)
        }
        else {
            return handlerError(['find', 'update'], 'Diet', res)
        }
    }
    catch (error) {
        return handlerError(error, null, res)
    }
}

export default updateDietById