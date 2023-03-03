const {Router} = require('express');
const genresRouter = Router();
const {getGenresHandler}= require('../handlers/genresHandlers.js')

/* genresRouter.use('') */
genresRouter.get('/', getGenresHandler);

module.exports= genresRouter;
