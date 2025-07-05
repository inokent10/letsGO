'use client';
import React, { useState } from 'react';
import './calendar.scss';

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  events?: Record<string, string>;
  startDate?: string;
  finishDate?: string;
}

function Calendar ({ 
  selectedDate, 
  onDateSelect,
  events = {},
  startDate,
  finishDate,
}: CalendarProps) {
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
    return firstDay === 0 ? 6 : firstDay - 1;
  };
  
  const getPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  
  const getNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  
  const handleDateClick = (date: Date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    if (date < tomorrow) {
      return;
    }
    
    if (onDateSelect) {
      onDateSelect(date);
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
  
  const isInRange = (day: number, monthOffset = 0) => {
    if (!startDate || !finishDate) return false;
    
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, day);
    
    const [startYear, startMonth, startDay] = startDate.split('-').map(Number);
    const start = new Date(startYear, startMonth - 1, startDay);
    
    const [finishYear, finishMonth, finishDay] = finishDate.split('-').map(Number);
    const finish = new Date(finishYear, finishMonth - 1, finishDay);
    
    return dateToCheck >= start && dateToCheck <= finish;
  };
  
  const isRangeStart = (day: number, monthOffset = 0) => {
    if (!startDate) return false;
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, day);
    
    const [startYear, startMonth, startDay] = startDate.split('-').map(Number);
    const start = new Date(startYear, startMonth - 1, startDay);
    
    return dateToCheck.getTime() === start.getTime();
  };
  
  const isRangeEnd = (day: number, monthOffset = 0) => {
    if (!finishDate) return false;
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, day);
    
    const [finishYear, finishMonth, finishDay] = finishDate.split('-').map(Number);
    const finish = new Date(finishYear, finishMonth - 1, finishDay);
    
    return dateToCheck.getTime() === finish.getTime();
  };
  
  const isWeekend = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };
  
  const getEventForDate = (day: number, monthOffset = 0) => {
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset, day);
    
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth() + 1;
    const dayNum = targetDate.getDate();
    
    const possibleKeys = [
      `${year}-${month}-${dayNum}`,
      `${year}-${month.toString().padStart(2, '0')}-${dayNum.toString().padStart(2, '0')}`,
      `${month}-${dayNum}`,
      `${month.toString().padStart(2, '0')}-${dayNum.toString().padStart(2, '0')}`,
    ];
    
    for (const key of possibleKeys) {
      if (events[key]) {
        return events[key];
      }
    }
    
    return null;
  };
  
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    const daysInPrevMonth = getDaysInMonth(prevMonth);
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const dateToCheck = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), day);
      const isBeforeTomorrow = dateToCheck < tomorrow;
      const inRange = isInRange(day, -1);
      const rangeStart = isRangeStart(day, -1);
      const rangeEnd = isRangeEnd(day, -1);
      const event = getEventForDate(day, -1);
      
      days.push(
        <div 
          key={`prev-${day}`} 
          className={`calendar-day prev-month ${isBeforeTomorrow ? 'past-date' : ''} ${
            inRange ? 'in-range' : ''
          } ${
            rangeStart ? 'range-start' : ''
          } ${
            rangeEnd ? 'range-end' : ''
          } ${
            event ? 'has-event' : ''
          }`}
          onClick={() => !isBeforeTomorrow && handleDateClick(dateToCheck)}
        >
          <span className='day-number'>{day}</span>
          {event && <span className='event-text'>{event}</span>}
        </div>,
      );
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const event = getEventForDate(day, 0);
      const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isBeforeTomorrow = dateToCheck < tomorrow;
      const inRange = isInRange(day, 0);
      const rangeStart = isRangeStart(day, 0);
      const rangeEnd = isRangeEnd(day, 0);
      
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
          } ${
            isBeforeTomorrow ? 'past-date' : ''
          } ${
            inRange ? 'in-range' : ''
          } ${
            rangeStart ? 'range-start' : ''
          } ${
            rangeEnd ? 'range-end' : ''
          }`}
          onClick={() => !isBeforeTomorrow && handleDateClick(dateToCheck)}
        >
          <span className='day-number'>{day}</span>
          {event && <span className='event-text'>{event}</span>}
        </div>,
      );
    }
    
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (firstDay + daysInMonth);
    
    for (let day = 1; day <= remainingCells; day++) {
      const dateToCheck = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day);
      const isBeforeTomorrow = dateToCheck < tomorrow;
      const inRange = isInRange(day, 1);
      const rangeStart = isRangeStart(day, 1);
      const rangeEnd = isRangeEnd(day, 1);
      const event = getEventForDate(day, 1);
      
      days.push(
        <div 
          key={`next-${day}`} 
          className={`calendar-day next-month ${isBeforeTomorrow ? 'past-date' : ''} ${
            inRange ? 'in-range' : ''
          } ${
            rangeStart ? 'range-start' : ''
          } ${
            rangeEnd ? 'range-end' : ''
          } ${
            event ? 'has-event' : ''
          }`}
          onClick={() => !isBeforeTomorrow && handleDateClick(dateToCheck)}
        >
          <span className='day-number'>{day}</span>
          {event && <span className='event-text'>{event}</span>}
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