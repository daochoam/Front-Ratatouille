const handlerRemoveSteps = (index, state, setState) => {
    if (state.length > 1) {
        const currentSteps = [...state];
        currentSteps.splice(index, 1);
        setState(currentSteps);
        return currentSteps
    }
    return [...state];
};

export default handlerRemoveSteps