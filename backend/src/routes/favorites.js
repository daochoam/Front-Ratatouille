import { Router } from "express";
import {
    addFavorite,
    getAllFavorites,
    removeFavorite
} from "../controllers/index.js"

const favoritesRouter = Router()

favoritesRouter.get('/favorites', getAllFavorites)
favoritesRouter.post('/favorites', getAllFavorites)
favoritesRouter.delete('/favorites', getAllFavorites)


export default favoritesRouter