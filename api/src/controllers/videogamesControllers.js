const { Videogame, Genre } = require('../db.js');
const axios = require('axios');
const cleanArray = require('../utils/utils.js')
require('dotenv').config();
const { API_KEY } = process.env;

const createVideogame = async (name, description, platforms, background_image, released, rating, genre) => {
    const newVideogame = await Videogame.create({name, description, platforms, background_image, released, rating });
    newVideogame.addGenres(genre)
    return newVideogame;
}
// Ver después cómo es lo de relacionar con sus géneros indicados.
const getAllVideogames = async () => {
    const videogamesArray= [];
    
    for (let i = 1; i<6; i++){
        const index=i
        videogamesArray.push(... (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&&page=${index}`))
        .data.results)
    }
    /* const videogamesApiRaw = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`))
        .data.results; */
    const videogamesApi = cleanArray(videogamesArray);
    /* console.log(videogamesApi) */
    const videogamesDb = (await Videogame.findAll({ attributes: ['id', 'name', 'background_image', 'created'] ,
    include: {
        model: Genre,
        attributes: ['name'], 
        through: { attributes: [] }
    }} )).map(vg => vg.dataValues)
    console.log(videogamesDb)
    const videogames = [...videogamesApi, ...videogamesDb]
    /* console.log(videogames); */
    //primeros 100
    return videogames
}

const getVideogameByName = async (name) => {
    const videogameApi = (await axios.get(`https://api.rawg.io/api/games&&search=${name}?key=${API_KEY}`)).data;

}


const getVideogameById = async (idVideogame, source) => {


    const videogame = source === 'api' ?
        (await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`))
            .data
        : await Videogame.findByPk(idVideogame,
            {
                include: {
                    model: Genre,
                    attributes: ['name'], 
                    through: { attributes: [] }
                }
            });
            console.log(videogame)
    const {id, name, background_image, platforms, description, released, rating, genres}=videogame
    videogameObject={
        id,
        name,
        background_image,
        platforms,
        description,
        released,
        rating,
        genres
    }
    return videogameObject;
}

module.exports = {
    createVideogame,
    getVideogameById,
    getAllVideogames,
    getVideogameByName,
}