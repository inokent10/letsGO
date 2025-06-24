import { RootState } from '../store';

const getCountries = (state: Pick<RootState, 'TRIPMATES'>) =>
  state['TRIPMATES'].countries;

export {
  getCountries,
};