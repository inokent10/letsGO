enum AppRoute {
    FormPage = '/',
    CatalogPage = '/catalog'
};

const HEADER_TITLES = {
  DIRECTIONS: 'НАПРАВЛЕНИЯ',
  TRAVELERS: 'ПОПУТЧИКИ',
} as const;

export {
  AppRoute,
  HEADER_TITLES,
};