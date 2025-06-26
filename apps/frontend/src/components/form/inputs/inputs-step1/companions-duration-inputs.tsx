import CompanionsDurationInput from './companions-duration-input';
import styles from './companions-duration-input.module.scss';

function CompanionsDurationInputs() {
  return (
    <div className={styles.inputTripmates}>
      <div className={styles.inputsContainer}>
        <CompanionsDurationInput />
      </div>

      <div className={styles.checkboxChild}>
        <label>
          <input type='checkbox' name='children' />
              Можно с детьми
        </label>
      </div>
    </div>
  );
}

export default CompanionsDurationInputs;