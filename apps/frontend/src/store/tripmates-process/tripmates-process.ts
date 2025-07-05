import { TripmatesState } from '@/src/types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sendItineraryPlan, uploadCountries, uploadPageUserCards, uploadMoreUserCards } from './thunk-actions';
import { DEFAULT_CARDS_PER_PAGE, DEFAULT_PAGE_NUMBER } from '@/src/const';
import { ItineraryPlan } from '@/src/types/itineraryPlan.interface';
import { Query } from '@/src/types/query.interface';


const initialState: TripmatesState = {
  countries: null,
  userCards: null,
  itineraryPlan: null,
  query: {
    page: DEFAULT_PAGE_NUMBER,
    limit: DEFAULT_CARDS_PER_PAGE,
    count: DEFAULT_CARDS_PER_PAGE,
  },
};

const tripmatesProcess = createSlice({
  name: 'TRIPMATES',
  initialState,
  reducers: {
    saveItineraryPlan: (state, action: PayloadAction<ItineraryPlan>) => {
      state.itineraryPlan = action.payload;
    },
    saveQuery: (state, action: PayloadAction<Query>) => {
      state.query = { ...state.query, ...action.payload };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(uploadCountries.fulfilled, (state, action) => {
        state.countries = action.payload;  
      })
      .addCase(uploadMoreUserCards.fulfilled, (state, action) => {
        if (!state.userCards || action.payload.currentPage === DEFAULT_PAGE_NUMBER) {
          state.userCards = action.payload;
        } else {
          state.userCards = {
            ...action.payload,
            entities: [...state.userCards.entities, ...action.payload.entities],
          };
        }          
      })
      .addCase(uploadPageUserCards.fulfilled, (state, action) => {        
        state.userCards = action.payload;                 
      })
      .addCase(sendItineraryPlan.fulfilled, (state, action) => {
        state.userCards = action.payload;
      });
  },
});

const { saveItineraryPlan, saveQuery } = tripmatesProcess.actions;

export { tripmatesProcess, saveItineraryPlan, saveQuery };