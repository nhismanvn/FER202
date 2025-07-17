import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk để mô phỏng API call
export const addProductAsync = createAsyncThunk(
  'cart/addProductAsync',
  async (product) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return product;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => {
      console.log('✔️ Product added:', action.payload);
      state.push(action.payload);
    });
  }
});

export default cartSlice.reducer;
