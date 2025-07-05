'use client';

import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import './pagination.scss';

import type { JSX } from 'react';
import { getPaginatedUsers, getQuery } from '@/src/store/tripmates-process/selectors';
import { uploadPageUserCards, uploadMoreUserCards } from '@/src/store/tripmates-process/thunk-actions';
import { DEFAULT_PAGE_NUMBER } from '@/src/const';

function Pagination(): JSX.Element {
  const paginatedUsers = useAppSelector(getPaginatedUsers);
  const query = useAppSelector(getQuery);
  const dispatch = useAppDispatch();

  const pageNumberClickHandler = (evt: React.MouseEvent<HTMLAnchorElement>, page: number) => {
    evt.preventDefault();
    dispatch(uploadPageUserCards({ ...query, page }));    
  };

  const moreButtonClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (paginatedUsers?.currentPage && paginatedUsers.currentPage < paginatedUsers.totalPages) {
      dispatch(uploadMoreUserCards({ ...query, page:  paginatedUsers.currentPage + 1 }));
    }    
  };

  const pageNextClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (paginatedUsers?.currentPage && paginatedUsers.currentPage < paginatedUsers.totalPages) {
      dispatch(uploadPageUserCards({ ...query, page:  paginatedUsers.currentPage + 1 }));
    }    
  };

  const pagePreviousClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (paginatedUsers?.currentPage && paginatedUsers.currentPage > DEFAULT_PAGE_NUMBER) {
      dispatch(uploadPageUserCards({ ...query, page:  paginatedUsers.currentPage - 1 }));
    }  
  };
    
  return (
    <section className='catalog-pagination'>
      <button 
        className='pagination-more-button' 
        type='button'
        onClick={moreButtonClickHandler}
      >Показать ещё</button>
      <div className='pagination-pages'>
        <ul className='pages-list clear-list'>
          {
            paginatedUsers &&
            Array.from({ length: paginatedUsers.totalPages }, (_val, index) => (index + 1)).map((page) => {
              if (page === paginatedUsers.currentPage) {
                return (
                  <li className='page-item' key={`page-${page}`}>
                    <span className='page-link current-page'>{page}</span>
                  </li>
                );
              }
              return (
                <li className='page-item'  key={`page-${page}`}>
                  <a className='page-link'
                    href='#'
                    onClick={(evt) => pageNumberClickHandler(evt, page)}
                  >{page}</a>
                </li>
              );
            })
          } 
        </ul>
        <div className='pagination-controls'>
          <button 
            className='pagination-previous-page'
            disabled={ paginatedUsers?.currentPage === DEFAULT_PAGE_NUMBER }
            onClick={pagePreviousClickHandler}
          ></button>
          <button 
            className='pagination-next-page'
            disabled={ paginatedUsers?.currentPage === paginatedUsers?.totalPages }
            onClick={pageNextClickHandler}
          ></button>
        </div>
      </div>
    </section>
  );
}

export default Pagination;