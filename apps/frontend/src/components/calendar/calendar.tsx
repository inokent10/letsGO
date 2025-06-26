'use client';
import React, { useState } from 'react';
import './calendar.scss';

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  events?: Record<string, string>;
}

const Calendar: React.FC<CalendarProps> = ({ 
  selectedDate, 
  onDateSelect,
  events = {},
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
  ];
  
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Convert Sunday (0) to be last day (6)
  };
  
  const getPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  
  const getNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  
  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (onDateSelect) {
      onDateSelect(newDate);
    }
  };
  
  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day &&
           today.getMonth() === currentDate.getMonth() &&
           today.getFullYear() === currentDate.getFullYear();
  };
  
  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentDate.getMonth() &&
           selectedDate.getFullYear() === currentDate.getFullYear();
  };
  
  const isWeekend = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
  };
  
  const getEventForDate = (day: number) => {
    const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
    return events[dateKey];
  };
  
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    
    // Previous month's days
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    const daysInPrevMonth = getDaysInMonth(prevMonth);
    
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push(
        <div key={`prev-${day}`} className='calendar-day prev-month'>
          {day}
        </div>,
      );
    }
    
    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const event = getEventForDate(day);
      days.push(
        <div
          key={day}
          className={`calendar-day current-month ${
            isToday(day) ? 'today' : ''
          } ${
            isSelected(day) ? 'selected' : ''
          } ${
            isWeekend(day) ? 'weekend' : ''
          } ${
            event ? 'has-event' : ''
          }`}
          onClick={() => handleDateClick(day)}
        >
          <span className='day-number'>{day}</span>
          {event && <span className='event-text'>{event}</span>}
        </div>,
      );
    }
    
    // Next month's days to fill the grid
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (firstDay + daysInMonth);
    
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div key={`next-${day}`} className='calendar-day next-month'>
          {day}
        </div>,
      );
    }
    
    return days;
  };
  
  return (
    <div className='calendar'>
      <div className='calendar-header'>
        <button className='nav-button' onClick={getPrevMonth}>
          &#8249;
        </button>
        <h2 className='month-year'>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button className='nav-button' onClick={getNextMonth}>
          &#8250;
        </button>
      </div>
      
      <div className='calendar-weekdays'>
        {dayNames.map(day => (
          <div key={day} className='weekday'>
            {day}
          </div>
        ))}
      </div>
      
      <div className='calendar-grid'>
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;