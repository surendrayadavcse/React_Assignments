import { configureStore } from '@reduxjs/toolkit';
import fdReducer from './fdSlice';
import rdReducer from './rdSlice';
import notificationReducer from './notificationSlice';

const store = configureStore({
  reducer: {
    fixedDeposits: fdReducer,
    recurringDeposits: rdReducer,
    notifications: notificationReducer,
  },
});

export default store;
