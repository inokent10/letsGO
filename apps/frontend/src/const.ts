const DEFAULT_CARDS_PER_PAGE = 4;
const DEFAULT_PAGE_NUMBER = 1;

enum AppRoute {
    FormPage = '/',
    CatalogPage = '/catalog'
};

const HEADER_TITLES = {
  DIRECTIONS: 'НАПРАВЛЕНИЯ',
  TRAVELERS: 'ПОПУТЧИКИ',
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

export {
  AppRoute,
  HEADER_TITLES,
  ApiRoute,
  ApiSettings,
  DEFAULT_PAGE_NUMBER,
  DEFAULT_CARDS_PER_PAGE,
};