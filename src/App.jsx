import "./App.css";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Settings } from "./pages/Settings";
import { Profile } from "./pages/Profile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth login />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
