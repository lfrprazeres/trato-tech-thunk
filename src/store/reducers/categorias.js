import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasService from 'services/categorias';

const initialState = [];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      buscarCategorias.fulfilled,
      (state, { payload }) => {
        return payload;
      }
    )
  }
});

export default categoriasSlice.reducer;