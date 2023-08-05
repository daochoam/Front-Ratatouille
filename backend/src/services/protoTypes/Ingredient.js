import path from 'path';
import PropTypes from 'prop-types';
import config from '../../config/config.js'

class Ingredient {
    constructor(props) {
        this.id = props.id
        this.name = props.name
        this.image = props.image ? path.join(config.URL_IMAGE_INGREDIENTS, props.image) : ''
        this.amount = props.amount
        this.measures = props.measures
    }

    getMeasures(measures) {
        let measureIngredient = {}
        for (const key in measures) {
            if (measures[key].unitShort) {
                measureIngredient[key] = `${measures[key].amount} ${measures[key].unitShort}`
            }
        }
        return measureIngredient
    }

    static getIngredient(obj) {
        const ingredient = new Ingredient({
            id: obj.id,
            name: obj.name,
            image: obj.image,
            amount: obj.amount,
            measures: {}
        });

        ingredient.measures = ingredient.getMeasures(obj.measures)
        return ingredient
    }
}

Ingredient.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    amount: PropTypes.number.isRequired,
    measures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredient