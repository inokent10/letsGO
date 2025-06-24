'use client';

import { useAppSelector, useAppStore } from '@/src/store/hooks';
import { getCountries } from '@/src/store/tripmates-process/selectors';
import { uploadCountries } from '@/src/store/tripmates-process/thunk-actions';
import Link from 'next/link';
import { useEffect } from 'react';


function FormPage() {
  const countries = useAppSelector(getCountries);
  const store = useAppStore();

  useEffect(() => {
    if (!countries) {
      store.dispatch(uploadCountries());
    }
  });

  return (
    <div>
      <h1>FORM STEP 1</h1>
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
      <Link href='/form/step2'>
        <button>Это главная страница приложения на asds</button>
      </Link>
    </div>
  );
}

export default FormPage;