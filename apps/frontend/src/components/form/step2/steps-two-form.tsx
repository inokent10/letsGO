'use client';
import { Country } from '@/src/types/country.interface';
import styles from '../form-steps.module.scss';
import Points from '../points/points';
import SelectCountryInput from './inputs/select-country-input';
import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';
import { ItineraryBreakpoint } from '@/src/types/itinerary-breakpoint.interface';

interface StepTwoFormProps {
  currentPoint: string;
  countries: Country[] | null;
  updateFormData: (data: Partial<ItineraryPlan>) => void;
  formData: ItineraryPlan;
};

function StepTwoForm({ currentPoint, countries, updateFormData, formData }: StepTwoFormProps ) {
  const onCountriesChange = (checkCountries: ItineraryBreakpoint[]) => {
    updateFormData({
      itinerary: checkCountries,
    });
  };

  return (
    <>
      <div className={styles.titleWrapper}>
        <div className={styles.titleBox}>
          <h1 className={styles.stepTitle}>Шаг 2. Маршрут</h1>
          <p className={styles.stepDescription}>
        Укажите страны, которые вы хотели бы посетить.<br/>
        Это может быть одна или сразу несколько.
          </p>
        </div>

        <Points activePoint={currentPoint} />
      </div>

      <SelectCountryInput 
        onCountriesChange={onCountriesChange}
        countries={countries}
        currentPoint={currentPoint}
        initialItinerary={formData.itinerary}
      />
    </>
  );
};

export default StepTwoForm;