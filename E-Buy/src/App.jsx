
import './App.css';
import Home from './Pages/Home';
import ProductPage from './Pages/Product-Page/Product';
import Checkout from './Pages/Checkout';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>

        <Route
          path="/Home"
          element={<Home  />}
        />
        <Route path="/product" element={<ProductPage  />} />
        <Route path="/Checkout" element={<Checkout  />} />

      </Routes>
    </Router>
  );
};

export default App;
