import db from "../../db.js"

const addFavorite = async (req, res) => {
    const { idUser, idRecipe } = req.query

    try {
        const user = await db.findByPk(idUser)
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