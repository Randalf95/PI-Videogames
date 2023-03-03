const {Router} = require('express');
const videogamesRouter = Router();
const {getVideogamesHandler, getVideogameHandler, postVideogameHandler}=require('../handlers/videogamesHandlers.js')

videogamesRouter.get('/', getVideogamesHandler)

videogamesRouter.get('/:idVideogame', getVideogameHandler)

videogamesRouter.post('/', postVideogameHandler)

module.exports= videogamesRouter