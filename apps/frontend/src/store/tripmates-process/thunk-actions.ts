import { Country } from '@/src/types/country.interface';
import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { RootState } from '../store';
import { ApiRoute } from '@/src/const';
import { UsersWithPagaintion } from '@/src/types/users-with-pagination.interface';
import { Query } from '@/src/types/query.interface';


const uploadCountries = createAsyncThunk<
  Country[],
  undefined,
  { dispatch: Dispatch; state: RootState; extra: AxiosInstance }
>('uploadCountires', async(_args, { extra: api }) => {
  const { data } = await api.get<Country[]>(ApiRoute.COUNTRIES);

  return data;
});

const uploadUserCards = createAsyncThunk<
  UsersWithPagaintion,
  Query,
  { dispatch: Dispatch; state: RootState; extra: AxiosInstance }
>('uploadUserCards', async(query, { extra: api }) => {
  const { data } = await api.get<UsersWithPagaintion>(ApiRoute.CATALOG, { params: { ...query } });

  return data;
});

const sendItineraryPlan = createAsyncThunk<
  UsersWithPagaintion,
  FormData,
  { dispatch: Dispatch; state: RootState; extra: AxiosInstance }
>('sendItineraryPlan', async(itinerary, { extra: api }) => {
  const { data } = await api.post<UsersWithPagaintion>(ApiRoute.ITINERARY, itinerary);

  return data;
});

export {
  uploadCountries,
  uploadUserCards,
  sendItineraryPlan,
};