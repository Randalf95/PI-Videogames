import React, { useState } from 'react';
import style from './Pagination.module.css';

const Pagination = ({ data, itemsPerPage, onChangePage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = itemsPerPage;

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

export default Pagination;