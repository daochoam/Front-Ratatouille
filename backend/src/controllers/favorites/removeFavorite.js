import db from "../../db.js"

const removeFavorite = (req, res) => {
    const { id } = req.params

    if (isNaN(id)) return handlerError(400, 'The entered value is not a valid id', res)

    const locationFavorite = modelFavorites.myFavorites.findIndex((favorite) => favorite.Id == id)
    if (locationFavorite === -1) {
        res.status(404).json({ error: 'The character was not found in favorites' })
        return false;
    }

    modelFavorites.removeFavorite(locationFavorite, (Reply) => {
        if (Reply.status === 200) {
            res.status(200)
                .json({ message: Reply.message })
        } else {
            res
                .status(Reply.status)
                .json({ error: Reply.error })
        }
    })
}

export default removeFavorite