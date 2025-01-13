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
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          {/* Set Login as the initial route */}
          <Route index element={<Login />} />
          <Route path="/authentication/login" element={<Login />} />
        </Route>

        {/* Main App Routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/document" element={<ViewDocument />} />
          <Route path="/signature" element={<Signature />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
