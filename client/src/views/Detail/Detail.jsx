import {useEffect, useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";
const Detail = () => {
    const idVideogame=useParams().id
    const navigate = useNavigate()
    const [videogame, setVideogame]=useState({})
    const backToHome=()=>{
        navigate('/home')
     }
    
        useEffect(() => {
            fetch(`http://localhost:3001/videogames/${idVideogame}`)
              .then((response) => response.json())
              .then((vg) => {
                  setVideogame(vg);
               } 
              )
              .catch((err) => {
                window.alert(err);
              });
            return setVideogame({});
          }, [idVideogame]);

        
            return (
                <div>
                    <button onClick={backToHome}>Home</button>
                    <h1>{videogame.name}</h1>
                    <h2>{videogame.id}</h2>
                    {/* <h2>{videogame.platforms}</h2> */}
                    <div>{videogame.description}</div>
                    <h2>Released on {videogame.released}</h2>
                    {/* <h2>{videogame.genres}</h2> */}
                    <h2>Rating: {videogame.rating}</h2>
                    <img src={videogame.background_image} alt={`imagen de ${videogame.name}`} width={400}/>
                    <hr/>
                    
                </div>
            )
};

export default Detail;