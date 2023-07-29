import { reqRecipeById } from "../reqRecipe"

const handlerOnSearch = (id, state, setState) => {
  if (state.some((char) => char.Id === parseInt(id))) return alert("The character was previously added")
  // Todo
  reqRecipeById(id)
    .then(({ data, message }) => {
      data ? setState((oldRecipes) => [...oldRecipes, data]) : alert(message)
    })
}

export default handlerOnSearch