import './catalog.scss';

import FilterByCountry from '@/src/components/filter-by-country/filter-by-country';
import FilterByTripmates from '@/src/components/filter-by-tripmates/filter-by-tripmates';
import UserCardsList from '@/src/components/user-cards-list/user-cards-list';
import type { JSX } from 'react';

function CatalogPage(): JSX.Element {
  return (
    <div className='catalog-container'>
      <h1 className='visually-hidden'>Каталог попутчиков</h1>
      <FilterByCountry />
      <UserCardsList />
      <FilterByTripmates />
    </div>
  );
}

export default CatalogPage;