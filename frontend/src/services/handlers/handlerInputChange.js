import { handlerNames } from "./handlersFormats/"
import handlerValidateRecipe from "./handlerValidateRecipe"
/**
 * 
 * @param {*} event 
 * @param {*} state 
 * @param {*} setState 
 */
const handlerInputChange = (event, state, setState, setStateError = null) => {
    const { name, value } = event.target
    let currentState = {}
    if (state && typeof setState === 'function') {
        currentState = { ...state, [name]: name === 'name' ? handlerNames(value, true) : value }
        setState(currentState)
    }
    if (typeof setStateError === 'function') {
        const msgErrors = handlerValidateRecipe({
            ...state,
            [name]: name === 'name' ? handlerNames(value, true) : value
        })
        setStateError(msgErrors);
        return { currentState, msgErrors }
    }
    return { currentState }
}

export default handlerInputChange