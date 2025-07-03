'use client';

import './filter-by-country.scss';

import { Continent } from '@/src/const';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { getQuery } from '@/src/store/tripmates-process/selectors';
import { uploadPageUserCards } from '@/src/store/tripmates-process/thunk-actions';
import { saveQuery } from '@/src/store/tripmates-process/tripmates-process';
import { useState, type JSX } from 'react';
import FilterCountryList from '../filter-country-list/filter-country-list';

function FilterByCountry(): JSX.Element {
  const query = useAppSelector(getQuery);
  const [continents, setContinents] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const continentChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    const newContinents: string[] = (continents.includes(evt.currentTarget.value)) ? continents.filter((item) => item !== evt.currentTarget.value) : [...continents, evt.currentTarget.value];

    setContinents(newContinents);
    
    dispatch(uploadPageUserCards({ 
      ... query, 
      continent: (newContinents.length === 0) ? undefined : newContinents, 
      country: undefined, 
    }));
    dispatch(saveQuery({ 
      ... query, 
      continent: (newContinents.length === 0) ? undefined : newContinents, 
      country: undefined, 
    }));
  };

  return (
    <section className='country-filter'>
      <form className='country-filter-form'>
        <h3 className='country-filter-title'>Фильтрация по странам:</h3>
        <fieldset className='country-filter-continents'>
          <label className='filter-continent-label'>            
            <input 
              className='filter-continent-input visually-hidden' 
              type='checkbox' 
              name='continent' 
              value={Continent.EROUPE}
              onChange={continentChangeHandler} />
            <span>{Continent.EROUPE}</span>
          </label>
          <label className='filter-continent-label'>            
            <input 
              className='filter-continent-input visually-hidden' 
              type='checkbox' 
              name='continent' 
              value={Continent.ASIA}
              onChange={continentChangeHandler} />
            <span>{Continent.ASIA}</span>
          </label>
          <label className='filter-continent-label'>
            
            <input 
              className='filter-continent-input visually-hidden' 
              type='checkbox' 
              name='continent' 
              value={Continent.AMERICA}
              onChange={continentChangeHandler} />
            <span>{Continent.AMERICA}</span>
          </label>
          <label className='filter-continent-label'>            
            <input 
              className='filter-continent-input visually-hidden' 
              type='checkbox' 
              name='continent' 
              value={Continent.ISLANDS}
              onChange={continentChangeHandler} />
            <span>{Continent.ISLANDS}</span>
          </label>  
        </fieldset>              
        
        <FilterCountryList />
        
      </form>
    </section>
  );
}

export default FilterByCountry;