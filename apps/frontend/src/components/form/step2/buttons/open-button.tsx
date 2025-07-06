import { Country } from '@/src/types/country.interface';
import styles from './buttons.module.scss';
import FlagBox from '../../flag-box/flag-box';

interface OpenButtonProps {
    selectedCountry: Country | undefined;
    handleToggleOpen: () => void;
    handleRemoveCountry: () => void;
    placeholder: string;
    currentPoint: string;
    hasNextItem: boolean;
    isLast: boolean;
    position: number;
}

function OpenButton({ 
  selectedCountry,
  handleToggleOpen,
  handleRemoveCountry,
  placeholder,
  currentPoint,
  hasNextItem,
  isLast,
  position,
}: OpenButtonProps) {
  
  return (
    <div className={styles.inputContainer}>
      <button 
        className={styles.input}
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

      <FlagBox 
        countryName={selectedCountry ? selectedCountry.name : ''}
        handleRemoveCountry={handleRemoveCountry}
        currentPoint={currentPoint}
        hasNextItem={hasNextItem}
        isLast={isLast}
        position={position}
      />
    </div>
  );
};

export default OpenButton;