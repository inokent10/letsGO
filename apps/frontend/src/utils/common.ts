import { Country } from '../types/country.interface';

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

const getCountryDictionary = (countries: Country[], continents: string[]) => {
  continents = continents.map((continent) => continent === 'Острова' ? 'Океания' : continent);
  return Array.from({ length: 32 }, (_, index) => String.fromCharCode(1072 + index)).reduce((result: ([string, Country[]])[], letter: string) => {
    const filteredCountries = countries.filter((country) => {
      return (country.name.toLowerCase().startsWith(letter)) && (continents.includes(country.location));
    });
    result.push([letter, filteredCountries]);
    return result;
  }, []);
};

export {
  getRandomInteger,
  getRandomElement,
  ajustUserLevel,
  calculateDaysCount,
  getCountryDictionary,
};