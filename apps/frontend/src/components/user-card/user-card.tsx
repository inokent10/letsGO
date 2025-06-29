
import { flagIcons, Vehicle } from '@/src/const';
import './user-card.scss';
import type { JSX } from 'react';
import { ajustUserLevel, getRandomElement } from '@/src/utils/common';

function UserCard(): JSX.Element {  

  return (
    <div className='user-card'>
      <img className='card-image' src='/img/demin-desktop 2.jpg' width={285} height={285} />
      <a className='card-name is-offline font-large' href='#'>
        Петя Демин
      </a>
      <p className='card-tags'>
        #бургер #бар #футбол #концерт #крафт
      </p>
      <ul className='card-countries clear-list'>
        <li className='card-country-item'>
          <img className='card-country-flag' src={`/img/flags/${getRandomElement(flagIcons)}`} width={35} height={24} />
          <span className='card-country-name'>бельгия</span>
        </li>
        <li className='card-country-item'>
          <img className='card-country-flag' src={`/img/flags/${getRandomElement(flagIcons)}`} width={35} height={24} />
          <span className='card-country-name'>чехия</span>
        </li>
      </ul>
      <div className='card-buttons'>
        <button className='card-invite-btn card-btn' type='button'>Позвать!</button>
        <button className='card-like-btn card-btn' type='button'>
          <svg className='like-btn-icon' width='20' height='19' viewBox='0 0 20 19' xmlns='http://www.w3.org/2000/svg'>
            <path d="M5 0.25C7.7625 0.25 10 2.44375 10 5.15C10 2.44375 12.2375 0.25 15 0.25C17.7625 0.25 20 2.44375 20 5.15C20 9.22875 15.9575 10.6675 10.49 17.16C10.4298 17.2313 10.3548 17.2886 10.2701 17.3279C10.1855 17.3672 10.0933 17.3876 10 17.3876C9.90668 17.3876 9.81449 17.3672 9.72986 17.3279C9.64523 17.2886 9.57019 17.2313 9.51 17.16C4.0425 10.6675 0 9.22875 0 5.15C0 2.44375 2.2375 0.25 5 0.25Z" />
          </svg>
          <span className='visually-hidden'>Поставить лайк</span>
        </button>
        <span className='card-likes-count'>1500</span>
      </div>
      <ul className='card-transport clear-list'>
        <li className='card-transport-item card-transport-airplane is-active'> 
          <span className='visually-hidden'>{Vehicle.AIRPLANE}</span>
        </li>
        <li className='card-transport-item card-transport-car is-active'> 
          <span className='visually-hidden'>{Vehicle.CAR}</span>
        </li>
        <li className='card-transport-item card-transport-bike'> 
          <span className='visually-hidden'>{Vehicle.BIKE}</span>
        </li>
        <li className='card-transport-item card-transport-footstep is-active'> 
          <span className='visually-hidden'>{Vehicle.NONE}</span>
        </li>
      </ul>
      <div className='card-user-level'>
        <svg className="card-level-bar" width="60" height="60" viewBox='0 0 60 60' xmlns="http://www.w3.org/2000/svg">
          <circle 
            className='circle'
            r="28.5" 
            cx="30" 
            cy="30" 
            fill="transparent"
            strokeDasharray={Math.PI*2*28.5}
            strokeDashoffset={0}            
          />
          <circle 
            className='circle bar'
            r="27" 
            cx="30" 
            cy="30" 
            fill="transparent"
            strokeDasharray={Math.PI*2*28.5}
            strokeDashoffset={((100-ajustUserLevel(80))/100)*Math.PI*2*28.5}          
          />
        </svg>
        <span className='card-level-number'>80</span>
        <span className='card-level-label'>level</span>
      </div>      
    </div>

  );
}

export default UserCard;