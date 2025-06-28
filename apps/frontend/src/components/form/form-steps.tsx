'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { AppRoute } from '@/src/const';

import { POINTS } from './form-const';

import ButtonsForm from '../buttons/buttons-form';

import styles from './form-steps.module.scss';
import FormStepsOne from './step1/form-steps-one';
import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';
import { useAppSelector, useAppStore } from '@/src/store/hooks';
import { getCountries } from '@/src/store/tripmates-process/selectors';
import { uploadCountries } from '@/src/store/tripmates-process/thunk-actions';

const initialFormData: ItineraryPlan = {
  tripmatesCount: 0,
  tripDuration: 0,
  isChildrenAccepted: false,
  startDate: '',
  finishDate: '',
  itinerary: [],
};

function FormSteps() {
  const router = useRouter();
  const [formData, setFormData] = useState<ItineraryPlan>(initialFormData);
  const [currentPoint, setCurrentPoint] = useState(POINTS[0]);

  const currentIndex = POINTS.indexOf(currentPoint);
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === POINTS.length - 1;

  const store = useAppStore();
  const countries = useAppSelector(getCountries);
  useEffect(() => {
    if (!countries) {
      store.dispatch(uploadCountries());
    }
  });

  const updateFormData = (data: Partial<ItineraryPlan>) => {
    setFormData(prev => ({
      ...prev,
      ...data,
    }));
  };

  const onNextStep = () => {
    const nextIndex = (currentIndex + 1);
    setCurrentPoint(POINTS[nextIndex]);
  }; 

  const onPrevStep = () => {
    const prevIndex = (currentIndex - 1 );
    setCurrentPoint(POINTS[prevIndex]); 
  };
  
  const onSubmit = () => {
    router.push(AppRoute.CatalogPage);
  };
  
  return (
    <div className={styles.formLayout}>
      <div className={styles.formWrapper}>
        
        {
          isFirstStep &&
          <FormStepsOne
            updateFormData={updateFormData}
            formData={formData}
            currentPoint={currentPoint} 
          />
        }

        <ButtonsForm 
          handlerNextStep={onNextStep} 
          handlerPrevStep={onPrevStep} 
          handlerSubmit={onSubmit}
          firstStep={isFirstStep}
          lastStep={isLastStep}
        />

      </div>
    </div>
  );
}

export default FormSteps;