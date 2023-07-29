
const handlerOnClose = (id, state, setState) => {
    setState(state.filter(recipe => recipe.id !== parseInt(id)))
}

export default handlerOnClose