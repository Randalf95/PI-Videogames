import { Link } from 'react-router-dom';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getGenres, getVideogames } from '../../redux/actions';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';

import styles from './Home.module.css';
import Loading from '../../components/Loading/Loading.jsx';
function Home() {
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);

    useEffect(() => { dispatch(getGenres()) }, [dispatch])
    useEffect(() => { dispatch(getVideogames()) }, [dispatch]);

    return (
        <div className={styles.homeContainer}>
            {isLoading && <div>
                <Loading />
            </div>}
            {!isLoading &&
                <div>
                    <Link to='/create'><button className={styles.createButton}>Crear Videojuego</button></Link>
                    <SearchBar />
                    <div className={styles.cardsContainer}>
                        <CardsContainer />
                    </div>
                </div>}

        </div>
    )
};

export default Home;