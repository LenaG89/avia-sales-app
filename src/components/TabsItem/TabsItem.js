import React from "react";
import styles from './TabsItem.module.scss'

const TabsItem = ({tabprops})=> {
   const { label, active} = tabprops;
   
    return(
        <li  className={active ? `${styles.item} ${styles.item_active}` : styles.item} >{label}</li>
    )
}
export default TabsItem