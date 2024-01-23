import React from "react";
import Ticket from "../Ticket";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchId,
  fetchTickets,
 
} from "../redux/slices/ticketSlice";
import styles from "./TicketsList.module.scss";

const TicketsList = () => {
  const [visibleTickets, setVisibleTickets] = useState(5);
  const { id, tickets } = useSelector((state) => state.tickets);
  const tabs = useSelector((state) => state.tabs.tabs);
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  const activeFilterCount = (filters.filter((item)=>item.active)).length
const sortTickets = (arr)=>{

  const activeTab = tabs.find((item) => item.active);
  const  activeFilters = {};
  filters.forEach((item) => {
    activeFilters[item.name] = item.active;
  });


if (arr && activeTab) {
  const filteredArr = arr.filter((item) => {
    if (Object.values(activeFilters).every((filter) => !filter)) {
    }

    if (activeFilters['not'] && item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0) {
      return true;
    }
    if (activeFilters['one'] && item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1) {
      return true;
    }
    if (activeFilters['two'] && item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2) {
      return true;
    }
    if (activeFilters['three'] && item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3) {
      return true;
    }

    return false;
  });

  switch (activeTab.name) {
    case 'cheapest':
      return filteredArr.sort((a, b) => a.price - b.price);
    case 'fastest':
      return filteredArr.sort((a, b) => Math.floor(a.segments[0].duration + a.segments[1].duration) - Math.floor(b.segments[0].duration + b.segments[1].duration));
    case 'optimal':
      return filteredArr;
    default:
      return [];
  }
} else {
  return [];
}
};

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
    dispatch(fetchTickets(id));
  }
}, [dispatch, id]);

  return (
    <ul className={styles.tickets}>
      {!activeFilterCount ? <div className={styles.title}>Рейсов, подходящих под заданные фильтры, не найдено</div>: null}
      {/* {isLoading ? <Spiner /> : <h2 className={styles.title}>Общее количество билетов: {tickets.length}</h2>} */}
      {sortTickets(tickets).slice(0, visibleTickets).map((ticket, i)=>(  
      <Ticket 
          key={i}
          carrier={ticket.carrier} 
          segments={ticket.segments}
          price={ticket.price}
          />)
      )}
     
      <button className={styles.button} 
      onClick={() => setVisibleTickets((prev)=>prev + 5)}>
        Показать еще 5 билетов!
        </button>
    </ul>
  );
};
export default TicketsList;
