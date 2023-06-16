import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const GET_GENRES = 'GET_GENRES'
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const FILTER_BY_SOURCE = 'FILTER_BY_SOURCE'
export const ORDER_BY_ALPHABET = 'ORDER_BY_ALPHABET'
export const ORDER_BY_RATING = 'ORDER_BY_RATING'
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME'
export const DELETE_VIDEOGAME = 'DELETE_VIDEOGAME'

export const getVideogames = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get("https://pi-videogames-production-cc74.up.railway.app/videogames")
            const data = response.data
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        };

    };
};

export const getVideogamesByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`https://pi-videogames-production-cc74.up.railway.app/videogames?name=${name}`)
            const data = response.data
            return dispatch({
                type: GET_VIDEOGAMES_BY_NAME,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        };

    };
};


export const getGenres = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get("https://pi-videogames-production-cc74.up.railway.app/genres")
            const data = response.data
            return dispatch({
                type: GET_GENRES,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        };

    };
};

export const filterByGenre = (genre) => {
    return {
        type: FILTER_BY_GENRE,
        payload: genre
    };
};

export const filterBySource = (source) => {
    return {
        type: FILTER_BY_SOURCE,
        payload: source
    };
};

export const orderByAlphabet = (payload) => {
    return {
        type: ORDER_BY_ALPHABET,
        payload
    };
};

export const orderByRating = (payload) => {
    return {
        type: ORDER_BY_RATING,
        payload
    };
};

export const deleteVideogame = (id) => {
    return {
        type: DELETE_VIDEOGAME,
        payload: id
    };
};
