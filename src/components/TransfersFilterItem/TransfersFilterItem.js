import React from "react";
import styles from "./TransfersFilterItem.module.scss";

const TransfersFilterItem = ({ filterProps }) => {
  const { name, label, active } = filterProps;
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        name={name}
        checked={active}
        onChange={() => console.log(name)}
      />
      <label htmlFor={name} className="">
        {label}
      </label>
    </div>
  );
};
export default TransfersFilterItem;
