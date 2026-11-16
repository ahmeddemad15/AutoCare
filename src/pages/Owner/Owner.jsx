import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Appointment from "./Appointment";
import Dasboard from "./Dasboard";
import Centers_and_Booking from "./Centers_and_Booking";
import Financial_Log from "./Financial_Log";
import Owner_Nav from "./components/Owner_Nav";

const Owner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#0d1528] px-6 pb-10 pt-9">
      <div className="max-w-6xl mx-auto">
        <div className="mx-auto max-w-[1425px]">
          <div className="mb-[22px] mt-14">
            <h1 className="font-['Tajawal','Cairo',sans-serif] text-5xl font-bold leading-tight text-[#F0F9FF]">
              Driver Control Hub
            </h1>
            <p className="mt-2 text-[18px] font-normal text-[#94A3B8]">
              Manage vehicles, book workshop slots, and inspect immutable
              expense reports.
            </p>
          </div>
          <Owner_Nav basePath="/Owner" />

          <div className="mt-8">
            <Routes>
              <Route index element={<Navigate to="Dashboard" replace />} />
              <Route path="Dashboard" element={<Dasboard />} />
              <Route
                path="Centers_and_Booking"
                element={<Centers_and_Booking />}
              />
              <Route path="Appointment" element={<Appointment />} />
              <Route path="Financial_Log" element={<Financial_Log />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
