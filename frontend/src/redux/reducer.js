import {
    CREATE_RECIPE,
    GET_RECIPES,
    GET_RECIPE_DETAIL,
    GET_RECIPES_BY_NAME,
    GET_ALL_DIETS,
    FILTER_BY_DIETS,
    FILTER_BY_ORDER,
    FILTER_BY_SCORE
} from './actions/index'

const initialState = {
    recipes: [],
    typesDiets: [],
    filterScore: 0,
    filterDiets: [],
    filterOrder: false,
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, payload]
            };
        case GET_ALL_DIETS:
            return {
                ...state,
                typesDiets: payload
            };
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload
            };
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                recipes: [...state.recipes, payload]
            };
        case GET_RECIPES_BY_NAME:
            return {
                ...state,
                recipes: payload
            };
        case FILTER_BY_DIETS:
            return {
                ...state,
                filterDiets: payload
            };
        case FILTER_BY_ORDER:
            return {
                ...state,
                filterOrder: payload
            };
        case FILTER_BY_SCORE:
            return {
                ...state,
                filterScore: payload
            };

        default:
            return { ...state }
    }
}

export default rootReducer