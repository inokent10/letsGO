import styles from './flag-box.module.scss';
import { POINTS } from '../form-const';
import cn from 'classnames';

interface FlagBoxProps {
    countryName: string;
    position: number;
    handleRemoveCountry?: () => void;
    currentPoint: string
    hasNextItem: boolean;
    isLast: boolean;
}

function FlagBox({ countryName, position, handleRemoveCountry, currentPoint, hasNextItem, isLast }: FlagBoxProps) {
  const flagContainerClassed = cn({
    [styles.flagContainerStepTwo]: currentPoint === POINTS[1],
    [styles.flagContainerStepThre]: currentPoint === POINTS[2] && !(currentPoint === POINTS[1]),
  }, {
    [styles.hasConnection]: hasNextItem,
    [styles.isLast]: isLast,
  });

  return (
    <div className={flagContainerClassed}>
      {currentPoint === POINTS[2] && 
        <label htmlFor={`${position}`}>{countryName}</label>
      }

      {
        countryName !== '' && 
          <div className={styles.flagBox}>
            <div className={styles.marker}></div>
            <img 
              className={styles.flagImage}
              src={'https://flagcdn.com/un.svg'} 
              alt={`Флаг ${countryName}`}
            />
          </div>
      }

      {currentPoint === POINTS[1] && 
      <div className={`${countryName === '' ? styles.notSelected : ''}`}>
        { countryName === '' && <div className={`${styles.notSelectedMarker}`}></div> }
        <button
          className={styles.removeButton}
          onClick={handleRemoveCountry}
          type='button'
          title='Удалить выбранную страну'
        >
          <svg 
            className={styles.closeIcon}
            width='26px' 
            height='28px' 
            viewBox='0 0 64 64' 
            xmlns='http://www.w3.org/2000/svg'
          >
            <line x1='16' y1='16' x2='48' y2='48'/>
            <line x1='48' y1='16' x2='16' y2='48'/>
          </svg>
        </button>
      </div>
      }
    </div>
  );
}

export default FlagBox;