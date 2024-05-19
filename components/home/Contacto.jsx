"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../Images/logo.png";
import "../styles/_contacto.scss";
import { motion } from "framer-motion";

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Contacto() {
  return (
    <>
      <div className="contacto">
        <motion.div {...imageVariants} className="imagen">
          <Image src={Logo} />
        </motion.div>
        <motion.div {...imageVariants} className="links">
          <a href="#nosotros">Nosotros</a>
          <a href="https://delsur.kernitcloud.com/#/login/paciente">
            Resultados Online
          </a>
          <a href="/preguntas-frecuentes">Preguntas Frecuentes</a>
          <a href="/obras-sociales">Coberturas</a>
        </motion.div>
        <motion.div {...imageVariants} className="iconos">
          <a target="blank" href="https://www.facebook.com/delsurlaboratorio">
            <i className="bi bi-facebook"></i>
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/company/laboratorio-del-sur/"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a target="blank" href="https://www.instagram.com/laboratoriodelsur/">
            <i className="bi bi-instagram"></i>
          </a>
        </motion.div>
      </div>
      <div className="linea"></div>
    </>
  );
}

export default Contacto;
