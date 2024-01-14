import React from "react";
import TabsItem from "../TabsItem";
import stylse from './Tabs.module.scss'



const Tabs = (props)=> {
    return (
        <ul className={stylse.tabs}>
          <TabsItem />
        </ul>
    )
}
export default Tabs