import { Router } from "express";
import {
    createRecipe,
    getRecipeById,
    getAllRecipes,
    getRecipesByName,
    removeRecipeById,
    updateRecipeById
} from "../controllers/index.js"

const recipeRouter = Router()

recipeRouter.get('/recipes', (req, res) => {
    const { name } = req.query

    if (name !== null && typeof name == 'string') { getRecipesByName(req, res) }
    else getAllRecipes(req, res)
})

recipeRouter.get('/recipes/:idRecipe', getRecipeById)
recipeRouter.post('/recipes', createRecipe)
recipeRouter.delete('/recipes/:idRecipe', removeRecipeById)
recipeRouter.put('/recipes/:idRecipe', updateRecipeById)

export default recipeRouter