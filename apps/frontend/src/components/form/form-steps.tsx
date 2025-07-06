'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { AppRoute } from '@/src/const';
import { POINTS } from './form-const';
import styles from './form-steps.module.scss';

import ButtonsForm from '../buttons/buttons-form';
import StepsOneForm from './step1/steps-one-form';

import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';
import { useAppDispatch, useAppSelector, useAppStore } from '@/src/store/hooks';
import { getCountries } from '@/src/store/tripmates-process/selectors';
import { sendItineraryPlan, uploadCountries } from '@/src/store/tripmates-process/thunk-actions';
import StepsTwoForm from './step2/steps-two-form';
import StepsThreForm from './steps3/steps-thre-form';
import { saveItineraryPlan } from '@/src/store/tripmates-process/tripmates-process';

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
  const store = useAppStore();
  const dispatch = useAppDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<ItineraryPlan>(initialFormData);
  const [currentPoint, setCurrentPoint] = useState(POINTS[0]);

  const currentIndex = POINTS.indexOf(currentPoint);
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === POINTS.length - 1;

  const countries = useAppSelector(getCountries);
  useEffect(() => {
    if (!countries && currentIndex === 1) {
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
    if (currentIndex < POINTS.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentPoint(POINTS[nextIndex]);
    }
  }; 

  const onPrevStep = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentPoint(POINTS[prevIndex]); 
    }
  };
  
  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
       
      const [,result] = await Promise.all([
        dispatch(saveItineraryPlan(formData)),
        dispatch(sendItineraryPlan(formData)),
      ]);
      
      if (sendItineraryPlan.fulfilled.match(result)) {
        router.push(AppRoute.CatalogPage);
      } else {
        console.error('Ошибка при отправке данных маршрута:', result.error);
      }
    } catch (error) {
      console.error('Неожиданная ошибка при отправке формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentIndex) {
    case 0:
      return (
        <StepsOneForm
          updateFormData={updateFormData}
          formData={formData}
          currentPoint={currentPoint} 
        />
      );
    case 1:
      return (
        <StepsTwoForm  
          updateFormData={updateFormData}
          countries={countries} 
          currentPoint={currentPoint}
          formData={formData}
        />
      );
    case 2:
      return (
        <StepsThreForm 
          itineraries={formData.itinerary}
          currentPoint={currentPoint}
          updateFormData={updateFormData}
        />
      );
    default:
      return null;
    }
  };
  
  return (
    <div className={styles.formLayout}>
      <div className={styles.formWrapper}>
        
        {renderCurrentStep()}

        <ButtonsForm 
          handlerNextStep={onNextStep} 
          handlerPrevStep={onPrevStep} 
          handlerSubmit={onSubmit}
          firstStep={isFirstStep}
          lastStep={isLastStep}
          formData={formData}
          isSubmitting={isSubmitting}
        />

      </div>
    </div>
  );
}

export default FormSteps;