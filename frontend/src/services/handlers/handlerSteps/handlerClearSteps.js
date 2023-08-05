const handlerClearSteps = (index, state, setState) => {
    const currentSteps = [...state];
    currentSteps[index].value = '';
    setState(currentSteps);
    return currentSteps
};
export default handlerClearSteps