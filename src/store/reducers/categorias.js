import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategorias: (state, { payload }) => {
      state.push(...payload);
    }
  }
});

export const { adicionarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;