'use client';

import { ApiRoute, ApiSettings, Hobby, Meal, MusicStyle, USERT_MAX_LEVEL, USERT_MIN_LEVEL, Vehicle } from '@/src/const';
import './filter-by-tripmates.scss';
import { useRef, useState, type JSX } from 'react';
import FilterDropdown from '../filter-dropdown/filter-dropdown';
import FilterInputsList from '../checkbox-list/filter-inputs-list';
import CustomSlider from '../custom-slider/custom-slider';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { getQuery } from '@/src/store/tripmates-process/selectors';
import { uploadMoreUserCards } from '@/src/store/tripmates-process/thunk-actions';
import { Query } from '@/src/types/query.interface';
import { saveQuery } from '@/src/store/tripmates-process/tripmates-process';


function FilterByTripmates(): JSX.Element {
  const [level, setLevel] = useState({ levelMin: USERT_MIN_LEVEL, levelMax: USERT_MAX_LEVEL });
  const formRef = useRef<HTMLFormElement | null>(null);
  const query = useAppSelector(getQuery);
  const dispatch = useAppDispatch();
  

  const formSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const queryForm: Query = {
        levelMax: parseInt(formData.get('levelMax') as string, 10),
        levelMin: parseInt(formData.get('levelMin') as string, 10),
      };
      if (formData.getAll('hobby') && formData.getAll('hobby').length > 0) {
        queryForm.hobby = formData.getAll('hobby') as string[];
      }
      if (formData.getAll('music') && formData.getAll('music').length > 0) {
        queryForm.music = formData.getAll('music') as string[];
      }
      if (formData.getAll('transport') && formData.getAll('transport').length > 0) {        
        queryForm.transport = formData.getAll('transport') as string[];
      }
      if (formData.getAll('meal')) {
        queryForm.meal = formData.get('meal') as string;
      }
      dispatch(uploadMoreUserCards({ ...query, ...queryForm }));
      dispatch(saveQuery({ ...query, ...queryForm }));
    }
    
  };

  const levelSliderChangeHandler = (_evt: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      setLevel({ levelMin: newValue.at(0) ?? level.levelMin, levelMax: newValue.at(1) ?? level.levelMax });
    }   
  };

  const levelInputChangeHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    evt.currentTarget.classList.add('is-typing');
    if (!(parseInt(evt.currentTarget.value, 10) > USERT_MAX_LEVEL || parseInt(evt.currentTarget.value, 10) < USERT_MIN_LEVEL)) {
      setLevel({
        ...level, 
        [evt.currentTarget.name]: parseInt(evt.currentTarget.value, 10), 
      });
    }    
  };

  const levelInputBlurHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove('is-typing');
    if (evt.currentTarget.name === 'levelMin' && parseInt(evt.currentTarget.value, 10) > level.levelMax) {
      setLevel({
        ...level, 
        levelMin: level.levelMax, 
      });
    }
    
    if (evt.currentTarget.name === 'levelMax' && parseInt(evt.currentTarget.value, 10) < level.levelMin) {
      setLevel({
        ...level, 
        levelMax: level.levelMin, 
      });
    }
  };

  return (
    <section className='tripmates-filter-container'>
      <h2 className='tripmates-filter-title font-large'>Подберите идеального попутчика</h2>
      <form 
        className='tripmates-filter-form' 
        method='get' 
        action={`${ApiSettings.BASE_URL}${ApiRoute.CATALOG}`}
        ref={formRef}
        onSubmit={formSubmitHandler}
      >
        
        <FilterDropdown title='Хобби'>
          <FilterInputsList name='hobby' values={Object.values(Hobby)} type='checkbox' />
        </FilterDropdown>
        <FilterDropdown title='Музыка'>
          <FilterInputsList name='music' values={Object.values(MusicStyle)} type='checkbox' />
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
                className='filter-level-input filter-min-level' 
                type='number' 
                min={USERT_MIN_LEVEL} 
                max={USERT_MAX_LEVEL} 
                value={level.levelMin}
                name='levelMin' 
                onChange={levelInputChangeHandler}
                onBlur={levelInputBlurHandler}  
              />
              <span className='visually-hidden'>Введите минимальный уровень</span>
            </label>
            <label className='filter-level-label'>
              <input 
                className='filter-level-input filter-max-level'
                name='levelMax' 
                type='number' 
                min={USERT_MIN_LEVEL} 
                max={USERT_MAX_LEVEL} 
                value={level.levelMax}
                onChange={levelInputChangeHandler}
                onBlur={levelInputBlurHandler}  
              />
              <span className='visually-hidden'>Введите максимальный уровень</span>
            </label>
          </div>
          <CustomSlider 
            min={USERT_MIN_LEVEL} 
            max={USERT_MAX_LEVEL} 
            value={[level.levelMin, level.levelMax]}
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