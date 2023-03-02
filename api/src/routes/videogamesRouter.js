const {Router} = require('express');
const videogamesRouter = Router();

videogamesRouter.get('/',(req, res)=>{
    const {name} = req.query
    if (name) res.status(200).send(`Ruta que trae los primeros 15 videojuegos que se encuentren con el name ${name}`)
    else res.status(200).send('Ruta que trae los videojuegos');
})

videogamesRouter.get('/:idVideogame', (req, res)=>{
    const {idVideogame} = req.params;
    res.status(200).send(`Ruta que devuelve la info del videojuego de id ${idVideogame} `);
})

videogamesRouter.post('/', (req, res)=>{
    res.status(200).send('Ruta que crea un videojuego')
})

module.exports= videogamesRouter