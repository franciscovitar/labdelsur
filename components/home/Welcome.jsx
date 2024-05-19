"use client";

import React from "react";
import "../styles/_welcome.scss";
import { motion } from "framer-motion";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Welcome() {
  return (
    <div id="inicio" className="home-welcome">
      <div className="contenedor">
        <motion.h2 {...textVariants}>
          Comprometidos con la salud de nuestros pacientes
        </motion.h2>
        <motion.p {...textVariants}>
          Reconocidos por ser sinónimo de calidad, responsabilidad y
          profesionalismo en el área. Brindamos un servicio rápido y confiable
          para nuestros pacientes.
        </motion.p>
      </div>
    </div>
  );
}

export default Welcome;
