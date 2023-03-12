import Card from "../Card/Card";
import style from './CardsContainer.module.css'
import Pagination from '../Pagination/Pagination.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterByGenre, filterBySource, getVideogames, orderByAlphabet, orderByRating, } from "../../redux/actions";

/* const CardsContainer = () => {
    const videogames = useSelector(state => state.videogames)

    return (
        <div className={style.container}>
            {videogames.map(v => {
                return (
                    <Card
                        key={v.id}
                        name={v.name}
                        id={v.id}
                        background_image={v.background_image}
                        genres={v.genres} />
                )
           })}
           
        </div>
    )
} */


const CardsContainer = () => {
    const videogames = useSelector(state => state.videogames)
    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = videogames.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleGenreFilter = (e) => {
        dispatch(filterByGenre(e.target.value))
    }
    const handleSourceFilter =  (e) => {
        dispatch(filterBySource(e.target.value))
    }

    const handleRatingOrder = (e) => {
        dispatch(orderByRating(e.target.value))
    }

    const handleAlphabetOrder = (e) => {
        dispatch(orderByAlphabet(e.target.value))
    }

    const handleOnClick = (e) => {
        dispatch(getVideogames())
    }

    return (
        <div className={style.container}>
            <Pagination
                data={videogames}
                itemsPerPage={itemsPerPage}
                onChangePage={handlePageChange}
            />

            <select onChange={handleGenreFilter}>
                <option>Genre</option>
                {genres.map((g, i) =>

                (<option key={i} value={g.name}>
                {g.name}
                </option>)
                )}
            </select>
            <select onChange={handleSourceFilter}>
                <option>Source</option>
                <option value='API'>API</option>
                <option value= 'DB'>DB</option>
            </select>
            <select onChange={handleRatingOrder}>
                <option>Rating</option>
                <option value='LOW RATING'>LOW RATING</option>
                <option value= 'HIGH RATING'>HIGH RATING</option>
            </select>
            <select onChange={handleAlphabetOrder}>
                <option>Alphabet</option>
                <option value='A-Z'>A-Z</option>
                <option value='desc'>Z-A</option>
            </select>
            <button onClick={handleOnClick}>Reset Filters</button>

            {currentItems.map(v => {
                return (
                    <Card
                        key={v.id}
                        name={v.name}
                        id={v.id}
                        background_image={v.background_image}
                        genres={v.genres}
                    />
                );
            })}

        </div>
    );
}

export default CardsContainer;