
const handlerAddSteps = (index, state, setState) => {
    if (state.length === 1 && state[0].value === '') return
    if (state[index].value === '') return
    if (state[index].value !== '' && (state[index + 1] && state[index + 1].value === '')) return
    if (state.length === index + 1) {
        setState([...state, { value: '' }]);
    } else {
        const currentSteps = [...state];
        currentSteps.splice(index + 1, 0, { value: '' });
        setState(currentSteps);
    }

};

export default handlerAddSteps