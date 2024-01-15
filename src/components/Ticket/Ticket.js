import React from "react";
import styles from './Ticket.module.scss'
import S7logo from './S7 Logo.png'

const Ticket =(props) => {
    return(
        <li className={styles.card}>
        <div className={styles.header}>
          <div className={styles.price}>13 400 Р</div>
          <div className={styles.logo}>
            <img src={S7logo} alt="logo" />
          </div>
        </div>
        <div className={styles.path}>
          <div className={styles.data}>
            <div className={styles.top}>
            MOW – HKT 
            </div>
            <div className={styles.bot}>
            10:45 – 08:00
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.top}>В пути</div>
            <div className={styles.bot}>21ч 15м</div>
          </div>
          <div className={styles.data}>
            <div className={styles.top}>2 пересадки</div>
            <div className={styles.bot}>HKG, JNB</div>
          </div>
        </div>
  
        <div className={styles.path}>
          <div className={styles.data}>
            <div className={styles.top}>
            MOW – HKT
            </div>
            <div className={styles.bot}>
            11:20 – 00:50
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.top}>В пути</div>
            <div className={styles.bot}>13ч 30м</div>
          </div>
          <div className={styles.data}>
            <div className={styles.top}>13ч 30м</div>
            <div className={styles.bot}>HKG</div>
          </div>
        </div>
      </li>
    )
}
export default Ticket