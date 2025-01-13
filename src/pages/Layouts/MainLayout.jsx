import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
const MainLayout = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        {/* Header */}
        <Header />
        <div className="flex flex-1">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainLayout;
