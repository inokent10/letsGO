import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';
import styles from './buttons-form.module.scss';

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
    formData: ItineraryPlan
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

function SubmitButton({ handler }: ButtonsProps) {
  return (
    <button 
      className={styles.nextButton}
      onClick={handler}
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
}: FormButtons) {
  const { startDate, finishDate, tripDuration, tripmatesCount, itinerary } = formData;

  const ferstStepValid = startDate === '' || finishDate === '' || tripDuration === 0 || tripmatesCount === 0;
  
  return (
    <div className={styles.buttonWrapper}>
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
            handler={handlerSubmit} />
          <PrevButton 
            handler={handlerPrevStep} />
        </>
      )}

    </div>
  );
}

export default ButtonsForm;