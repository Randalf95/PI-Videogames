const { Videogame } = require('../db.js');
const  axios  = require('axios');
require('dotenv').config();

const{API_KEY}= process.env;

const createVideogame = async (id, name, description, platforms, background_image, released_at, rating) => {
    const newVideogame = await Videogame.create({ id, name, description, platforms, background_image, released_at, rating });
    return newVideogame;
}
// Ver después cómo es lo de relacionar con sus géneros indicados.

const getVideogameById = async (idVideogame, source) => {
    
    
    const videogame = source === 'api' ?
        (await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`))
        .data
        : await Videogame.findByPk(idVideogame);
    return videogame
}

module.exports = {
    createVideogame,
    getVideogameById
}