import { ADD_VIDEOGAME, GET_VIDEOGAMES } from './actions'
const initialState = {
    videogames: []
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
            };
        case ADD_VIDEOGAME:
            return {
                ...state,
                videogames: [...state.videogames, action.payload]
            };
        default:
            return { ...state }
    }

}

export default reducer;