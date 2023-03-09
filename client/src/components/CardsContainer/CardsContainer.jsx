import Card from "../Card/Card";
import style from './CardsContainer.module.css'
import { useSelector } from 'react-redux';
const CardsContainer = (props) => {
    const videogames = useSelector(state => state.videogames)

    return (
        <div className={style.container}>
            {videogames.map(v => {
                return (
                    <Card
                        key={v.id}
                        name={v.name}
                        id={v.id}
                        background_image={v.background_image}
                        genres={v.genres} />
                )



            })}
        </div>
    )
}

export default CardsContainer;