
const getRandomInteger = (a: number, b: number) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = <T>(arr: T[]) => arr[getRandomInteger(0, arr.length - 1)];

const ajustUserLevel = (level: number): number => (level > 90) ? level - 3 : level;

const calculateDaysCount = (startDate: string, finishDate: string): number => {
  if (startDate && finishDate) {
    const [startYear, startMonth, startDay] = startDate.split('-').map(Number);
    const [finishYear, finishMonth, finishDay] = finishDate.split('-').map(Number);
    
    const startDateObj = new Date(startYear, startMonth - 1, startDay);
    const finishDateObj = new Date(finishYear, finishMonth - 1, finishDay);
    
    const timeDiff = finishDateObj.getTime() - startDateObj.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1;
    
    return daysDiff;
  }
  return 0;
};

export {
  getRandomInteger,
  getRandomElement,
  ajustUserLevel,
  calculateDaysCount,
};