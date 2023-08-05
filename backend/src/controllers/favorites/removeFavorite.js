import db from "../../db.js"

const removeFavorite = async (req, res) => {
    const { userId } = req.params
    const { recipeId } = req.query
    try {
        const isRelation = await db.RecipesUser.findOne({
            where: {
                recipeId: recipeId,
                userId: userId,
            },
        })
    } catch (error) {

    }

}

export default removeFavorite