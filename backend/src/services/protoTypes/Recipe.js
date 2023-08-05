import PropTypes from 'prop-types';

class Recipe {
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.image = props.image;
        this.diets = props.diets;
        this.healthScore = props.healthScore;
        this.summaryOfDish = props.summaryOfDish;
        this.stepByStep = props.stepByStep;
    }

    static getStepByStep(steps) {
        return steps.reduce((result, item) => {
            result[item.number] = item.step;
            return result;
        }, {});
    }

    static getRecipe(obj) {
        return new Recipe({
            id: obj.id,
            name: obj.title || '',
            image: obj.image || '',
            healthScore: obj.healthScore || null,
            diets: obj.diets || [],
            summaryOfDish: obj.summary || '',
            stepByStep: this.getStepByStep(obj.analyzedInstructions[0]?.steps || []),
        });

    }
}

Recipe.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    diets: PropTypes.array.isRequired,
    healthScore: PropTypes.number.isRequired,
    summaryOfDish: PropTypes.string.isRequired, // Cambiar "sumaryOfDish" a "summaryOfDish"
    stepByStep: PropTypes.array.isRequired,
};

export default Recipe