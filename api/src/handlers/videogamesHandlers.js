const { createVideogame, getVideogameById, getVideogameByName, getAllVideogames } = require('../controllers/videogamesControllers.js');

const getVideogamesHandler = async (req, res) => {
    const { name } = req.query
    try {
        const results = name ? await getVideogameByName(name) : await getAllVideogames();
        res.status(200).json(results);
    }
    catch (error) {
        res.status(400).send(error.message)
    };
};

const getVideogameHandler = async (req, res) => {
    const { idVideogame } = req.params;
    const source = isNaN(idVideogame) ? 'bdd' : 'api';
    try {
        const videogame = await getVideogameById(idVideogame, source);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(400).send({ error: error.message })
    };
};


const postVideogameHandler = async (req, res) => {
    const { name, description, platforms, background_image, released, rating, genres } = req.body
    try {
        const newVideogame = await createVideogame(name, description, platforms, background_image, released, rating, genres);
        res.status(200).send('Videogame created succesfully');
    } catch (error) {
        res.status(400).send({ error: error.message });
    };
};



module.exports = {
    getVideogamesHandler,
    getVideogameHandler,
    postVideogameHandler
}