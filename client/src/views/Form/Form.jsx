import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import validation from './validation';
import styles from './Form.module.css';
import { getGenres } from '../../redux/actions';
import { useEffect } from 'react';

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => { dispatch(getGenres()) }, [dispatch])
    const genres = useSelector(state => state.genres)
    const platforms = ['Sega', 'Family Gameboy', 'Nintendo DS', 'Nintendo 3DS', 'Nintendo Switch', 'PlayStation One', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'MacOs', 'Linux', 'Xbox One', 'Xbox Series S/X']
    const [form, setForm] = useState({
        name: '',
        background_image: '',
        description: '',
        platforms: [],
        released: '',
        genres: [],
        rating: 0,
    })

    const [errors, setErrors] = useState({
        name: '',
        background_image: '',
        description: '',
        platforms: '',
        released: '',
        genres: '',
        rating: '',
    })

    const backToHome = () => {
        navigate('/home')
    }

    const onHandleChange = (e) => {
        setErrors(validation({ ...form, [e.target.name]: e.target.value }))
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onHandleCheckbox = (e) => {
        if (form.genres.includes(e.target.id)) {
            setErrors(validation({ ...form, [e.target.name]: form.genres.filter(g => g !== e.target.id) }))
            setForm({ ...form, [e.target.name]: form.genres.filter(g => g !== e.target.id) })
        } else {
            setErrors(validation({ ...form, [e.target.name]: [...form.genres, e.target.id] }))
            setForm({ ...form, [e.target.name]: [...form.genres, e.target.id] })
        }
    }

    const onHandlePlatforms = (e) => {
        if (form.platforms.includes(e.target.value)) {
            setErrors(validation({ ...form, [e.target.name]: form.platforms.filter(p => p !== e.target.value) }))
            setForm({ ...form, [e.target.name]: form.platforms.filter(p => p !== e.target.value) })
        } else {
            setErrors(validation({ ...form, [e.target.name]: [...form.platforms, e.target.value] }))
            setForm({ ...form, [e.target.name]: [...form.platforms, e.target.value] })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        axios.post('http://localhost:3001/videogames', (form))
            .then(res => alert(res.data))
            .catch(err => alert(err))
        setForm({
            name: '',
            background_image: '',
            description: '',
            platforms: [],
            released: '',
            genres: [],
            rating: 0,
        })
        backToHome();
    }

    return (
        <div className={styles.body}>
            <Link to='/home'><button className={styles.button}>Back to Home</button></Link>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={form.name} onChange={onHandleChange} className={errors.name && styles.warning} autoComplete='off' />
                    {errors.name && <p className={styles.danger}>{errors.name}</p>}
                </div>
                <div>
                    <label>URL Image</label>
                    <input type='text' name='background_image' value={form.background_image} onChange={onHandleChange} className={errors.background_image && styles.warning} autoComplete='off' />
                    {errors.background_image && <p className={styles.danger}>{errors.background_image}</p>}
                </div>
                <div>
                    <label>Description</label>
                    <input type='text' name='description' value={form.description} onChange={onHandleChange} className={errors.description && styles.warning} autoComplete='off' />
                    {errors.description && <p className={styles.danger}>{errors.description}</p>}
                </div>
                <div>
                    <label>Released on</label>
                    <input type='text' name='released' value={form.released} onChange={onHandleChange} className={errors.released && styles.warning} autoComplete='off' />
                    {errors.released && <p className={styles.danger}>{errors.released}</p>}
                </div>
                <div>
                    <label>Rating</label>
                    <input type='number' name='rating' min='1' max='5' step='0.1' value={form.rating} onChange={onHandleChange} className={`${errors.rating && styles.warning} ${styles.rating}`} />
                    {errors.rating && <p className={styles.danger}>{errors.rating}</p>}
                </div>
                <div className={styles.genresContainer}>
                    {genres.map((g, i) => (
                        <div key={i} className={styles.genreItem}>
                            <input type="checkbox" id={g.id} name='genres' value={g.name} onClick={onHandleCheckbox} />
                            <label>{g.name}</label>
                        </div>
                    ))}
                    {errors.genres && <p className={styles.danger}>{errors.genres}</p>}
                </div>
                <div className={styles.platformsSection}>
                    {platforms.map((p, i) => (
                        <div key={i}>
                            <input type='checkbox' name='platforms' value={p} onClick={onHandlePlatforms} />
                            <label>{p}</label>
                        </div>
                    ))}
                    {errors.platforms && <p className={styles.danger} >{errors.platforms}</p>}
                </div>
                {!form.name || Object.entries(errors).length > 0 ?
                    <button disabled className={styles.buttonDisable}>Create Videogame</button> :
                    <button type='submit' className={styles.buttonCreate}>Create Videogame</button>
                }
            </form>
        </div>

    )
}

export default Form;