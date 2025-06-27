import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';
import Calendar from '../../calendar/calendar';
import styles from '../form-steps.module.scss';
import Points from '../points/points';
import CompanionsDurationInputs from './inputs/companions-duration-inputs';

interface FormStepsOneProps {
    currentPoint: string;
    formData: ItineraryPlan;
    updateFormData: (data: Partial<ItineraryPlan>) => void;
}

function FormStepsOne({ currentPoint, formData, updateFormData }: FormStepsOneProps) {

  return (
    <>
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

      <CompanionsDurationInputs 
        isChildrenAccepted={formData.isChildrenAccepted}
        tripDuration={formData.tripDuration}
        tripmatesCount={formData.tripmatesCount}
        updateFormData={updateFormData}
      />
          
      <Calendar />
    </>
  );
}

export default FormStepsOne;