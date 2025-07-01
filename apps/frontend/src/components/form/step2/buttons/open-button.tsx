import { Country } from '@/src/types/country.interface';
import styles from './buttons.module.scss';

interface OpenButtonProps {
    selectedCountry: Country | undefined;
    handleToggleOpen: () => void;
    handleRemoveCountry: () => void;
    placeholder: string;
}

function OpenButton({ selectedCountry, handleToggleOpen, handleRemoveCountry, placeholder }: OpenButtonProps) {
  return (
    <div className={styles.inputContainer}>
      <button 
        className={`${styles.input} ${!selectedCountry ? styles.margin : ''}`}
        onClick={handleToggleOpen}
        type='button'
      >
        {selectedCountry ? (
          <div className={styles.selectedCountry}>
            <span className={styles.name}>{selectedCountry.name}</span>
          </div>
        ) : (
          <span className={styles.placeholder}>{placeholder}</span>
        )}
        <span className={styles.arrow}>
          {'▼'}
        </span>
      </button>

      {selectedCountry && (
        <>
          <div className={styles.flagContainer}>
            
            <div className={styles.marker}></div>
            <div className={styles.flagBox}>
              <img 
                src={'https://flagcdn.com/un.svg'} 
                alt={`Флаг ${selectedCountry.name}`}
                className={styles.flagImage}
              />
            </div>
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
        </>
      )}
    </div>
  );
};

export default OpenButton;