import { combineReducers } from '@reduxjs/toolkit';
import { tripmatesProcess } from './tripmates-process/tripmates-process';

const rootReducer = combineReducers({
  'TRIPMATES': tripmatesProcess.reducer,
});

export { rootReducer };