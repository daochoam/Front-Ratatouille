import {
    ADD_FAVORITE,
    ADD_NEW_RECIPE,
    CLEAN_RECIPE_DETAIL,
    CREATE_RECIPE,
    GET_RECIPE_BY_ID,
    GET_RECIPE_DETAIL,
    REMOVE_FAVORITE,
    REMOVE_RECIPE,

} from './actions/index'

const initialState = {
    recipes: [],
    recipesDetail: {},
    favorites: [],
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, payload],
            };
        case ADD_NEW_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, payload]
            }
        case CREATE_RECIPE:
            return {
                ...state,
                recipeDetail: []
            };
        case CLEAN_RECIPE_DETAIL:
            return {
                ...state,
                recipeDetail: []
            };
        case REMOVE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter((recipe) => recipe.Id !== payload)
            };
        case GET_RECIPE_BY_ID:
            return {
                ...state,
                recipes: [...state.recipes, payload],
            };
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                recipeDetail: payload
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite.Id !== payload)
            };
        default:
            return { ...state }
    }
}

export default rootReducer