import { useState, useRef, useEffect } from 'react';
import styles from './select-country-input.module.scss';
import AlphabetFilter from './alphabet-filter';
import { Country } from '@/src/types/country.interface';
import OpenButton from '../buttons/open-button';
import CloseButton from '../buttons/close-button';
import SelectedCountryButton from '../buttons/selected-button';

interface CountryDropdownProps {
  countries: Country[] | undefined;
  selectedCountry?: Country;
  onSelect: (country: Country) => void;
  onRemove: () => void;
  placeholder?: string;
  currentPoint: string;
  position: number;
  isOpen: boolean;
  onOpenClose: (arg: boolean) => void;
  hasNextItem: boolean;
  isLast: boolean;
}

function CountryDropdown({ 
  countries, 
  selectedCountry, 
  onSelect, 
  onRemove,
  placeholder = 'Выберите страну',
  isOpen,
  onOpenClose,
  currentPoint,
  hasNextItem,
  isLast,
  position,
}: CountryDropdownProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onOpenClose(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCountries = countries?.filter(country => {
    const matchesSearch = country.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = !selectedLetter || country.name?.startsWith(selectedLetter);
    return matchesSearch && matchesLetter;
  });

  const handleCountrySelect = (country: Country) => {
    onSelect(country);
    onOpenClose(false);
    setSearchTerm('');
    setSelectedLetter('');
  };

  const handleToggleOpen = () => {
    onOpenClose(!isOpen);
  };

  const handleRemoveCountry = () => {
    onRemove();
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <OpenButton 
        handleToggleOpen={handleToggleOpen}
        handleRemoveCountry={handleRemoveCountry}
        placeholder={placeholder}
        selectedCountry={selectedCountry}
        currentPoint={currentPoint}
        hasNextItem={hasNextItem}
        isLast={isLast}
        position={position}
      />

      {isOpen && 
        (
          <div className={styles.dropdownContent}>
            <div className={styles.header}>
              <h3 className={styles.title}>ВЫБЕРИТЕ СТРАНУ</h3>
              <CloseButton 
                handleOpenClose={() => onOpenClose(false)}
                index={position}
              />
            </div>

            <div className={styles.countryBox}>
              <AlphabetFilter 
                selectedLetter={selectedLetter}
                onLetterSelect={setSelectedLetter}
              />

              <div className={styles.countriesList}>
                {filteredCountries?.map(country => (
                  <SelectedCountryButton 
                    key={country.name}
                    country={country}
                    handleCountrySelect={handleCountrySelect}
                  />
                ))}
              </div>
            </div>
          </div>
        ) 
      }
    </div>
  );
}

export default CountryDropdown;