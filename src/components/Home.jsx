import React from "react";
import dipanshu from "../assets/dipanshu.jpeg";
import myresume from "../assets/myresume.pdf";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Particles_BG from "./Particles";

const Home = () => {
  return (
    <div id="dipanshu" className="container-fluid p-0">
      <div className="container position-relative z-3 px-4 px-md-0">
        <div className="row pt-5 gap-5 gap-md-0 flex-column-reverse flex-md-row">
          <div className="col-12 col-md-8">
            <h1 data-aos="fade-down" data-aos-duration={1000}>
              Hi, <br />
              I'm <span className="text-primary">Dipanshu</span>
            </h1>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "MERN Developer",
                    "FrontEnd Developer",
                    "BackEnd Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <a
              data-aos="fade-up"
              data-aos-duration={1000}
              href={myresume}
              className="btn btn-primary mt-4 mt-md-5 px-auto py-auto px-md-4 py-md-3"
              target="_"
              download="./assets/myresume.pdf"
            >
              Download Resume
            </a>
            <div data-aos="fade-up" data-aos-duration={1000} className="links">
              <a
                className="textdecoration-none"
                href="https://github.com/BDX-Bisht"
                target="_blank"
              >
                <FaGithub size={30} />
              </a>
              <a
                className="text-decoration-none"
                href="https://www.linkedin.com/in/dipanshu-bisht-5b02b8279/"
                target="_blank"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                className="text-decoration-none"
                href="https://wa.link/wfd9gd"
                target="_blank"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-md-flex">
            <img
              data-aos="zoom-in"
              data-aos-duration={1000}
              src={dipanshu}
              alt={dipanshu}
            />
          </div>
        </div>
      </div>
      <Particles_BG />
    </div>
  );
};

export default Home;
