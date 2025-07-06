'use client';

import './filter-country-list.scss';
import { Country } from '@/src/types/country.interface';
import { getCountryDictionary } from '@/src/utils/common';
import React, { JSX } from 'react';

interface FilterCountryListProps {
  selectedCountries: string[],
  countries: Country[],
  continents: string[],
  onCountryChange: (evt: React.FormEvent<HTMLInputElement>) => void 
} 

function FilterCountryList({ selectedCountries, countries, continents, onCountryChange }: FilterCountryListProps): JSX.Element {    
  return ( 
    <ul className='filter-countries-list clear-list'>
      {   
        countries &&
               getCountryDictionary(countries, continents).map(([letter, filteredCountries], index) => (
                 <React.Fragment key={`letter-${letter}-${index}`}>
                   {  
                     filteredCountries.length > 0 &&
                    <li className='filter-country-letter-box'>
                      <span className='filter-country-letter-title'>{letter}</span>
                      <ul className='filter-country-letter-list clear-list'>                      
                        { 
                          filteredCountries.map((country) => (
                            <li 
                              className='country-letter-list-item' 
                              key={`country-${country.name}-${country.location}`}
                            >
                              <label className='filter-country-label'>
                                <input 
                                  className='filter-country-input visually-hidden' 
                                  type='checkbox' 
                                  name='country' 
                                  value={country.name}
                                  checked={selectedCountries.includes(country.name)}
                                  onChange={onCountryChange} 
                                />
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