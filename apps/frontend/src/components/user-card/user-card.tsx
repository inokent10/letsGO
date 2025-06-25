
import { Vehicle } from '@/src/const';
import './user-card.scss';
import type { JSX } from 'react';

function UserCard(): JSX.Element {
  return (
    <div className='user-card'>
      <img className='card-image' src='/demin-desktop 2.jpg'/>
      <span className='card-name is-offline'>
        Петя Демин
      </span>
      <ul className='card-tags'>
        <li>#бургер</li>
        <li>#бар</li>
        <li>#футбол</li>
        <li>#концерт</li>
        <li>#крафт</li>
      </ul>
      <ul className='card-countries'>
        <li>бельгия</li>
        <li>чехия</li>
      </ul>
      <div className='card-buttons'>
        <button className='card-invite-btn' type='button'>Позвать!</button>
        <button className='card-like-btn' type='button'>Позвать!</button>
        <span className='card-likes-count'>1500</span>
      </div>
      <ul className='card-transport'>
        <li> 
          <span className='visually-hidden'>{Vehicle.AIRPLANE}</span>
        </li>
        <li> 
          <span className='visually-hidden'>{Vehicle.CAR}</span>
        </li>
        <li> 
          <span className='visually-hidden'>{Vehicle.BIKE}</span>
        </li>
        <li> 
          <span className='visually-hidden'>{Vehicle.NONE}</span>
        </li>
        <div className='card-user-level'>
          <span className='level-number'>80</span>
          <span className='level-lable'>level</span>
        </div>
      </ul>
    </div>

  );
}

export default UserCard;