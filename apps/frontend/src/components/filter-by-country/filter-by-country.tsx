'use client';

import './filter-by-country.scss';

import { Continent } from '@/src/const';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { getCountries, getQuery } from '@/src/store/tripmates-process/selectors';
import { uploadPageUserCards } from '@/src/store/tripmates-process/thunk-actions';
import { saveQuery } from '@/src/store/tripmates-process/tripmates-process';
import { useEffect, useState, type JSX } from 'react';
import FilterCountryList from '../filter-country-list/filter-country-list';
import { Country } from '@/src/types/country.interface';

function FilterByCountry(): JSX.Element {
  const query = useAppSelector(getQuery);
  const countries = useAppSelector(getCountries); 
  const [continents, setContinents] = useState<string[]>([]);
  const [isRolledUp, setIsRolledUp] = useState<boolean>(true);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const dispatch = useAppDispatch();

  const countryChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {    
    if (evt.currentTarget.checked && countries) {
      const newCountry = countries?.filter((country) => country.name === evt.currentTarget.value);
      setSelectedCountries([...selectedCountries, ...newCountry]);
    } else {
      setSelectedCountries(selectedCountries.filter((country) => country.name !== evt.currentTarget.value));
    }
  };

  const continentChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {  
    if (isRolledUp && continents.includes(evt.currentTarget.value)) {
      setIsRolledUp(false);
      return;
    }

    let newContinents: string[];

    if (continents.includes(evt.currentTarget.value)) {
      newContinents = continents.filter((item) => item !== evt.currentTarget.value);
      setSelectedCountries(selectedCountries.filter((country) => country.location !== evt.currentTarget.value));
    } else {
      newContinents = [...continents, evt.currentTarget.value];
    }
    
    setContinents(newContinents);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (newContinents.length > 0) ? setIsRolledUp(false) : setIsRolledUp(true);
  };

  useEffect(() => {
    if (query.country && countries) {
      const itineraryCountries = countries.filter((country) => query.country?.includes(country.name));
      setSelectedCountries(itineraryCountries);
      setContinents(itineraryCountries.map((country) => country.location));
    }
  }, [countries, query.country]);

  useEffect(() => {
    if (selectedCountries.length === 0) {
      dispatch(uploadPageUserCards({ 
        ... query, 
        continent: (continents.length === 0) ? undefined : continents, 
        country: undefined, 
      }));

      dispatch(saveQuery({ 
        ... query, 
        continent: (continents.length === 0) ? undefined : continents, 
        country: undefined, 
      }));
    } else {
      const selectedCountriesNames = selectedCountries.map((country) => country.name);
      dispatch(uploadPageUserCards({ 
        ... query, 
        continent: undefined, 
        country: selectedCountriesNames, 
      }));

      dispatch(saveQuery({ 
        ... query, 
        continent: undefined, 
        country: selectedCountriesNames, 
      }));
    }
    
  }, [continents, dispatch, query, selectedCountries]);

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
              onChange={continentChangeHandler}
              checked={continents.includes(Continent.EROUPE)}
            />
            <span>{Continent.EROUPE}</span>
          </label>
          <label className='filter-continent-label'>            
            <input 
              className='filter-continent-input visually-hidden' 
              type='checkbox' 
              name='continent' 
              value={Continent.ASIA}
              onChange={continentChangeHandler}
              checked={continents.includes(Continent.ASIA)}
            />
            <span>{Continent.ASIA}</span>
          </label>
          <label className='filter-continent-label'>
            
            <input 
              className='filter-continent-input visually-hidden' 
              type='checkbox' 
              name='continent' 
              value={Continent.AMERICA}
              onChange={continentChangeHandler} 
              checked={continents.includes(Continent.AMERICA)}
            />
            <span>{Continent.AMERICA}</span>
          </label>
          <label className='filter-continent-label'>            
            <input 
              className='filter-continent-input visually-hidden' 
              type='checkbox' 
              name='continent' 
              value={Continent.ISLANDS}
              onChange={continentChangeHandler} 
              checked={continents.includes(Continent.ISLANDS)}
            />
            <span>{Continent.ISLANDS}</span>
          </label>  
        </fieldset>
        {
          !isRolledUp &&
          continents.length > 0 &&
          countries &&
          <FilterCountryList
            selectedCountries={selectedCountries.map((country) => country.name)}
            countries={countries} 
            continents={continents}
            onCountryChange={countryChangeHandler}
          />
        }       

        {
          !isRolledUp &&
          <button 
            className='country-filter-rollup-button'
            onClick={() => setIsRolledUp(true)}
          >
            <span className='rollup-button-text'>Свернуть</span>
          </button>
        }
        
        
      </form>
    </section>
  );
}

export default FilterByCountry;