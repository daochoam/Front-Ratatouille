import axios from "axios"
import path from "path"
import db from "../../db.js"
import config from "../../config/config.js"

const handlerAllDiets = async () => {
    console.log('hola')
    const Diet = await db.Diet.findAll()
    if (Diet.length == 0) {
        const apiDiets = await axios
            .get(path.join(config.URL_SPOONACULAR, `complexSearch${config.API_KEY}&addRecipeInformation=true&number=100`))
            .then(({ data }) => {
                return data.results.reduce((acc, { diets }) => [...acc, ...diets], []);
            })
            .then(typeDiet => { return [...new Set(typeDiet)] })
            .then(typeDiet => { return typeDiet.map(diet => { return { name: diet } }) })
        db.Diet.bulkCreate(apiDiets)
    }
    return
}

export default handlerAllDiets