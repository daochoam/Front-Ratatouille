//? Recipe Controllers
export {
    createRecipe,
    getRecipeById,
    getAllRecipes,
    getRecipesByName,
    removeRecipeById,
    updateRecipeById
} from './recipes/index.js'

//? Diet Controllers
export {
    createDiet,
    getAllDiets,
    removeDietById,
    updateDietById
} from './diets/index.js'

//? Favorites Controllers
export {
    addFavorite,
    getAllFavorites,
    removeFavorite
} from './favorites/index.js'