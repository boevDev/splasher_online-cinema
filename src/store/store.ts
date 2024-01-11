import { configureStore } from '@reduxjs/toolkit';
import dataFilmsReducer from './films/films.slice';

export const store = configureStore({
  reducer: {
    dataFilms: dataFilmsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
