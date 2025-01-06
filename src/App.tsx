import React, { useEffect, useState }                                                from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation }  from "react-router-dom";
import Home                                                               from "./pages/Home.tsx";
import TopBar                                                             from "./components/TopBar.tsx";
import Projects                                                           from "./pages/Projects.tsx";
import Socials                                                            from "./pages/Socials.tsx";

const App: React.FC = () => {
  return (
    <div>
      <TopBar/>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/socials" element={<Socials />} />
        
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

function AppWrapper() {
  return (
    <Router>
      <App/>
    </Router>
  )
}

export default AppWrapper;