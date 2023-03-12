import { Link } from 'react-router-dom';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { getVideogames } from '../../redux/actions';
import axios from 'axios';

function Home (){
    const dispatch = useDispatch()
    useEffect(()=>{axios.get('http://localhost:3001/genres')},[])
    useEffect(()=>{dispatch(getVideogames())},[dispatch]);
    
    return (
        <>
        <Link to='/create'>Crear Videojuego</Link>
        <CardsContainer/>
        </>
    )
};

export default Home;