'use client';

import { ApiRoute, ApiSettings, Hobby, Meal, MusicStyle, Vehicle } from '@/src/const';
import './filter-by-tripmates.scss';
import { useState, type JSX } from 'react';
import FilterDropdown from '../filter-dropdown/filter-dropdown';
import FilterInputsList from '../checkbox-list/filter-inputs-list';
import CustomSlider from '../custom-slider/custom-slider';

function FilterByTripmates(): JSX.Element {
  const [level, setLevel] = useState<[number, number]>([30, 80]);
  const formSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
  };

  const levelSliderChangeHandler = (_evt: Event, newValue: number | number[]) => {
    setLevel(newValue as [number, number]);
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
            <CustomSlider 
              min={0}
              max={100}
              value={level}
              ariaLabel=''
              valueLabelDisplay='off'
              onChange={levelSliderChangeHandler}
              barWidth='192px'
              barHeight='3px'
              mainColor='#1d2e5b'
              railColor='rgba(color: #1D2E5B, alpha: 0.2)'
              tickSize='13px'
            />

            
          </div>
        </FilterDropdown>
        <button className='tripmates-filter-submit-btn' type='submit'>Показать</button>
        
        
      </form>
    </section>
  );
}

export default FilterByTripmates;