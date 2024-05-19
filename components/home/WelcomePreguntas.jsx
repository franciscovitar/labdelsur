"use client";

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
  return (
    <div id="inicio" className="home-welcome">
      <div className="contenedor">
        <motion.h2 {...textVariants}>PREGUNTAS FRECUENTES</motion.h2>
        <motion.input
          {...textVariants}
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default WelcomePreguntas;
