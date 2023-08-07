const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filterState',
  initialState,
  reducers: {
    fromfilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { fromfilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
