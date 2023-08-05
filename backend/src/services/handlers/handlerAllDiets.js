import axios from "axios"
import path from "path"
import db from "../../db.js"
import config from "../../config/config.js"
import handlerRecipes from "./handlerRecipes.js"

const handlerAllDiets = async () => {
    const Diet = await db.Diet.findAll()
    if (Diet.length == 0) {
        const apiDiets = await handlerRecipes()
            .then(data => { return data.reduce((acc, { diets }) => [...acc, ...diets], []); })
            .then(typeDiet => { return [...new Set(typeDiet)] })
            .then(typeDiet => { return typeDiet.map(diet => { return { name: diet } }) })
        db.Diet.bulkCreate(apiDiets)
    }
    return
}

export default handlerAllDiets