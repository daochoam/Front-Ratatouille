import { URL_RATATOUILLE } from '../../const'
import axios from 'axios'
/**
 * @handlerFavorite { props, state: { state, setState }, fun: { add(), remove() } }
 * @param {*} props props fo the characters.
 * @param {*} state {state: Boolean , setState: function()}.
 * @param {*} fun { addFavorite: function(), rmvFavorite: function() }.
 */
const handlerFavorite = (
    recipe,
    state = {
        state: Boolean,
        setState: () => { }
    },
    fun = {
        addFavorite: () => { },
        rmvFavorite: () => { }
    }) => {
    if (state.state) {
        state.setState(false)
        axios.delete(`${URL_RATATOUILLE}/fav/${recipe.id}`)
        fun.rmvFavorite(recipe.id)
    }
    else {
        state.setState(true)
        axios.post(`${URL_RATATOUILLE}/fav`, recipe)
        fun.addFavorite(recipe)
    }
}


export default handlerFavorite