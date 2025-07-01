import { Country } from '@/src/types/country.interface';
import styles from './buttons.module.scss';

interface SelectedButtonProps {
    country: Country;
    handleCountrySelect: (country: Country) => void;
}

function SelectedCountryButton({ country, handleCountrySelect }: SelectedButtonProps) {
  return (
    <button
      key={country.name}
      className={styles.countryItem}
      onClick={() => handleCountrySelect(country)}
      type='button'
    >
      <span className={styles.name}>{country.name}</span>
    </button>
  );
};

export default SelectedCountryButton;