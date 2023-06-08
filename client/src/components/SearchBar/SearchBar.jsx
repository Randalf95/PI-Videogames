import style from './SearchBar.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogamesByName } from '../../redux/actions';

export default function SearchBar() {
   const [name, setName] = useState('')
   const dispatch = useDispatch()
   const onChange = (e) => {
      setName(e.target.value)
   }
   const onHandleClick = (e) => {
      dispatch(getVideogamesByName(name))
      setName('');
   }
   return (
      <div className={style.searchContainer}>
         <input type='search' onChange={onChange} value={name} className={style.searchInput} />
         <button onClick={onHandleClick} className={style.searchButton}>Search</button>
      </div>
   );
}