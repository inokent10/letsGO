const DEFAULT_CARDS_PER_PAGE = 4;
const DEFAULT_PAGE_NUMBER = 1;
const USERT_MIN_LEVEL = 0;
const USERT_MAX_LEVEL = 100;

enum AppRoute {
    FormPage = '/',
    CatalogPage = '/catalog'
};

const HEADER_TITLES = {
  DIRECTIONS: 'НАПРАВЛЕНИЯ',
  TRAVELERS: 'ПОПУТЧИКИ',
};

enum Continent {
    EROUPE = 'Европа',
    ASIA = 'Азия',
    AMERICA = 'Америка',
    ISLANDS = 'Острова',
};

enum ApiRoute {
  CATALOG = '/catalog',
  COUNTRIES = '/countries',
  ITINERARY = '/itinerary'
}

const ApiSettings = {
  BASE_URL: 'http://localhost:5001',
  API_TIMEOUT: 5000,
} as const;

const MusicStyle = {
  ROCK: 'Тяжёлый рок',
  RAP: 'Русский рэп',
  DANCE: 'Евроденс',
} as const;

const Hobby = {
  FITNESS: 'Спортзал',
  RAP: 'Кальян',
  LAZYBONE: 'Диван',
} as const;

const Meal = {
  MEAT: 'Мясоед',
  HEALTH: 'Сидит на ПП',
  VEGAN: 'Веган-сыроед',
} as const;

const Vehicle = {
  AIRPLANE: 'Самолёт',
  CAR: 'Автомобиль',
  BIKE: 'Велосипед',
  NONE: 'Пешком',
} as const;

const flagIcons = [
  'Australia.svg',
  'Belgium.svg',
  'Bosnia and Herzegovina.svg',
  'Czechia.svg',
  'Dominica.svg',
  'France.svg',
  'Germany.svg',
  'Seychelles.svg',
  'Sri Lanka.svg',
  'Thailand.svg',
  'UK.svg',
  'USA.svg',
];

export {
  AppRoute,
  HEADER_TITLES,
  ApiRoute,
  ApiSettings,
  DEFAULT_PAGE_NUMBER,
  DEFAULT_CARDS_PER_PAGE,
  Continent,
  Vehicle,
  Meal,
  Hobby,
  MusicStyle,
  flagIcons,
  USERT_MAX_LEVEL,
  USERT_MIN_LEVEL,
};