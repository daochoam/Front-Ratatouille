//? Recipe Controllers
export {
    getRecipeById,
    getAllRecipes
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