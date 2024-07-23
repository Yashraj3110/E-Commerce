
import './App.css';
import Home from './Pages/Home';
import ProductPage from './Pages/Product-Page/Product';
import Checkout from './Pages/Checkout';
import AdminDashboard from './Pages/Admin-Board/Dashboard';
import Collection from './Pages/Collection';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Admin" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
};

export default App;
