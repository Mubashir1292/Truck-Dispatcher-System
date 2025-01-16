import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ViewDocument from "../Document/ViewDocument";
import Signature from "../Signature/Signature";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        {/* Main App Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<ViewDocument />} index />
          <Route path="/signature" element={<Signature />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
