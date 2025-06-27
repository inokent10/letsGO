import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';
import CompanionsDurationInput from './companions-duration-input';
import styles from './companions-duration-input.module.scss';

interface CompanionsDurationInputProps {
  tripDuration: number;
  tripmatesCount: number;
  isChildrenAccepted: boolean;
  updateFormData: (data: Partial<ItineraryPlan>) => void;
}

function CompanionsDurationInputs({ 
  tripDuration, 
  tripmatesCount,
  isChildrenAccepted,
  updateFormData, 
}: CompanionsDurationInputProps) {
  const handleTripmatesChange = (count: number) => {
    updateFormData({ tripmatesCount: count });
  };

  const handleDurationChange = (duration: number) => {
    updateFormData({ tripDuration: duration });
  };

  const handleChildrenAcceptedChange = (accepted: boolean) => {
    updateFormData({ isChildrenAccepted: accepted });
  };

  return (
    <div className={styles.inputTripmates}>
      <CompanionsDurationInput 
        tripDuration={tripDuration}
        tripmatesCount={tripmatesCount}
        onChangeDuration={handleDurationChange}
        onChangeTrimates={handleTripmatesChange}
      />

      <div className={styles.checkboxChild}>
        <label>
          <input 
            type='checkbox' 
            name='children'
            checked={isChildrenAccepted}
            onChange={(e) => handleChildrenAcceptedChange(e.target.checked)}
          />
              Можно с детьми
        </label>
      </div>
    </div>
  );
}

export default CompanionsDurationInputs;