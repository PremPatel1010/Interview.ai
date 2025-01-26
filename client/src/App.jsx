import React from "react";
import AppRoute from "../routes/AppRoute";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </>
  );
};

export default App;
