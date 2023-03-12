import Card from "../Card/Card";
import style from './CardsContainer.module.css'
import Pagination from '../Pagination/Pagination.jsx';
import { useSelector } from 'react-redux';
import { useState } from 'react';
/* const CardsContainer = () => {
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
} */


const CardsContainer = () => {
    const videogames = useSelector(state => state.videogames)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = videogames.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={style.container}>
            <Pagination
                data={videogames}
                itemsPerPage={itemsPerPage}
                onChangePage={handlePageChange}
            />
            {currentItems.map(v => {
                return (
                    <Card
                        key={v.id}
                        name={v.name}
                        id={v.id}
                        background_image={v.background_image}
                        genres={v.genres}
                    />
                );
            })}

        </div>
    );
}

export default CardsContainer;