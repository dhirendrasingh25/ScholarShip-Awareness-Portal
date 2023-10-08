import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllSchemesPage from "./Pages/Schemes/All/allSchemes";
import EligibleSchemesPage from "./Pages/Schemes/Eligible/eligibleSchemes";
import Landing from "./Pages/Landing";
import StudentProfile from "./Pages/Profile/studentProfile";
// import AllScemesPage from "./Pages/Schemes/All/allSchemes.js"
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CompanyLogin from "./Components/Login/CompanyLogin";
import Notification from "./Pages/Notification";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/schemes/all" element={<AllSchemesPage />} />
        <Route path="/schemes/eligible" element={<EligibleSchemesPage />} />
        <Route path="/profile/student" element={<StudentProfile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/companylogin" element={<CompanyLogin />} />

        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
