'use client';
import { DEFAULT_PAGE_NUMBER, DEFAULT_CARDS_PER_PAGE } from '@/src/const';
import { useAppSelector, useAppStore } from '@/src/store/hooks';
import { getUsers } from '@/src/store/tripmates-process/selectors';
import { uploadUserCards } from '@/src/store/tripmates-process/thunk-actions';
import Link from 'next/link';
import { useEffect } from 'react';

function CatalogPage() {
  const users = useAppSelector(getUsers);
  const store = useAppStore();

  useEffect(() => {
    if (!users) {
      store.dispatch(uploadUserCards({ page: DEFAULT_PAGE_NUMBER, limit: DEFAULT_CARDS_PER_PAGE, count: DEFAULT_CARDS_PER_PAGE }));
    }
  });

  return (
    <div>
      <h1>I'm Catalog page</h1>

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
      <Link href='/'>
        <button>НАЗАД</button>
      </Link>
    </div>
  );
}

export default CatalogPage;