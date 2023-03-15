/* import React, { useState, useEffect } from 'react';
import style from './Pagination.module.css';

const Pagination = ({ data, itemsPerPage, onChangePage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = itemsPerPage;

  useEffect(() => {
    setCurrentPage(1); // Establecer la página actual en 1 cuando cambia la lista de videojuegos
  }, [data]);

  const handleClick = (page) => {
    setCurrentPage(page);
    onChangePage(page);
  };

  const pagesCount = Math.ceil(data.length / pageSize);

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className={style.pagination}>
      {pages.map((page) => (
        <div
          key={page}
          className={page === currentPage ? style.activePage : style.page}
          onClick={() => handleClick(page)}
        >
          <button>{page}</button>
        </div>
      ))}
    </div>
  );
};

export default Pagination; */import React, { useState, useEffect } from 'react';
import style from './Pagination.module.css';

const Pagination = ({ data, itemsPerPage, onChangePage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = itemsPerPage;

  useEffect(() => {
    setCurrentPage(1); // Establecer la página actual en 1 cuando cambia la lista de videojuegos
  }, [data]);

  const handleClick = (page) => {
    setCurrentPage(page);
    onChangePage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onChangePage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
      onChangePage(currentPage + 1);
    }
  };

  const pagesCount = Math.ceil(data.length / pageSize);

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className={style.pagination}>
      <button onClick={handlePrevPage}  disabled={currentPage === 1}>Prev</button>
      {pages.map((page) => (
        <div
          key={page}
          className={page === currentPage ? style.activePage : style.page}
          onClick={() => handleClick(page)}
        >
          <button classname={style.button}>{page}</button>
        </div>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === pagesCount}>Next</button>
    </div>
  );
};

export default Pagination;

