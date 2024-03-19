import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top py-3"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand px-4 px-md-0" href="#dipanshu">
          <FaLaptopCode /> <i> Dipanshu Bisht</i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#dipanshu"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
