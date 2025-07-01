'use client';

import { ApiRoute, ApiSettings, Hobby, Meal, MusicStyle, USERT_MAX_LEVEL, USERT_MIN_LEVEL, Vehicle } from '@/src/const';
import './filter-by-tripmates.scss';
import { useState, type JSX } from 'react';
import FilterDropdown from '../filter-dropdown/filter-dropdown';
import FilterInputsList from '../checkbox-list/filter-inputs-list';
import CustomSlider from '../custom-slider/custom-slider';

function FilterByTripmates(): JSX.Element {
  const [level, setLevel] = useState({minLevel: USERT_MIN_LEVEL, maxLevel: USERT_MAX_LEVEL});
  const formSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
  };

  const levelSliderChangeHandler = (_evt: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
       setLevel({minLevel: newValue.at(0) ?? level.minLevel, maxLevel: newValue.at(1) ?? level.maxLevel});
    }   
  };

  const levelInputChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    evt.currentTarget.classList.add('is-typing');
    if (!(parseInt(evt.currentTarget.value, 10) > USERT_MAX_LEVEL || parseInt(evt.currentTarget.value, 10) < USERT_MIN_LEVEL)) {
        setLevel({
          ...level, 
          [evt.currentTarget.name]: parseInt(evt.currentTarget.value, 10) 
        })
    }    
  }

  const levelInputBlurHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove('is-typing');
    if (evt.currentTarget.name === 'minLevel' && parseInt(evt.currentTarget.value, 10) > level.maxLevel) {
        setLevel({
          ...level, 
          minLevel: level.maxLevel 
        })
    }
    
    if (evt.currentTarget.name === 'maxLevel' && parseInt(evt.currentTarget.value, 10) < level.minLevel) {
        setLevel({
          ...level, 
          maxLevel: level.minLevel 
        })
    }
  }

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
            <div className='filter-level-inputs'>
              <label className='filter-level-label'>
                <input 
                  className="filter-level-input filter-min-level" 
                  type="number" 
                  min={USERT_MIN_LEVEL} 
                  max={USERT_MAX_LEVEL} 
                  value={level.minLevel}
                  name='minLevel' 
                  onChange={levelInputChangeHandler}
                  onBlur={levelInputBlurHandler}  
                />
                <span className='visually-hidden'>Введите минимальный уровень</span>
              </label>
              <label className='filter-level-label'>
                <input 
                  className="filter-level-input filter-max-level"
                  name='maxLevel' 
                  type="number" 
                  min={USERT_MIN_LEVEL} 
                  max={USERT_MAX_LEVEL} 
                  value={level.maxLevel}
                  onChange={levelInputChangeHandler}
                  onBlur={levelInputBlurHandler}  
                />
                <span className='visually-hidden'>Введите максимальный уровень</span>
              </label>
            </div>
            <CustomSlider 
              min={USERT_MIN_LEVEL} 
              max={USERT_MAX_LEVEL} 
              value={[level.minLevel, level.maxLevel]}
              ariaLabel=''
              valueLabelDisplay='off'
              onChange={levelSliderChangeHandler}
              barWidth='192px'
              barHeight='3px'
              mainColor='#1d2e5b'
              railColor='rgba(color: #1D2E5B, alpha: 0.2)'
              tickSize='13px'
            />
        </FilterDropdown>
        <button className='tripmates-filter-submit-btn' type='submit'>Показать</button>
        
        
      </form>
    </section>
  );
}

export default FilterByTripmates;