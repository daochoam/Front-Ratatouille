import {
    CREATE_RECIPE,
    GET_RECIPES,
    GET_RECIPE_DETAIL,
    GET_RECIPES_BY_NAME,
    GET_ALL_DIETS,
    FILTER_BY_DIETS,
    FILTER_BY_FIELD,
    FILTER_BY_NAME,
    FILTER_BY_ORDER,
    FILTER_BY_ORIGIN
} from './actions/index'

const initialState = {
    recipes: [],
    typesDiets: [],
    filters: {
        field: 'All',
        name: '',
        order: 'All',
        origin: 'All',
        selectDiet: []
    }
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
                filters: { ...state.filters, selectDiet: [...payload] }
            };
        case FILTER_BY_FIELD:
            return {
                ...state,
                filters: { ...state.filters, field: payload }
            };
        case FILTER_BY_NAME:
            return {
                ...state,
                filters: { ...state.filters, name: payload }
            };
        case FILTER_BY_ORDER:
            return {
                ...state,
                filters: { ...state.filters, order: payload }
            };
        case FILTER_BY_ORIGIN:
            return {
                ...state,
                filters: { ...state.filters, origin: payload }
            };

        default:
            return { ...state }
    }
}

export default rootReducer