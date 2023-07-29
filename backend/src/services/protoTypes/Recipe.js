import PropTypes from 'prop-types';
import Ingredient from './Ingredient.js';

class Recipe {
    constructor(props) {
        this.id = props.id;
        this.name = props.title;
        this.image = props.image;
        this.diets = props.diets;
        this.healthScore = props.healthScore;
        this.summaryOfDish = props.summaryOfDish;
        this.ingredients = props.ingredients;
        this.stepByStep = props.stepByStep;
    }

    getIngredients(ingredients) {
        return ingredients.map(ingredient => Ingredient.getIngredient(ingredient));
    }

    static getStepByStep(steps) {
        return steps.reduce((result, item) => {
            result[item.number] = item.step;
            return result;
        }, {});
    }

    static getRecipe(obj) {
        const recipe = new Recipe({
            id: obj.id,
            title: obj.title,
            image: obj.image,
            healthScore: obj.healthScore,
            diets: obj.diets,
            summaryOfDish: obj.summary,
            ingredients: [],
            stepByStep: this.getStepByStep(obj.analyzedInstructions[0].steps),
        });

        recipe.ingredients = recipe.getIngredients(obj.extendedIngredients)
        return recipe
    }
}

Recipe.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    diets: PropTypes.array.isRequired,
    healthScore: PropTypes.number.isRequired,
    sumaryOfDish: PropTypes.string.isRequired,
    stepByStep: PropTypes.array.isRequired,
};

export default Recipe