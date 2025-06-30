'use client';

import { ApiRoute, ApiSettings, Hobby, Meal, MusicStyle, Vehicle } from '@/src/const';
import './filter-by-tripmates.scss';
import type { JSX } from 'react';
import FilterDropdown from '../filter-dropdown/filter-dropdown';
import FilterInputsList from '../checkbox-list/filter-inputs-list';

function FilterByTripmates(): JSX.Element {

  const formSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
  };

  return (
    <section className='tripmates-filter-container'>
      <h2 className='tripmates-filter-title font-large'>Подберите идеального попутчика</h2>
      <form 
        className='tripmates-filter-form' 
        method='get' 
        action={`${ApiSettings.BASE_URL}${ApiRoute.CATALOG}`}
        onSubmit={formSubmitHandler}
      >
        
        <FilterDropdown title='Хобби'>
          <FilterInputsList name='hobby' values={Object.values(Hobby)} type='checkbox' />
        </FilterDropdown>
        <FilterDropdown title='Музыка'>
          <FilterInputsList name='musicStyle' values={Object.values(MusicStyle)} type='checkbox' />
        </FilterDropdown>
        <FilterDropdown title='Еда'>
          <FilterInputsList name='meal' values={Object.values(Meal)} type='radio' />
        </FilterDropdown>
        <FilterDropdown title='Транспорт'>
          <FilterInputsList name='transport' values={Object.values(Vehicle)} type='checkbox' isTransport={true} />
        </FilterDropdown>
        <FilterDropdown title='Левел'>
          <div>
           
          </div>
        </FilterDropdown>
        <button className='tripmates-filter-submit-btn' type='submit'>Показать</button>
        
        
      </form>
    </section>
  );
}

export default FilterByTripmates;