import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Dashboard/Dashboard";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Authentication/Login";
import ViewDocument from "../Document/ViewDocument";
import Signature from "../Signature/Signature";
const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/authentication/login" element={<Login />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/document" element={<ViewDocument />} />
          <Route path="/signature" element={<Signature />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
