'use client';

import { useAppSelector, useAppStore } from '@/src/store/hooks';
import './user-cards-list.scss';
import { useEffect, type JSX } from 'react';
import { getUsers } from '@/src/store/tripmates-process/selectors';
import { uploadUserCards } from '@/src/store/tripmates-process/thunk-actions';
import { DEFAULT_CARDS_PER_PAGE, DEFAULT_PAGE_NUMBER } from '@/src/const';
import UserCard from '../user-card/user-card';

function UserCardsList(): JSX.Element {
  const users = useAppSelector(getUsers);
  const store = useAppStore();

  useEffect(() => {
    if (!users) {
      store.dispatch(uploadUserCards({ page: DEFAULT_PAGE_NUMBER, limit: DEFAULT_CARDS_PER_PAGE, count: DEFAULT_CARDS_PER_PAGE }));
    }
  });
  

  return (
    <section className='user-cards'>
      <h2 className='visually-hidden'>Список карточек попутчиков</h2>
      {
        users &&
        <ul className='user-cards-list'>
          {
            users.map((user) => (
              <li key={user.id}><UserCard user={user} /></li>
            ))
          }
        </ul>
      }
    
    </section>
  );
}

export default UserCardsList;