import React from "react";
import { OrderList, OrderDetail, ControlPannel } from "./components";
export default () => {
  return (
    <div className="home-page">
      <OrderList />
      <OrderDetail />
      <ControlPannel />
    </div>
  );
};
