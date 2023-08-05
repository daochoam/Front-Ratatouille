const valRecipe = {
    specialCharacters: /[!-/:-@[-`{-~¿¡°]/,
    numbers: /\d/,
    multiSpace: /[\s]{2,}/,
    image: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|svg))/i,
    healthScore: /^(100|[1-9]?[0-9])$/,
    diets: {
    },
}

const validateName = (valName) => {
    if (valName === null || valName === undefined || valName === "")
        return `The name is required.`
    else {
        if (valRecipe.numbers.test(valRecipe)) return 'The name must not contain numbers.'
        if (Math.max(...valName.trim().split(' ').map(p => p.length)) > 15) return `Delete words longer than 15 characters.`
        if (Math.min(...valName.trim().split(' ').map(p => p.length)) < 2) return `Remove words of less than 2 character.`
        if (valRecipe.specialCharacters.test(valName.trim())) return `Remove special characters from the name.`
        return ''
    }
}

const validateDiets = (valDiets) => {
    if (valDiets === undefined || valDiets === null || valDiets.length === 0) {
        return `You must select at least one type diet.`
    }
    return ''
}

const validateImage = (valImage) => {
    if (valImage === null || valImage === undefined || valImage === "") return `The image is required.`
    else {
        if (/^\d/.test(valImage)) return 'Image name must not start with numbers'
        if (valRecipe.specialCharacters.test(valImage)) return 'Image name must not start with special characters'
        if (!valRecipe.image.test(valImage)) return 'The image must be in bmp, gif, jpg, jpeg, svg or png format.'
        return ''
    }
}

const validateHealthScore = (valHealthScore) => {
    if (!/^(100|[1-9]?[0-9])$/.test(valHealthScore)) return 'The value of health score to be between 0 and 100'
    return ''
}

const validateSummaryOfDish = (valSumaryOfDish) => {

    if (valSumaryOfDish === null || valSumaryOfDish === undefined || valSumaryOfDish === "")
        return `The summary is required.`
    else {
        let valSum = valSumaryOfDish.trim()
        if (valSum.length < 10 || valSum.length > 300) return 'The summary must contain 10 to 300 characters.'
        if (!/[\w\s.,;]{10,}/.test(valSum)) return `Only alphanumeric characters are allowed.`
        return ''
    }
}

const validateStepByStep = (valStepByStep) => {
    if (valStepByStep === null || valStepByStep === undefined) return `At least one step is required.`
    return Object.values(valStepByStep).map((step, index) => {
        if (index === 0 && step[0] === '') return `At least one step is required.`
        if (step.length < 10) return 'Please write a minimum of 10 characters.'
        if (/^\d+$/.test(step)) return 'The field must not contain only numbers.'
        if (/^[!-/:-@[-`{-~¿¡°]$/.test(step)) return 'The field must not contain only special characters.'
        if (/^[!-/:-@[-`{-~¿¡°\d]$/.test(step)) return 'The field must not contain alphanumeric characters.'
        if (valRecipe.multiSpace.test(step)) return 'Remove excess spaces between words'
        return ''
    })
}

const handlerValidateRecipe = (state) => {
    let recipeErrors = {
        name: validateName(state.name) || '',
        image: validateImage(state.image) || '',
        healthScore: validateHealthScore(state.healthScore) || '',
        diets: validateDiets(state.diets) || '',
        summaryOfDish: validateSummaryOfDish(state.summaryOfDish) || '',
        stepByStep: validateStepByStep(state.stepByStep) || ['']
    }
    return recipeErrors
}

export default handlerValidateRecipe