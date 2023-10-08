import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AllSchemesPage from "./Pages/Schemes/All/allSchemes";
import EligibleSchemesPage from "./Pages/Schemes/Eligible/eligibleSchemes";
import Landing from "./Pages/Landing";
import StudentProfile from "./Pages/Profile/studentProfile";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CompanyLogin from "./Components/Login/CompanyLogin";
import Notification from "./Pages/Notification";
import PageNotFound from "./Pages/Default/PageNotFound";
import Protected from "./Pages/Default/Protected";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/schemes/all", element: <AllSchemesPage /> },
  {
    path: "/schemes/eligible",
    element: (
      <Protected>
        <EligibleSchemesPage />
      </Protected>
    ),
  },
  {
    path: "/profile/student",
    element: (
      <Protected>
        <StudentProfile />
      </Protected>
    ),
  },
  {
    path: "/notification",
    element: (
      <Protected>
        <Notification />
      </Protected>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/companylogin", element: <CompanyLogin /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
