import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Appointment from "./Appointment";
import Dasboard from "./Dasboard";
import Centers_and_Booking from "./Centers_and_Booking";
import Financial_Log from "./Financial_Log";

const Owner = () => {return(
      <Routes>
        <Route index element={<Navigate to="Appointment" replace />} />
        <Route path="Dashboard" element={<Dasboard />} />
        <Route path="Centers_and_Booking" element={<Centers_and_Booking />} />
        <Route path="Appointment" element={<Appointment />} />
        <Route path="Financial_Log" element={<Financial_Log />} />
      </Routes>
  );
};

export default Owner;