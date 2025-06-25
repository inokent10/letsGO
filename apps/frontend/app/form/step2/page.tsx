'use client';

import { useAppDispatch, useAppSelector, useAppStore } from '@/src/store/hooks';
import { getCountries } from '@/src/store/tripmates-process/selectors';
import { sendItineraryPlan, uploadCountries } from '@/src/store/tripmates-process/thunk-actions';
import { saveItineraryPlan } from '@/src/store/tripmates-process/tripmates-process';
import Link from 'next/link';
import { useEffect } from 'react';

function StepTwo() {
  const countries = useAppSelector(getCountries);
  const store = useAppStore();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!countries) {
      store.dispatch(uploadCountries());
    }
  });

  const saveItinerary = () => {
    const itineraryPlan = {
      tripmatesCount: 4,
      tripDuration: 2,
      isChildrenAccepted: true,
      startDate: '2025-06-26',
      finishDate: '2025-06-28',   
      itinerary: [
        {
          country: 'Spain',
          position: 1,
        },
        {
          country: 'France',
          position: 2,
        },
      ],
    };

    dispatch(saveItineraryPlan(itineraryPlan));

    dispatch(sendItineraryPlan(itineraryPlan)).then((res) => {
      console.log('Response', res);
    });
  };

  return (
    <div>
      <h1>FORM STEP 2</h1>
      {
        countries &&
        <ol>
          {countries.map((country, index) => {
            return (
              <li key={index}>{country.name}</li>
              
            );
          })}
        </ol>
      }
      <Link href='/form/step3'>
        <button onClick={saveItinerary}>Это главная вторая страница</button>
      </Link>
    </div>
  );
}

export default StepTwo;
