const DEFAULT_CARDS_PER_PAGE = 4;
const DEFAULT_PAGE_NUMBER = 1;

enum AppRoute {
    CatalogPage = '/',
    FormPage = 'form'
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
  BASE_URL: 'http://localhost:5000',
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

export {
  AppRoute,
  ApiRoute,
  ApiSettings,
  DEFAULT_PAGE_NUMBER,
  DEFAULT_CARDS_PER_PAGE,
  Continent,
  Vehicle,
  Meal,
  Hobby,
  MusicStyle,
};