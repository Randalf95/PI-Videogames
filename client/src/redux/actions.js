import axios from 'axios';

export const GET_VIDEOGAMES= 'GET_VIDEOGAMES'
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID'
export const ADD_VIDEOGAME = 'CREATE_VIDEOGAME'

export const getVideogames= ()=>{
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/videogames")
            const data = response.data
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }

    }
}

/* export const getVideogameById = (idVideogame) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${idVideogame}`);
            const data = response.data;
            return dispatch({
                type: GET_VIDEOGAME_BY_ID,
                payload: data
            })

        }
        catch(error){
            console.log(error)
        }
    }
} */

export const createVideogame = (videogame) => {
    return async function (dispatch) {
        try {
           const response = await axios.post('http://localhost:3001/videogames', videogame)
           const created = response.data
           return dispatch({
            type: ADD_VIDEOGAME,
            payload: created
        })
        }
        catch(error){
            console.log(error)
        }
    }
}