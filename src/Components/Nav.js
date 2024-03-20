import React from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

function Nav({ Toggle }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <i
        className="navbar-brand bi bi-justify-left fs-4"
        style={{ color: "black" }}
        onClick={Toggle}
      ></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-justify" style={{ color: "black" }}></i>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "black", textAlign: "right" }}
            >
              Amdouni Nesrine
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownId"
            >
              <a
                className="dropdown-item"
                href="#"
                style={{ textAlign: "right" }}
              >
                Profile
              </a>
              <a
                className="dropdown-item"
                href="#"
                style={{ textAlign: "right" }}
              >
                Setting
              </a>
              <a
                className="dropdown-item"
                href="#"
                style={{ textAlign: "right" }}
              >
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
