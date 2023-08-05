import { valRecipe } from './validator.js'

const { id, name, image, healthScore, sumaryOfDish, stepByStep } = valRecipe
const validateRecipe = {}


validateRecipe.id = (valId) => {

  if (valId == "" || valId == null || valId == undefined) throw Error(`The id is required.`)
  else {
    if (id.spaces.test(valId)) throw Error("The id cannot contain spaces.")
    if (id.number.test(valId) || id.uuid.test(valId))
      return 'Id valid'
  }

}

validateRecipe.name = (valName) => {
  const Name = valName.trim()
}

validateRecipe.image = (valImage) => {
  const Image = valImage.trim()

}

validateRecipe.healthScore = (valHealthScore) => {
  const HealthScore = valHealthScore.trim()
}

validateRecipe.sumaryOfDish = (valSumaryOfDish) => {
  const SumaryOfDish = valSumaryOfDish.trim()
}

validateRecipe.stepByStep = (valStepByStep) => {
  const StepByStep = valStepByStep.trim()
}
// (id, name, image, diets, healthScore, sumaryOfDish, stepByStep) => {

//   // This field is required.
//   if (Name.trim() == "" || Name.trim() == null || Name.trim() == undefined) {
//     msn += `The ${Type} is required.`
//   }
//   else {
//     // The field contain many spaces between names.
//     if (this.Form.Name.MultiSpace.test(Name.trim()) == true) {
//       msn += `Delete multi-spaces between ${Type}s.`
//     }

//     // The field must not contain numbers.
//     if (this.Form.Name.Numbers.test(Name.trim()) == true) {
//       if (msn != "") { msn += "\n" }
//       msn += `The ${Type} mustn't contain numbers.`
//     }

//     // The field must not contain name(s) of more than 15 characters.
//     if (Math.max(...Name.trim().split(' ').map(p => p.length)) > 15) {
//       if (msn != "") { msn += "\n" }
//       msn += `Delete words longer than 15 characters.`
//     }

//     // The field must not contain name(s) of less than 3 characters.
//     if (Math.min(...Name.trim().split(' ').map(p => p.length)) < 3) {
//       if (msn != "") { msn += "\n" }
//       msn += `Remove words of less than 3 characters`
//     }

//     // The name must not contain special characters..
//     if (this.Form.Name.SpecialCharacters.test(Name.trim()) == true) {
//       if (msn != "") { msn += "\n" }
//       msn += `Remove special characters from the ${Type}.`
//     }
//   }

//   if (msn == "") {
//     return { state: true, message: msn }
//   } else {
//     return { state: false, message: msn }
//   }
// }

export default validateRecipe