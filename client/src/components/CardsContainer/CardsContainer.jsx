import Card from "../Card/Card";
import style from './CardsContainer.module.css'
import Pagination from '../Pagination/Pagination.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterByGenre, filterBySource, getVideogames, orderByAlphabet, orderByRating, } from "../../redux/actions";

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
    setCurrentPage(1)
    dispatch(filterByGenre(e.target.value))
    e.target.value = 'Genre'
  };

  const handleSourceFilter = (e) => {
    setCurrentPage(1);
    dispatch(filterBySource(e.target.value));
    e.target.value = 'Source';
  };

  const handleRatingOrder = (e) => {
    setCurrentPage(1);
    dispatch(orderByRating(e.target.value));
    e.target.value = 'Rating';
  };

  const handleAlphabetOrder = (e) => {
    setCurrentPage(1);
    dispatch(orderByAlphabet(e.target.value));
    e.target.value = 'Alphabet';
  }

  const handleOnClick = (e) => {
    setCurrentPage(1);
    dispatch(getVideogames());
  }


  return (
    <div className={style.container}>

      <div className={style.filters}>
        <select onChange={handleGenreFilter}>
          <option value="Genre">Genre</option>
          {genres.map((g, i) => (
            <option key={i} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>
        <select onChange={handleSourceFilter}>
          <option value="Source">Source</option>
          <option value="API">API</option>
          <option value="DB">DB</option>
        </select>
        <select onChange={handleRatingOrder}>
          <option value="Rating">Rating</option>
          <option value="LOW RATING">LOW RATING</option>
          <option value="HIGH RATING">HIGH RATING</option>
        </select>
        <select onChange={handleAlphabetOrder}>
          <option value="Alphabet">Alphabet</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <button onClick={handleOnClick}>All Videogames</button>
      </div>
      <Pagination
        data={videogames}
        itemsPerPage={itemsPerPage}
        onChangePage={handlePageChange}
      />
      <div className={style.cards}>
        {currentItems.map((v) => (
          <Card
            key={v.id}
            name={v.name}
            id={v.id}
            background_image={v.background_image}
            genres={v.genres}
            className={style.card}
            rating={v.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsContainer;