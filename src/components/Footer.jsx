import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="d-flex position-relative flex-column align-items-center gap-4 mt-5 py-5">
      <h1>
        <i>Dipanshu Bisht</i>
      </h1>
      <div className="d-flex gap-4">
        <a
          className="textdecoration-none"
          href="https://github.com/BDX-Bisht"
          target="_blank"
        >
          <FaGithub size={20} />
        </a>
        <a
          className="text-decoration-none"
          href="https://www.linkedin.com/in/dipanshu-bisht-5b02b8279/"
          target="_blank"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          className="text-decoration-none"
          href="https://wa.link/wfd9gd"
          target="_blank"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
      <p className="mb-0">
        © {new Date().getFullYear()} Copyright. All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
