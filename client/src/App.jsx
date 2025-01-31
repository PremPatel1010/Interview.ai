import React from "react";
import AppRoute from "../routes/AppRoute";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import { UserProvider } from "../context/user.context";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <AppRoute />
          <Footer />
        </UserProvider>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
