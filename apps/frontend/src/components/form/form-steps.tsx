'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { AppRoute } from '@/src/const';

import Points from './points/points';
import { POINTS } from './form-const';

import ButtonsForm from '../buttons/buttons-form';
import Calendar from '../calendar/calendar';
import CompanionsDurationInputs from './inputs/inputs-step1/companions-duration-inputs';

import styles from './form-steps.module.scss';

function FormSteps() {
  const router = useRouter();
  const [currentPoint, setCurrentPoint] = useState(POINTS[0]);

  const currentIndex = POINTS.indexOf(currentPoint);
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === POINTS.length - 1;

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
        <div className={styles.titleWrapper}>
          <div className={styles.titleBox}>
            <h1 className={styles.stepTitle}>Шаг 1. Даты пребывания</h1>
            <p className={styles.stepDescription}>
              Укажите предпочтительное количество попутчиков, которых<br/>
              вы хотели бы позвать в поездку, и ее предполагаемую длительность.
            </p>
          </div>

          <Points activePoint={currentPoint} />
        </div>

        <CompanionsDurationInputs />
          
        <Calendar />

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