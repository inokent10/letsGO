import { RootState } from '../store';

const getCountries = (state: Pick<RootState, 'TRIPMATES'>) =>
  state['TRIPMATES'].countries;

const getPaginatedUsers = (state: Pick<RootState, 'TRIPMATES'>) =>
  state['TRIPMATES'].userCards;

const getItinerary = (state: Pick<RootState, 'TRIPMATES'>) =>
  state['TRIPMATES'].itineraryPlan;

const getQuery = (state: Pick<RootState, 'TRIPMATES'>) =>
  state['TRIPMATES'].query;

const getUsers = (state: Pick<RootState, 'TRIPMATES'>) =>
  state['TRIPMATES'].userCards?.entities;

export {
  getCountries,
  getPaginatedUsers,
  getItinerary,
  getQuery,
  getUsers,
};