const { Videogame, Genre } = require('../db.js');
const axios = require('axios');
const cleanArray = require('../utils/utils.js')
const { Op } = require("sequelize");
require('dotenv').config();
const { API_KEY } = process.env;

const createVideogame = async (name, description, platforms, background_image, released, rating, genre) => {
    const newVideogame = await Videogame.create({ name, description, platforms, background_image, released, rating });
    newVideogame.addGenres(genre)
    return newVideogame;
}

const getAllVideogames = async () => {
    const videogamesArray = [];

    for (let i = 1; i < 6; i++) {
        const index = i
        videogamesArray.push(... (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&&page=${index}`))
            .data.results)
    };

    const videogamesApi = cleanArray(videogamesArray);
    const videogamesDb = (await Videogame.findAll({
        attributes: ['id', 'name', 'background_image', 'rating', 'created'],
        include: {
            model: Genre,
            attributes: ['name'],
            through: { attributes: [] }
        }
    })).map(vg => vg.dataValues);

    const videogames = [...videogamesApi, ...videogamesDb];
    return videogames;
}

const getVideogameByName = async (name) => {
    const videogamesDb = (await Videogame.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` }
        }
    })).map(vg => vg.dataValues);
    const videogamesApi = (await axios.get(`https://api.rawg.io/api/games?search=${name}&&key=${API_KEY}`)).data.results;
    const videogames = [...videogamesDb, ...videogamesApi].slice(0, 15);
    return videogames;
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

    const { id, name, background_image, platforms, description, released, rating, genres } = videogame
    videogameObject = {
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
};