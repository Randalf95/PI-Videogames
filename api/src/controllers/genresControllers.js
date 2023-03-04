const { Genre } = require('../db.js');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const getGenres = async () => {
    const genresDb = await Genre.findAll();
    if (genresDb.length) {
        console.log('a')
        return genresDb

    }
    const genresApi = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results.map(g => {
        return {
            id: g.id,
            name: g.name
        }
    })
    /* console.log(genresApi) */
    await Genre.bulkCreate(genresApi);
    /* console.log(created) */
    const genres=(await Genre.findAll()).map(g=>g.dataValues)
    
    return genres

}

module.exports = { getGenres };