import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';
import Calendar from '../../calendar/calendar';
import styles from '../form-steps.module.scss';
import Points from '../points/points';
import CompanionsDurationInputs from './inputs/companions-duration-inputs';

interface StepsOneFormProps {
    currentPoint: string;
    formData: ItineraryPlan;
    updateFormData: (data: Partial<ItineraryPlan>) => void;
}

function StepsOneForm({ currentPoint, formData, updateFormData }: StepsOneFormProps) {
  const getSelectedDate = (): Date | undefined => {
    if (formData.startDate) {
      const [year, month, day] = formData.startDate.split('-').map(Number);
      return new Date(year, month - 1, day);
    }
    return undefined;
  };

  const handleDateSelect = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const selectedDateString = `${year}-${month}-${day}`;
    
    if (!formData.startDate) {
      updateFormData({
        startDate: selectedDateString,
        finishDate: '',
      });
    } else {
      const [startYear, startMonth, startDay] = formData.startDate.split('-').map(Number);
      const startDateObj = new Date(startYear, startMonth - 1, startDay);
      
      if (date < startDateObj) {
        updateFormData({
          startDate: selectedDateString,
          finishDate: '',
        });
      } else if (!formData.finishDate) {
        updateFormData({
          finishDate: selectedDateString,
        });
      } else {
        updateFormData({
          startDate: selectedDateString,
          finishDate: '',
        });
      }
    }
  };

  const getCalendarEvents = () => {
    const events: Record<string, string> = {};
    
    if (formData.startDate) {
      const [year, month, day] = formData.startDate.split('-').map(Number);
      const dateKey = `${year}-${month}-${day}`;
      events[dateKey] = 'Заезд';
    }
    
    if (formData.finishDate) {
      const [year, month, day] = formData.finishDate.split('-').map(Number);
      const dateKey = `${year}-${month}-${day}`;
      events[dateKey] = 'Выезд';
    }
    
    return events;
  };

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
          
      <Calendar 
        events={getCalendarEvents()}
        onDateSelect={handleDateSelect}
        selectedDate={getSelectedDate()}
        startDate={formData.startDate}
        finishDate={formData.finishDate}
      />
    </>
  );
}

export default StepsOneForm;