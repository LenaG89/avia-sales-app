import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTickets, isLoading } from "./slices/ticketSlice";
import { useDispatch } from "react-redux";


// https://aviasales-test-api.kata.academy/tickets?searchId=${id}



const getSearchId = async () => {
  const url = `https://aviasales-test-api.kata.academy/search`;
  const res = await fetch(`${url}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, reseived ${res.status}`);
  }
  const data = await res.json();
  console.log(data.searchId);
 
  
};

const GetTickets = async () => {
  
  
  const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`;
  const res = await fetch(`${url}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, reseived ${res.status}`);
  }
  const data = await res.json();
  console.log(data);
  
   return data
};

