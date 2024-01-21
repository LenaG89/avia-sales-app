import React from "react";
import TabsItem from "../TabsItem";
import { useSelector } from "react-redux";
import stylse from "./Tabs.module.scss";

const Tabs = () => {
  const tabsData = useSelector((state)=> state.tabs.tabs)
  const elements = tabsData.map((tab) => {
    return <TabsItem key={tab.name} tabprops={tab} />;
  });
  return <ul className={stylse.tabs}>{elements}</ul>;
};
export default Tabs;
