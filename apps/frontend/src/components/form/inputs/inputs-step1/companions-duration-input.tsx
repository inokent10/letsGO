import styles from './companions-duration-input.module.scss';

function CompanionsDurationInput() {
  return (
    <>
      <div className={styles.inputRow}>
        <div className={styles.inputWrapper}>
          <span className={styles.labelText}>
            ИЩУ ПОПУТЧИКОВ:
          </span>
          <div className={styles.inputBox}>
            <button>-</button>
            <input type='number' name='tripmates' value={0}  />
            <button>+</button>
          </div>
          <span className={styles.labelText}>
            чел.
          </span>
        </div>
      </div>

      <div className={styles.inputRow}>
        <div className={styles.inputWrapper}>
          <span className={styles.labelText}>
            ДЛИТЕЛЬНОСТЬ:
          </span>
          <div className={`${styles.inputBox} ${styles['inputBox--second']}`}>
            <button>-</button>
            <input type='number' name='tripmates' value={0}  />
            <button>+</button>
          </div>
          <span className={styles.labelText}>
            дн.
          </span>
        </div>
      </div>
    </>
  );
}

export default CompanionsDurationInput;