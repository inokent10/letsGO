import { ItineraryBreakpoint } from '@/src/types/itinerary-breakpoint.interface';
import styles from '../form-steps.module.scss';
import DescriptionInputs from './inputs/description-inputs';
import Points from '../points/points';
import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';

interface StepThreFormProps {
  itineraries: ItineraryBreakpoint[]
  currentPoint: string;
  updateFormData: (data: Partial<ItineraryPlan>) => void;
}

function StepThreForm({ itineraries, currentPoint, updateFormData }: StepThreFormProps) {
  const handleDescriptionChange = (position: number, description: string) => {
    const updatedItineraries = itineraries.map(itinerary => 
      itinerary.position === position 
        ? { ...itinerary, description }
        : itinerary,
    );
    
    updateFormData({ itinerary: updatedItineraries });
  };
  
  return (
    <>
      <div className={styles.titleWrapper}>
        <div className={styles.titleBox}>
          <h1 className={styles.stepTitle}>Шаг 3. Развлечения</h1>
          <p className={styles.stepDescription}>
          Наконец, расскажите о своих планах времяпровождения.<br/>
          Можно писать в свободной форме и ставить тэги.
          </p>
        </div>
        
        <Points activePoint={currentPoint} />
      </div>
      {
        itineraries.map((itinerary, index) => (
          <DescriptionInputs 
            key={`${itinerary.position}-${itineraries.length}`}
            itinerary={itinerary}
            currentPoint={currentPoint}
            hasNextItem={index < itineraries.length - 1}
            isLast={index === itineraries.length - 1}
            onDescriptionChange={handleDescriptionChange}
          />
        ),
        )
      }
    </>
  );
};

export default StepThreForm;