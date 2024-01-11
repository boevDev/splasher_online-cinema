import { api } from '@/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TFilms } from '@/types';

export const fetchDataFilms = createAsyncThunk('fetchDataFilms', async () => {
  const data = await api
    .get('/films?_sort=released&_order=desc')
    .then((response) => response.data);
  return data;
});

const dataFilmsSlice = createSlice({
  name: 'films',
  initialState: {
    isLoading: false,
    data: null as unknown as TFilms[],
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDataFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDataFilms.rejected, (state) => {
      state.error = true;
    });
  },
});

export default dataFilmsSlice.reducer;
