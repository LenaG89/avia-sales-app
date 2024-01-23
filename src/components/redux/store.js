import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice';
import tabReducer from './slices/tabSlice';
import ticketSlice from "./slices/ticketSlice";


const store = configureStore({
  reducer: {
    filters: filterReducer,
    tabs: tabReducer,
    tickets: ticketSlice,
  },
});

export default store;
