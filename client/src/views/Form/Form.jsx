import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
/* import {useDispatch} from 'react-redux'; */
/* import { createVideogame } from '../../redux/actions'; */

const Form = () => {
    const [form, setForm] = useState({
        name:'',
        background_image:'',
        description:'',
        platforms:'',
        released:'',
        genre:[2],
        rating: 5.5,
    })
    const [errors, setErrors] = useState({
        name:'',
        background_image:'',
        description:'',
        platforms:'',
        released:'',
        genre:[],
        rating: null
    })

const onHandleChange = (e) => {
validate({...form, [e.target.name]: e.target.value})
setForm({...form, [e.target.name]: e.target.value})
}

const validate = (form) => {
if (/^(https:|http:|www\.)\S*/.test(form.background_image)){
    console.log('La URL es correcta')
}
else console.log('La url es incorrecta')
}
/* const dispatch = useDispatch(); */

const handleSubmit =  (e) => {
e.preventDefault();


 axios.post('http://localhost:3001/videogames', (form))
}

    return (
        <>
        <Link to='/home'>Volver a Home</Link>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' name='name' value={form.name} onChange={onHandleChange}/>
            </div>
            <div>
                <label>URL Image</label>
                <input type='text' name='background_image' value={form.background_image} onChange={onHandleChange}/>
            </div>
            <div>
                <label>Description</label>
                <input type='text' name='description' form={form.description} onChange={onHandleChange}/>
            </div>
            <div>
                <label>Platforms</label>
                <input type='text' name='platforms' value={form.platforms} onChange={onHandleChange}/>
            </div>
            <div>
                <label>Released on</label>
                <input type='text' name='released' value={form.released} onChange={onHandleChange}/>
                <span>dd-mm-yyyy</span>
            </div>
            {/* <div>
                <label>Rating</label>
                <input type='number' name='rating' form={form.rating} onChange={onHandleChange}/>
            </div> */}
            {/* <div>
                <label>Genres</label>
                <input type='text' name='genres' form={form.genres} onChange={onHandleChange}/>
            </div> tengo el form.genres hardcodeado
 */}
            <button type='submit'>Create Videogame</button>
            
            
            
            
        </form>
        </>
    )
}

export default Form;