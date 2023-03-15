import axios from 'axios';

export const GET_VIDEOGAMES= 'GET_VIDEOGAMES'
export const GET_GENRES = 'GET_GENRES'
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const FILTER_BY_SOURCE = 'FILTER_BY_SOURCE'
export const ORDER_BY_ALPHABET = 'ORDER_BY_ALPHABET'
export const ORDER_BY_RATING = 'ORDER_BY_RATING'
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME'
export const DELETE_VIDEOGAME = 'DELETE_VIDEOGAME'
/* export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID'
export const ADD_VIDEOGAME = 'CREATE_VIDEOGAME' */
//
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
};

export const getVideogamesByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            const data = response.data
            return dispatch({
                type: GET_VIDEOGAMES_BY_NAME,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }

    }
};


export const getGenres= ()=>{
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/genres")
            const data = response.data
            return dispatch({
                type: GET_GENRES,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const filterByGenre = (genre) => {
    return {
        type: FILTER_BY_GENRE,
        payload: genre
    }
}

export const filterBySource = (source) => {
    return {
        type: FILTER_BY_SOURCE,
        payload: source
    }
}

export const orderByAlphabet = (payload) => {
    return {
        type: ORDER_BY_ALPHABET,
        payload
    }
}

export const orderByRating = (payload) => {
    return {
        type: ORDER_BY_RATING,
        payload
    }
}

export const deleteVideogame = (id) => {
    return {
        type: DELETE_VIDEOGAME,
        payload: id
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

/* export const createVideogame = (videogame) => {
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
} */