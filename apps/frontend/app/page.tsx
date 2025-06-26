'use client';

import { DEFAULT_CARDS_PER_PAGE, DEFAULT_PAGE_NUMBER } from '@/src/const';
import { useAppSelector, useAppStore } from '@/src/store/hooks';
import { getUsers } from '@/src/store/tripmates-process/selectors';
import { uploadUserCards } from '@/src/store/tripmates-process/thunk-actions';
import Link from 'next/link';
import { useEffect } from 'react';

function FormPage() {
  
  const users = useAppSelector(getUsers);
  const store = useAppStore();

  useEffect(() => {
    if (!users) {
      store.dispatch(uploadUserCards({ page: DEFAULT_PAGE_NUMBER, limit: DEFAULT_CARDS_PER_PAGE, count: DEFAULT_CARDS_PER_PAGE }));
    }
  });

  
  return (
    <div>
      <h1>FORM STEP 1</h1>
      {
        users &&
        <ol>
          {users.map((user, index) => {
            return (
              <li key={index}>{user.name}</li>
              
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