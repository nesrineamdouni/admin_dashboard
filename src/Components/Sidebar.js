import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? "isActive" : "";
  };

  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2 d-flex align-items-center">
        <FontAwesomeIcon icon={faThList} className="me-2 fs-4" />
        <span className="brand-name fs-4">GRC</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <Link to="/" className={`list-group-item py-2 ${isActive("/")}`}>
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </Link>

        <Link
          to="/products"
          className={`list-group-item py-2 ${isActive("/products")}`}
        >
          <i className="bi bi-table fs-5 me-3"></i>
          <span>Products</span>
        </Link>

        <Link
          to="/customers"
          className={`list-group-item py-2 ${isActive("/customers")}`}
        >
          <i className="bi bi-people fs-5 me-3"></i>
          <span>Customers</span>
        </Link>

        <a className={`list-group-item py-2 ${isActive("/logout")}`}>
          <i className="bi bi-power fs-5 me-3"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
