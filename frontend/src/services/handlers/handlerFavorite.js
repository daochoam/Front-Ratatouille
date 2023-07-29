import { URL_RATATOUILLE } from '../../const'
import axios from 'axios'
/**
 * @handlerFavorite { props, state: { state, setState }, fun: { add(), remove() } }
 * @param {*} props props fo the characters.
 * @param {*} state {state: Boolean , setState: function()}.
 * @param {*} fun { addFavorite: function(), rmvFavorite: function() }.
 */
// const handlerFavorite = (
//     character,
//     state = {
//         state: Boolean,
//         setState: () => { }
//     },
//     fun = {
//         addFavorite: () => { },
//         rmvFavorite: () => { }
//     }) => {
//     if (state.state) {
//         state.setState(false)
//         axios.delete(`${URL_RICK_MORTY}/fav/${character.Id}`)
//         fun.rmvFavorite(character.Id)
//     }
//     else {
//         state.setState(true)
//         axios.post(`${URL_RICK_MORTY}/fav`, character)
//         fun.addFavorite(character)
//     }
// }

const handlerFavorite = (
    character,
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
        console.log(character.Id)
        axios.delete(`${URL_RATATOUILLE}/fav/${character.Id}`)
        fun.rmvFavorite(character.Id)
    }
    else {
        state.setState(true)
        axios.post(`${URL_RATATOUILLE}/fav`, character)
        fun.addFavorite(character)
    }
}


export default handlerFavorite