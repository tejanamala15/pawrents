import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rehome from "./pages/Rehome";
import Aboutus from "./pages/Aboutus";
import Alldogs from "./pages/Alldogs";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Account from "./pages/Account";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="rehome" element={<Rehome />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/dogs" element={<Alldogs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account/:subpage?" element={<Account />} />
        <Route path="/account/:subpage/:action" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
