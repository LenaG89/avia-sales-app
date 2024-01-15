import React from "react";
import Ticket from "../Ticket";
import styles from "./TicketsList.module.scss";

const TicketsList = () => {
  return (
    <ul className={styles.tickets}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button className={styles.button}>Показать еще 5 билетов!</button>
    </ul>
  );
};
export default TicketsList;
