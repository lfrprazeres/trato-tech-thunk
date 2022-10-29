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
    builder
    .addCase(
      buscarCategorias.fulfilled,
      (state, { payload }) => {
        console.log('categorias carregado!');
        return payload;
      }
    )
    .addCase(
      buscarCategorias.pending,
      (state, { payload }) => {
        console.log('carregando categorias');
      }
    )
    .addCase(
      buscarCategorias.rejected,
      (state, { payload }) => {
        console.log('busca de categorias rejeitada!');
      }
    )
  }
});

export default categoriasSlice.reducer;