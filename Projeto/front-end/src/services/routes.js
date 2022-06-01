
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import SignIn from "../../src/pages/signIn/index";
import SignUp from "../../src/pages/signUp/index";
import Home from "../../src/pages/home/index";
import Maps from "../pages/maps/index";

const RoutesList = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/maps" element={<Maps />} />


    <Route path="*" element={<Home />} />
  </Routes>
);

export default RoutesList;
