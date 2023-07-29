import Recipe from '../protoTypes/Recipe.js'

const handlerRecipe = (req, res) => {
    res
        .status(200)
        .json(Recipe.getRecipe(req))
}

export default handlerRecipe
