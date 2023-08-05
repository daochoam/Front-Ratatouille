import dotenv from 'dotenv';
dotenv.config();

const config = {}

config.listablanca = [
    'http://localhost:3000',
    'http://192.168.0.6:3000',
    undefined
]
config.PORT = process.env.PORT || 3001
config.URL_SPOONACULAR = 'https://api.spoonacular.com/recipes'
config.URL_IMAGE_INGREDIENTS = 'https://spoonacular.com/cdn/ingredients_100x100'
config.API_KEY = `?apiKey=${process.env.SPOONACULAR_API_KEY}`


export default config