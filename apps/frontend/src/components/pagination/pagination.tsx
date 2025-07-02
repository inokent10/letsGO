'use client';

import { useAppSelector } from '@/src/store/hooks';
import './pagination.scss';

import type { JSX } from 'react';
import { getPaginatedUsers } from '@/src/store/tripmates-process/selectors';
import classNames from 'classnames';

function Pagination(): JSX.Element {
  const paginatedUsers = useAppSelector(getPaginatedUsers);
    
  return (
    <section className='catalog-pagination'>
      <button className='pagination-more-button' type='button'>Показать ещё</button>
      <div className='pagination-pages'>
        <ul className='pages-list clear-list'>
          {
            paginatedUsers?.totalPages 
            &&
            Array.from({ length: paginatedUsers.totalPages }, (_val, index) => (index + 1)).map((page) => (
              <li className='page-item'>
                <a className={classNames({
                  'page-link': true,
                  'current-page': page === paginatedUsers.currentPage,
                })
                } 
                href='#'
                >{page}</a>
              </li>
            ))
          }
        </ul>
        <div className='pagination-controls'>
          <button className='pagination-previous-page'></button>
          <button className='pagination-next-page'></button>
        </div>
      </div>
    </section>
  );
}

export default Pagination;