const handleChangeSteps = (event, indexCurrentStep, state, setState) => {
    const { value } = event.target
    const currentSteps = [...state];
    currentSteps[indexCurrentStep].value = value;
    setState(currentSteps);
    if (value.length < 100) {

        let indexClear = 0
        while (indexClear < (Object.keys(currentSteps).length - 1) && Object.keys(currentSteps).length !== 1) {
            if (currentSteps[indexClear].value === '' && indexClear !== indexCurrentStep) {
                currentSteps.splice(indexClear, 1)
                indexClear = indexClear !== 0 ? indexClear-- : 0

            }
            else {
                if (indexClear < Object.keys(currentSteps).length - 1) indexClear++
            }
        }
        setState(currentSteps);
        return currentSteps
    }
    return currentSteps
};

export default handleChangeSteps