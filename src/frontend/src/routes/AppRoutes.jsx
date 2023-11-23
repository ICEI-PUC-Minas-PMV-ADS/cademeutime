import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { RegisterEvent } from "../pages/RegisterEvent";
import { Home } from "../pages/Home";
import { MapPage } from "../pages/MapPage";
import { EventDescription } from "../pages/EventDescription";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerEvent" element={<RegisterEvent />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mapPage" element={<MapPage />} />
        <Route path="/EventDescription" element={<EventDescription />} />
      </Routes>
    </BrowserRouter>
  );
}
