'use client';
import styles from './select-country-inputs.module.scss';
import { useState } from 'react';
import { Country } from '@/src/types/country.interface';
import CountryDropdown from './country-dropdown';
import { ItineraryBreakpoint } from '@/src/types/itinerary-breakpoint.interface';

interface SelectCountryInputProps {
    onCountriesChange: (countries: ItineraryBreakpoint[]) => void;
    countries: Country[] | null;
}

function SelectCountryInput({ onCountriesChange, countries }: SelectCountryInputProps) {
  const [selectedBreakpoints, setSelectedBreakpoints] = useState<(ItineraryBreakpoint | null)[]>([null]);
  const [isOpenStates, setIsOpenStates] = useState<boolean[]>([false]);

  const handleCountrySelect = (country: Country, inputIndex: number) => {
    const newBreakpoints: (ItineraryBreakpoint | null)[] = [...selectedBreakpoints];
    newBreakpoints[inputIndex] = {
      country: country.name,
      position: inputIndex + 1,
    };
    
    if (newBreakpoints.every(bp => bp !== null)) {
      (newBreakpoints as (ItineraryBreakpoint | null)[]).push(null);
      setIsOpenStates(prev => [...prev, false]);
    }
    setSelectedBreakpoints(newBreakpoints);
    
    const filledBreakpoints = newBreakpoints.filter(bp => bp !== null) as ItineraryBreakpoint[];
    onCountriesChange?.(filledBreakpoints);
  };

  const handleCountryRemove = (inputIndex: number) => {
    const newBreakpoints = [...selectedBreakpoints];
    
    newBreakpoints[inputIndex] = null;
    
    while (newBreakpoints.length > 1 && newBreakpoints[newBreakpoints.length - 1] === null) {
      newBreakpoints.pop();
    }
    
    const hasAnySelected = newBreakpoints.some(bp => bp !== null);
    if (!hasAnySelected && newBreakpoints.length === 0) {
      newBreakpoints.push(null);
    }
    
    if (newBreakpoints.length === 0) {
      newBreakpoints.push(null);
    }
    
    const updatedBreakpoints = newBreakpoints.map((bp, index) => 
      bp ? { ...bp, position: index + 1 } : null,
    );
    
    setSelectedBreakpoints(updatedBreakpoints);
    
    setIsOpenStates(prev => prev.slice(0, updatedBreakpoints.length));
    
    const filledBreakpoints = updatedBreakpoints.filter(bp => bp !== null) as ItineraryBreakpoint[];
    onCountriesChange?.(filledBreakpoints);
  };

  const handleOpenClose = (index: number, isOpen: boolean) => {
    setIsOpenStates(prev => {
      const updated = [...prev];
      updated[index] = isOpen;
      return updated;
    });
  };

  const getAvailableCountries = (currentInputIndex: number) => {
    const selectedCountryNames = selectedBreakpoints
      .map((bp, index) => index !== currentInputIndex ? bp?.country : null)
      .filter(Boolean);
    return countries?.filter(country => !selectedCountryNames.includes(country.name));
  };

  const getSelectedCountry = (inputIndex: number): Country | undefined => {
    const breakpoint = selectedBreakpoints[inputIndex];
    if (!breakpoint) return undefined;
    return countries?.find(country => country.name === breakpoint.country);
  };
  
  return (
    <div className={styles.container}>
      {selectedBreakpoints.map((breakpoint, index) => (
        <CountryDropdown
          key={index}
          countries={getAvailableCountries(index)}
          selectedCountry={getSelectedCountry(index)}
          onSelect={(country) => handleCountrySelect(country, index)}
          onRemove={() => handleCountryRemove(index)}
          placeholder={index === 0 ? 'Выберите страну' : 'Добавить еще страну'}
          position={index + 1}
          isOpen={isOpenStates[index] || false}
          onOpenClose={(isOpen) => handleOpenClose(index, isOpen)}
        />
      ))}
    </div>
  );
}

export default SelectCountryInput;