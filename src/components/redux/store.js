import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice';
import tabReducer from './slices/tabSlice';


const store = configureStore({
  reducer: {
    filters: filterReducer,
    tabs: tabReducer,
    
  },
});

export default store;
