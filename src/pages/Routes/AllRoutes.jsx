import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Dashboard/Dashboard";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Authentication/Login";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/authentication/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
