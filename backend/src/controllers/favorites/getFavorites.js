import db from "../../db.js"

const getAllFavorites = (req, res) => {

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