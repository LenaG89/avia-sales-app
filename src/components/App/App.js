import React from "react";
import TransfersFilter from "../TransfersFilter";
import Tabs from "../Tabs";
import TicketsList from "../TicketsList";
import imgLogo from "./Logo.svg";
import styles from "./App.module.scss";

function App() {
  const filters= [
    { label: "Все", name: "All", active: false },
    { label: "Без пересадок", name: "null", active: false },
    { label: "1 пересадка", name: "Own", active: true },
    { label: "2 пересадки", name: "Two", active: false },
    { label: "3 пересадки", name: "Three", active: false },
  ];
  const tabs = [
    { label: "Самый дешевый", name: "cheapest", active: true },
    { label: "Самый быстрый", name: "fastest", active: false },
    { label: "Оптимальный", name: "optimal", active: false },
  ];
  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={imgLogo} alt="logo" />
      </div>
      <div className={styles.content}>
        <TransfersFilter filters={filters} />
        <div className={styles.ticketslist}>
          <Tabs tabsData={tabs} />
          <TicketsList />
        </div>
      </div>
    </div>
  );
}

export default App;
