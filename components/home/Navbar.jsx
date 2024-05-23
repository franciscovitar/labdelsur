"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../../Images/logo.png";
import Image from "next/image";
import "../styles/navBar.scss";
import Link from "next/link";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const bgDiv = useRef(null);
  const linksActive = useRef(null);

  const handleClick = () => {
    bgDiv.current.classList.toggle("active");
    linksActive.current.classList.toggle("d-flex");
    setClicked(!clicked);
  };

  const changeBg = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <nav className={navbar ? "navbar-container1" : "navbar-container2"}>
      <div className={navbar ? "navbar-bg" : "navbar-nobg"}>
        <div className="left">
          <motion.div
            className="logo"
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
          >
            <Link href="/">
              <div className="logo-banderas">
                <Image
                  className="logo_time"
                  src={Logo}
                  alt="Logo"
                  title="Logo"
                />
              </div>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="right"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
        >
          <div className="links">
            <a title="Nosotros" href="/#nosotros">
              Nosotros
            </a>
            <a title="Resultados" href="/#resultados">
              Resultados Online
            </a>

            <a title="Preguntas" href="/#preguntas">
              Preguntas Frecuentes
            </a>
            <a title="Indicaciones" href="/#indicaciones">
              Indicaciones
            </a>
            <a title="Obras sociales" href="/#coberturas">
              Coberturas
            </a>
          </div>
          <i
            type="button"
            onClick={handleClick}
            className={`bi  ${clicked ? "bi-x" : "bi-list"}`}
          ></i>
        </motion.div>
        <div ref={bgDiv} className="bg-div">
          <div ref={linksActive} className="links-active">
            <a onClick={handleClick} title="Nosotros" href="/#nosotros">
              Nosotros
            </a>
            <a onClick={handleClick} title="Resultados" href="/#resultados">
              Resultados Online
            </a>

            <a onClick={handleClick} title="Preguntas" href="/#preguntas">
              Preguntas Frecuentes
            </a>
            <a onClick={handleClick} title="Indicaciones" href="/#indicaciones">
              Indicaciones
            </a>
            <a onClick={handleClick} title="Obras sociales" href="/#coberturas">
              Coberturas
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
