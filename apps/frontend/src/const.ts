const DEFAULT_CARDS_PER_PAGE = 4;
const DEFAULT_PAGE_NUMBER = 1;

enum AppRoute {
    CatalogPage = '/',
    FormPage = 'form'
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

export {
  AppRoute,
  ApiRoute,
  ApiSettings,
  DEFAULT_PAGE_NUMBER,
  DEFAULT_CARDS_PER_PAGE,
};