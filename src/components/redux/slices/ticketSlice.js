import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


const initialState = {
  tickets: [], 
  id: "",
  isLoading: false,
  
};

export const fetchSearchId = createAsyncThunk(
  "tickets/fetchSearchId",
  async () => {
    const url = `https://aviasales-test-api.kata.academy/search`;
    const res = await axios.get(`${url}`);
    const id = res.data.searchId;
    console.log(id);
    return id;
  }
);
export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (id, api) => {
    api.dispatch(isLoading(true));
    const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`;
    const res = await axios.get(`${url}`);
    console.log(res.data);
    if (!res.data.stop) {
      api.dispatch(addTickets(res.data.tickets));
      await api.dispatch(fetchTickets(id));
    } else {
      api.dispatch(isLoading(false));
    }
  }
);

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTickets: (state, action) => {
      state.tickets.push(...action.payload);
      state.isLoading = action.payload;
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchId.fulfilled, (state, action) => {
      state.id = action.payload;
    });
    
  },
});

export const { addTickets, isLoading } = ticketSlice.actions;
export default ticketSlice.reducer;
