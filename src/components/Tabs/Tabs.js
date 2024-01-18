import React from "react";
import TabsItem from "../TabsItem";
import stylse from "./Tabs.module.scss";

const Tabs = ({ tabsData }) => {
  const elements = tabsData.map((tab) => {
    return <TabsItem key={tab.name} tabprops={tab} />;
  });
  return <ul className={stylse.tabs}>{elements}</ul>;
};
export default Tabs;
