/* import {Link} from 'react-router-dom';
import style from './Card.module.css'

const Card = ({id, genres, background_image, name}) => {
    return (
        <div className={style.card}>
        <Link to={`/${id}`}>{name}</Link>
        <img src= {background_image} alt={`${name}`} width={400}/>
        {genres?.map ((g, i)=>
            
            (<div key= {i}>
                <h2>{g.name}</h2>
            </div>)
)}
        </div>
    )
};

export default Card; */
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import {useDispatch} from 'react-redux';
import { deleteVideogame } from '../../redux/actions';


const Card = ({ id, genres, background_image, name }) => {
  const dispatch = useDispatch()
const handleClick = (e)=>{
  dispatch(deleteVideogame(id))
  alert('Videogame deleted')
}

  return (
    <div className={styles.card}>
      <button /* classname={styles.button} */ value={id} onClick={handleClick}>X</button>
      <Link to={`/${id}`}>{name}</Link>
      <img src={background_image} alt={name} height={250} width={400} />
      {genres?.map((g, i) => (
        <div key={i}>
          <h2>{g.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;