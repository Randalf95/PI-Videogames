import { Link } from 'react-router-dom';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { getGenres, getVideogames } from '../../redux/actions';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';

import styles from './Home.module.css';
function Home (){
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(getGenres())},[dispatch])
    useEffect(()=>{dispatch(getVideogames())},[dispatch]);
    
    return (
        <div className={styles.homeContainer}>
            <Link to='/create'><button className={styles.createButton}>Crear Videojuego</button></Link>
            <SearchBar/>
            <div className={styles.cardsContainer}>
                <CardsContainer/>
            </div>
        </div>
    )
};

export default Home;