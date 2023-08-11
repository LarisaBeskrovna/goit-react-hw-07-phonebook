const { createSlice } = require('@reduxjs/toolkit');

const initialState = { value: '' };

const filterSlice = createSlice({
  name: 'filterState',
  initialState,
  reducers: {
    fromfilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fromfilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
