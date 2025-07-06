'use client';

import { useAppSelector } from '@/src/store/hooks';
import './user-cards-list.scss';
import {  type JSX } from 'react';
import { getUsers } from '@/src/store/tripmates-process/selectors';

import UserCard from '../user-card/user-card';

function UserCardsList(): JSX.Element {
  const users = useAppSelector(getUsers);

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
      {
        !users || users.length === 0 
        &&
        <p className='empty-user-cards font-large'>Нет данных, удовлетворяющих запрашиваемым условиям</p>
      }    
      
    </section>
  );
}

export default UserCardsList;