"use client";

import { useState } from "react";
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
function WelcomePreguntas({ setSearchTerm, searchTerm }) {
  const [preguntas, setPreguntas] = useState("");

  const getPreguntas = (valor) => {
    setPreguntas(valor);
  };

  const handleSearchClick = () => {
    setSearchTerm(preguntas);
    window.scrollBy({
      top: 200, // ajusta esta cantidad según sea necesario
      behavior: "smooth",
    });
  };

  return (
    <div id="inicio" className="home-welcome preguntas-welcome">
      <div className="contenedor">
        <motion.h2 {...textVariants}>PREGUNTAS FRECUENTES</motion.h2>
        <motion.input
          {...textVariants}
          type="text"
          placeholder="Buscar..."
          value={preguntas}
          onChange={(e) => getPreguntas(e.target.value)}
        />
        <motion.a {...textVariants} onClick={handleSearchClick}>
          Buscar
        </motion.a>
      </div>
    </div>
  );
}

export default WelcomePreguntas;
