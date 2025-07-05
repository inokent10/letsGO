import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';
import styles from './buttons-form.module.scss';
import { calculateDaysCount } from '@/src/utils/common';

interface ButtonsProps {
    handler?: () => void;
    flag?: boolean;
}

interface FormButtons {
    handlerNextStep: () => void;
    handlerPrevStep: () => void;
    handlerSubmit: () => void;
    firstStep: boolean;
    lastStep: boolean;
    isSubmitting: boolean;
    formData: ItineraryPlan;
}

function NextButton({ handler, flag }: ButtonsProps) {
  return (
    <button 
      className={`${styles.nextButton} ${flag ? styles.disabledButton : ''}`}
      onClick={handler}
      disabled={flag}
    >
        Следующий шаг 
      <img src='/Polygon_next.svg' alt='arrow' />
    </button>
  );
};

function PrevButton({ handler }: ButtonsProps) {
  return (
    <button 
      className={styles.prevButton}
      onClick={handler}
    >
      <img src='/Polygon_prev.svg' alt='arrow' />
          На шаг назад 
    </button>
  );
};

function SubmitButton({ handler, flag }: ButtonsProps) {
  return (
    <button 
      className={styles.nextButton}
      onClick={handler}
      disabled={flag}
    >
         Отправить
      <img src='/Polygon_next.svg' alt='arrow' />
    </button>
  );
};

function ButtonsForm({
  handlerNextStep,
  handlerPrevStep,
  handlerSubmit,
  firstStep,
  lastStep,
  formData,
  isSubmitting,
}: FormButtons) {
  const { startDate, finishDate, tripDuration, tripmatesCount, itinerary } = formData;

  const invalidTripDuration = calculateDaysCount(formData.startDate, formData.finishDate) !== formData.tripDuration;
  const ferstStepValid = startDate === '' || 
  finishDate === '' || 
  tripDuration === 0 || 
  tripmatesCount === 0 || 
  invalidTripDuration;
  
  return (
    <div className={`${styles.buttonWrapper} ${invalidTripDuration ? styles.errorSpan : ''}`}>
      {invalidTripDuration && !formData.tripDuration && 
        <span>дата и длительность должны совпадать</span>
      }
      {firstStep && (
        <NextButton 
          handler={handlerNextStep} 
          flag={ferstStepValid}
        />
      )}

      {!firstStep && !lastStep && (
        <>
          <NextButton 
            handler={handlerNextStep}
            flag={itinerary.length < 1}
          />
          <PrevButton 
            handler={handlerPrevStep} 
          />
        </>
      )}

      {lastStep && (
        <>
          <SubmitButton 
            handler={handlerSubmit} 
            flag={isSubmitting}
          />
          <PrevButton 
            handler={handlerPrevStep} />
        </>
      )}

    </div>
  );
}

export default ButtonsForm;