const { createVideogame, getVideogameById, getVideogameByName, getAllVideogames } = require('../controllers/videogamesControllers.js');

const getVideogamesHandler = async (req, res) => {
    const { name } = req.query
    try{
    const results= name? await getVideogameByName(name): await getAllVideogames();
    /* console.log(results) */
    res.status(200).json(results);}
    catch(error){
        res.status(400).send(error.message)
    }
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
//Qué propiedades necesito? Cómo incluyo los datos del género?

const postVideogameHandler = async (req, res) => {
    const { name, description, platforms, background_image, released, rating, genre } = req.body
    console.log('body', req.body)
    try {
        const newVideogame = await createVideogame(name, description, platforms, background_image, released, rating, genre)
        console.log('new', newVideogame)
        res.status(200).send('Videogame created succesfully')
    } catch (error) {
        console.log(error.message)
        res.status(400).send({error : error.message})
    }
}

module.exports = {
    getVideogamesHandler,
    getVideogameHandler,
    postVideogameHandler
}