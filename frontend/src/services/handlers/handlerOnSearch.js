import { getRecipeById } from "../requires"

const handlerOnSearch = (id, state, setState) => {
  if (state.some((char) => char.id === parseInt(id))) return alert("The recipe was previously added")
  // Todo
  getRecipeById(id)
    .then(({ data, message }) => {
      data ? setState((oldsetState) => [...oldsetState, data]) : alert(message)
    })
}

export default handlerOnSearch