const { createVideogame, getVideogameById } = require('../controllers/videogamesControllers.js');

const getVideogamesHandler = (req, res) => {
    const { name } = req.query
    if (name) res.status(200).send(`Ruta que trae los primeros 15 videojuegos que se encuentren con el name ${name}`)
    else res.status(200).send('Ruta que trae los videojuegos');
}

const getVideogameHandler = async (req, res) => {
    const { idVideogame } = req.params;
    const source = isNaN(idVideogame) ? 'bdd':'api' ;
        try {
            const videogame = await getVideogameById(idVideogame, source);
            res.status(200).json(videogame);
        } catch (error) {
            res.status(400).send({error : error.message})
        }
}

const postVideogameHandler = async (req, res) => {
    const { id, name, description, platforms, background_image, released_at, rating } = req.body
    try {
        const newVideogame = await createVideogame(id, name, description, platforms, background_image, released_at, rating)
        res.status(200).json(newVideogame)
    } catch (error) {
        res.status(400).send({error : error.message})
    }
}

module.exports = {
    getVideogamesHandler,
    getVideogameHandler,
    postVideogameHandler
}