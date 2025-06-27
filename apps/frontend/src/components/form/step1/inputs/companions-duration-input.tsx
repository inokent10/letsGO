'use client';
import styles from './companions-duration-input.module.scss';

interface CompanionsDurationInputProps {
  tripDuration: number;
  tripmatesCount: number;
  onChangeDuration: (value: number) => void;
  onChangeTrimates: (value: number) => void;
}

function CompanionsDurationInput({ 
  tripDuration, 
  tripmatesCount, 
  onChangeDuration, 
  onChangeTrimates, 
}: CompanionsDurationInputProps) {
  
  const handleTripmatesIncrement = () => {
    if (tripmatesCount < 999) {
      onChangeTrimates(tripmatesCount + 1);
    }
  };

  const handleTripmatesDecrement = () => {
    if (tripmatesCount > 0) {
      onChangeTrimates(tripmatesCount - 1);
    }
  };

  const handleDurationIncrement = () => {
    if (tripDuration < 999) {
      onChangeDuration(tripDuration + 1);
    }
  };

  const handleDurationDecrement = () => {
    if (tripDuration > 0) {
      onChangeDuration(tripDuration - 1);
    }
  };

  const handleTripmatesFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleTripmatesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value === '') {
      onChangeTrimates(0);
      return;
    }
    
    const numValue = Number(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 999) {
      onChangeTrimates(numValue);
    }
  };

  const handleDurationFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value === '') {
      onChangeDuration(0);
      return;
    }
    
    const numValue = Number(value);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 999) {
      onChangeDuration(numValue);
    }
  };

  return (
    <div className={styles.inputsContainer}>
      <div className={styles.inputRow}>
        <div className={styles.inputWrapper}>
          <span className={styles.labelText}>
            ИЩУ ПОПУТЧИКОВ:
          </span>
          <div className={styles.inputBox}>
            <button 
              type='button'
              onClick={handleTripmatesDecrement}
              disabled={tripmatesCount <= 0}
            >
              -
            </button>
            <input 
              type='number' 
              name='tripmates' 
              value={tripmatesCount} 
              max={999}
              min={0}
              onFocus={handleTripmatesFocus}
              onChange={handleTripmatesChange}
            />
            <button 
              type='button'
              onClick={handleTripmatesIncrement}
              disabled={tripmatesCount >= 999}
            >
              +
            </button>
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
            <button 
              type='button'
              onClick={handleDurationDecrement}
              disabled={tripDuration <= 0}
            >
              -
            </button>
            <input 
              type='number' 
              name='duration' 
              value={tripDuration} 
              max={999} 
              min={0}
              onFocus={handleDurationFocus}
              onChange={handleDurationChange}
            />
            <button 
              type='button'
              onClick={handleDurationIncrement}
              disabled={tripDuration >= 999}
            >
              +
            </button>
          </div>
          <span className={styles.labelText}>
            дн.
          </span>
        </div>
      </div>
    </div>
  );
}

export default CompanionsDurationInput;