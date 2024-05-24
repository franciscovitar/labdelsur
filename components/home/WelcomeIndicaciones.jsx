"use client";

import "../styles/_welcome.scss";
import { motion } from "framer-motion";
import Indicaciones from "./Indicaciones";
import { useState } from "react";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
function WelcomeIndicaciones({ setSearchTerm, searchTerm }) {
  const [indicaciones, setIndicaciones] = useState("");

  const getIndicaciones = (valor) => {
    setIndicaciones(valor);
  };

  const handleSearchClick = () => {
    setSearchTerm(indicaciones);
    window.scrollBy({
      top: 200, // ajusta esta cantidad según sea necesario
      behavior: "smooth",
    });
  };

  return (
    <div id="inicio" className="home-welcome indicaciones-welcome">
      <div className="contenedor">
        <motion.h2 {...textVariants}>INDICACIONES DE ESTUDIOS</motion.h2>
        <motion.input
          {...textVariants}
          type="text"
          placeholder="Buscar..."
          value={indicaciones}
          onChange={(e) => getIndicaciones(e.target.value)}
        />
        <motion.a {...textVariants} onClick={handleSearchClick}>
          Buscar
        </motion.a>
      </div>
    </div>
  );
}

export default WelcomeIndicaciones;
