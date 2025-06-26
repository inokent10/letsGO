import styles from './buttons-form.module.scss';

interface ButtonsProps {
    handler?: () => void;
}

interface FormButtons {
    handlerNextStep: () => void;
    handlerPrevStep: () => void;
    handlerSubmit: () => void;
    firstStep: boolean;
    lastStep: boolean;
}

function NextButton({ handler }: ButtonsProps) {
  return (
    <button 
      className={styles.nextButton}
      onClick={handler}
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
}: FormButtons) {
  return (
    <div className={styles.buttonWrapper}>
      {firstStep && (
        <NextButton handler={handlerNextStep} />
      )}

      {!firstStep && !lastStep && (
        <>
          <NextButton handler={handlerNextStep} />
          <PrevButton handler={handlerPrevStep} />
        </>
      )}

      {lastStep && (
        <>
          <SubmitButton handler={handlerSubmit} />
          <PrevButton handler={handlerPrevStep} />
        </>
      )}

    </div>
  );
}

export default ButtonsForm;