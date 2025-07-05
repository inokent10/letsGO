'use client';

import './filter-country-list.scss';

import { useAppSelector } from '@/src/store/hooks';
import { getCountries } from '@/src/store/tripmates-process/selectors';
import { getCountryDictionary } from '@/src/utils/common';
import React, { JSX } from 'react';

function FilterCountryList(): JSX.Element {  
  const countries = useAppSelector(getCountries); 

  return ( 
    <ul className='filter-countries-list clear-list'>
      {   
        countries &&
               getCountryDictionary(countries).map(([letter, filteredCountries], index) => (
                 <React.Fragment key={`letter-${letter}-${index}`}>
                   {  
                     filteredCountries.length > 0 &&
                    <li className='filter-country-letter-box'>
                      <span className='filter-country-letter-title'>{letter}</span>
                      <ul className='filter-country-letter-list clear-list'>                      
                        { 
                          filteredCountries.map((country) => (
                            <li className='country-letter-list-item' key={`country-${country.name}-${country.location}`}>
                              <label htmlFor='filter-country-label'>
                                <input className='filter-country-input visually-hidden' type='chekbox' name='country' value={country.name} />
                                <span>{country.name}</span>
                              </label>
                            </li>   
                          ))
                        }
                      
                      </ul>
                    </li>
                   }
                 </React.Fragment>
                 
               ))
      }
    </ul>
  );
}

export default FilterCountryList;