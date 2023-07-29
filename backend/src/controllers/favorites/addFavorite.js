import db from "../../db.js"

const addFavorite = async (req, res) => {
    const { name, image, summaryOfDish, healthScore, stepByStep, diets } = req.body

    try {
        const favorite = await db.Favorite.findByPk({ where: { name: { [Op.iLike]: `%${name}%` } } })
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

export default addFavorite