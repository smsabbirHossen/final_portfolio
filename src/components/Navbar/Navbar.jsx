import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { menu, close } = images;

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img className="nav-logo" src={images.logo} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}

              <button>
                <a href="/cv.pdf" download="cv">
                  Download CV
                </a>
              </button>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
