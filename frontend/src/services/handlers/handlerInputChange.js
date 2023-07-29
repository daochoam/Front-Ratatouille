/**
 * 
 * @param {*} event 
 * @param {*} state 
 * @param {*} setState 
 */
const handlerInputChange = (event, state, setState) => {
    const [property, value] = event.target
    setState({ ...state, [property]: value })
}

export default handlerInputChange