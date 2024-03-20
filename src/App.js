import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Components/Sidebar";
import Products from "./Components/Products";
import Customers from "./Components/Customers";
import Home from "./Components/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <BrowserRouter>
      <div
        className="container-fluid min-vh-100"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="row">
          {toggle && (
            <div className="col-12 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar />
            </div>
          )}

          <div
            className={toggle ? "col-12 col-md-2 d-none d-md-block" : ""}
          ></div>

          <div className={toggle ? "col-12 col-md-10" : "col-12"}>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products Toggle={Toggle} />} />
              <Route
                path="/customers"
                element={<Customers Toggle={Toggle} />}
              />
              <Route path="/" element={<Home Toggle={Toggle} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

function Profile() {
  return <h2>Home component</h2>;
}
