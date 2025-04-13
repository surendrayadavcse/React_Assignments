import { createSlice } from '@reduxjs/toolkit';

const fdSlice = createSlice({
  name: 'fixedDeposits',
  initialState: [],
  reducers: {
    addFD: (state, action) => {
      state.push(action.payload);
    },
    markMatured: (state, action) => {
      const fd = state.find(fd => fd.id === action.payload);
      if (fd) fd.status = 'Matured';
    },
  },
});

export const { addFD, markMatured } = fdSlice.actions;
export default fdSlice.reducer;
