import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
const MainLayout = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        {/* Header */}
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default MainLayout;
