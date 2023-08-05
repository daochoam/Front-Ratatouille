import { handlerAllDiets, handlerSuccess, handlerError } from '../../services/index.js';
import { Op } from 'sequelize';
import db from '../../db.js';

const getDietByName = async (req, res) => {
    const { name } = req.query

    try {
        const diets = await db.Diet.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
        });

        handlerSuccess('find', 'Diets', res, diets)
    }
    catch (error) {
        return handlerError(error, null, res)
    }
}

export default getDietByName