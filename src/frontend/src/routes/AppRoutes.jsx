import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { RegisterEvent } from "../pages/RegisterEvent";
import { Home } from "../pages/Home";
import { MapPage } from "../pages/MapPage";
import { FilterEvent } from "../pages/FilterEvent";
import { ViewEvents } from "../pages/ViewEvents";
import Header from "../pages/Header/header";
import Footer from "../pages/Footer/footer";


export function AppRoutes() {
  return (
    <BrowserRouter basename="/cademeutime"> 
      <Header/>      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerEvent" element={<RegisterEvent />} />
        {/* A home será a rota padrão no mobile ao abrir. Por isso, deve ser a rota base -> '/' */}
        <Route path="/" element={<Home />} />
        <Route path="/mapPage" element={<MapPage />} />
        <Route path="/filterEvent" element={<FilterEvent />} />        
        <Route path="/ViewEvents" element={<ViewEvents />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
