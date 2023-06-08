import { FILTER_BY_GENRE, FILTER_BY_SOURCE, DELETE_VIDEOGAME, GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, ORDER_BY_ALPHABET, ORDER_BY_RATING } from './actions'
const initialState = {
    videogames: [],
    genres: [],
    allVideogames: [],
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload,
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            };
        case GET_VIDEOGAMES_BY_NAME:
            return {
                ...state,
                videogames: action.payload
            };

        case FILTER_BY_GENRE:
            return {
                ...state,
                videogames: [...state.allVideogames.filter(vg => {
                    return vg.genres.some(genre => genre.name === action.payload)
                })]
            };
        case FILTER_BY_SOURCE:
            return {
                ...state,
                videogames:
                    action.payload === 'DB' ?
                        [...state.allVideogames.filter(vg => vg.created === true)]
                        : [...state.allVideogames.filter(vg => vg.created === false)]
            };
        case ORDER_BY_ALPHABET:
            const arrAsc = [...state.allVideogames].sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                videogames:
                    action.payload === 'A-Z' ?
                        arrAsc : arrAsc.reverse()
            };
        case ORDER_BY_RATING:
            return {
                ...state,
                videogames:
                    action.payload === 'LOW RATING' ?
                        [...state.allVideogames].sort((a, b) => a.rating - b.rating)
                        : [...state.allVideogames].sort((a, b) => b.rating - a.rating)
            };
        case DELETE_VIDEOGAME:
            return {
                ...state,
                videogames: [...state.allVideogames].filter(vg => vg.id !== action.payload),
                allVideogames: [...state.allVideogames].filter(vg => vg.id !== action.payload)
            };
        default:
            return { ...state }
    };

};

export default reducer;