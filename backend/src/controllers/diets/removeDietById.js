import { handlerError, handlerSuccess } from '../../services/index.js';
import db from '../../db.js';

const removeDietById = async (req, res) => {
    const { idDiet } = req.params

    try {
        const diet = await db.Diet.findByPk(idDiet)
        if (diet) {
            diet.destroy()
            handlerSuccess('remove', 'Diet', res)
        }
        else {
            handlerError('remove', 'Diet', res)
        }
    }
    catch (error) {
        handlerError(error, null, res)
    }
}

export default removeDietById