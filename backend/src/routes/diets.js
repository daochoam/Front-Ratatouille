import { Router } from "express";
import { createDiet, getAllDiets, removeDietById, updateDietById } from "../controllers/index.js";

const dietRouter = Router()

dietRouter.get('/diets', getAllDiets)
dietRouter.post('/diets', createDiet)
dietRouter.delete('/diets/:idDiet', removeDietById)
dietRouter.put('/diets/:idDiet', updateDietById)

export default dietRouter