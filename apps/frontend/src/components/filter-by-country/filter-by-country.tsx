import './filter-by-country.scss';
import { Continent } from '@/src/const';
import type { JSX } from 'react';

function FilterByCountry(): JSX.Element {
  return (
    <section className='country-filter'>
      <form>
        <h3>Фильтрация по странам:</h3>
        <label>{Continent.EROUPE}<input type='checkbox' name='continent' value={Continent.EROUPE} /></label>
        <label>{Continent.ASIA}<input type='checkbox' name='continent' value={Continent.ASIA} /></label>
        <label>{Continent.AMERICA}<input type='checkbox' name='continent' value={Continent.AMERICA} /></label>
        <label>{Continent.ISLANDS}<input type='checkbox' name='continent' value={Continent.ISLANDS} /></label>        
            
        <ul className='countries-list'></ul>
      </form>
    </section>
  );
}

export default FilterByCountry;