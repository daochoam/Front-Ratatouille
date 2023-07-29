import { Router } from "express";
import { getRecipeById, getAllRecipes } from "../controllers/index.js"

const recipeRouter = Router()

recipeRouter.get('/recipes', getAllRecipes)
recipeRouter.get('/recipes/:idRecipe', getRecipeById)
recipeRouter.post('/recipes',)

export default recipeRouter