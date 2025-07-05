import { ItineraryBreakpoint } from '@/src/types/itinerary-breakpoint.interface';
import styles from './description-inputs.module.scss';
import FlagBox from '../../flag-box/flag-box';

interface DescriptionInputs {
    itinerary: ItineraryBreakpoint;
    currentPoint: string;
    hasNextItem: boolean;
    isLast: boolean;
    onDescriptionChange: (position: number, description: string) => void;
}

function DescriptionInputs({ itinerary, currentPoint, hasNextItem, isLast, onDescriptionChange }: DescriptionInputs) {
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    onDescriptionChange(itinerary.position, description);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>

        <FlagBox 
          countryName={itinerary.country}
          position={itinerary.position}
          currentPoint={currentPoint}
          hasNextItem={hasNextItem}
          isLast={isLast}
        />

        <textarea 
          placeholder='План действий' 
          name='description' 
          id={`${itinerary.position}`}
          minLength={1}
          maxLength={500}
          value={itinerary.description || ''}
          onChange={handleTextareaChange}
        />
      </div>
    </div>
  );
};

export default DescriptionInputs;