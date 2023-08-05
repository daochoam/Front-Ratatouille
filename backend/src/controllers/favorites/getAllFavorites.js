import db from "../../db.js"
import { validateUser } from "../../services/index.js"

const getAllFavorites = async (req, res) => {
    const { userId } = req.params

    try {
        validateUser.id(userId)

        const Relation = await db.RecipeDiet.findOne({
            where: {
                recipeId: recipeId,
                dietId: dietId,
            },
        });
        const user = await db.User.findByPk(userId, {
            include: {
                model: db.Recipe,
                as: 'favorites',
                attributes: [],
                through: { attributes: [] }, // Evita traer atributos de la tabla intermedia
                include: [
                    {
                        model: db.Diet,
                        attributes: ['name'], // Atributos que deseas traer de la dieta
                        through: { attributes: [] }, // Omitir atributos de la tabla intermedia
                    },
                ],
            }
        })
    }
    catch (error) {

    }
    modelFavorites.listFavorites(null, (Reply) => {
        if (Reply.status === 200) {
            res.status(200)
                .json(Reply.data)
        } else {
            res
                .status(Reply.status)
                .json({ message: Reply.message })
        }
    })
}

export default getAllFavorites