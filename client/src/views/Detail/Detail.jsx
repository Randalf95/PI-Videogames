import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from './Detail.module.css'
import Loading from '../../components/Loading/Loading';
const Detail = () => {
  const idVideogame = useParams().id
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  const [videogame, setVideogame] = useState({})
  const backToHome = () => {
    navigate('/home')
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
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
    <div className={styles.back}>
      <div className={styles.container}>
      {isLoading && <div /* className={styles.loading} */>
                <Loading/>
            </div>}
            {!isLoading &&
            <div>
        <button className={styles.button} onClick={backToHome}>Home</button>
        <h1 className={styles.h1}>{videogame.name}</h1>
        <img className={styles.image} src={videogame.background_image} width={400} height={300} alt={`imagen de ${videogame.name}`} />
        <h4>Released on {videogame.released}</h4>
        <h2 classname={styles.h2} dangerouslySetInnerHTML={{ __html: videogame.description }}></h2>
        <div className={styles.genres}>
          {videogame.genres?.map((g, i) => (
            <div key={i}>
              <h3>{g.name}</h3>
            </div>
          ))}
        </div>
        <div className={styles.platforms}>
          {videogame.platforms?.map((p, y) =>
            typeof p === 'object' ? (
              <div key={y}>
                <h2>{p.platform.name}</h2>
              </div>
            ) : (
              <div key={y}>
                <h3>{p}</h3>
              </div>
            )
          )}
        </div>
        <h2 className={styles.h2}>Rating: {videogame.rating}</h2>
      </div>}
      </div>
    </div>
  );
};

export default Detail;

/* return (
  <div className={styles.container}>
    <button onClick={backToHome}>Home</button>
    <h1>{videogame.name}</h1>
    <img src={videogame.background_image} alt={`imagen de ${videogame.name}`} width={400} />
    <h4>Released on {videogame.released}</h4>
    
    <h2 dangerouslySetInnerHTML={{ __html: videogame.description }}></h2>
    
    
    
    {videogame.genres?.map((g, i) =>

    (<div key={i}>
      <h3 >{g.name}</h3>
    </div>)
    )}
 
    
     {videogame.platforms?.map((p, y) =>
      typeof p === 'object' ? (
        <div key={y}>
          <h2>{p.platform.name}</h2>
        </div>
      ) : (
        <div key={y}>
          <h3>{p}</h3>
        </div>
      )
    )}
    <h2>Rating: {videogame.rating}</h2>
    
    <hr />

  </div>
) };
export default Detail;*/




/* import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import styles from './Detail.module.css';

const Detail = () => {
const idVideogame = useParams().id
const navigate = useNavigate()
const [videogame, setVideogame] = useState({})
const backToHome = () => {
navigate('/home')
}

useEffect(() => {
fetch(http://localhost:3001/videogames/${idVideogame})
.then((response) => response.json())
.then((vg) => {
setVideogame(vg);
})
.catch((err) => {
window.alert(err);
});
return setVideogame({});
}, [idVideogame]);

return (
<div className={styles.container}>
<button className={styles.button} onClick={backToHome}>Home</button>
<h1>{videogame.name}</h1>
<img className={styles.image} src={videogame.background_image} alt={imagen de ${videogame.name}} />
<h4>Released on {videogame.released}</h4>
<h2 dangerouslySetInnerHTML={{ __html: videogame.description }}></h2>
{videogame.genres?.map((g, i) => (
<div className={styles.genres} key={i}>
<h3>{g.name}</h3>
</div>
))}
{videogame.platforms?.map((p, y) =>
typeof p === 'object' ? (
<div className={styles.platforms} key={y}>
<h2>{p.platform.name}</h2>
</div>
) : (
<div className={styles.platforms} key={y}>
<h3>{p}</h3>
</div>
)
)}
<h2>Rating: {videogame.rating}</h2>
<hr />
</div>
)
};

export default Detail; */