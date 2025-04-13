import { createSlice } from '@reduxjs/toolkit';

const rdSlice = createSlice({
  name: 'recurringDeposits',
  initialState: [],
  reducers: {
    addRD: (state, action) => {
      state.push(action.payload);
    },
    updateContribution: (state, action) => {
      const { id, amount } = action.payload;
      const rd = state.find(rd => rd.id === id);
      if (rd) rd.monthlyContribution = amount;
    },
  },
});

export const { addRD, updateContribution } = rdSlice.actions;
export default rdSlice.reducer;
