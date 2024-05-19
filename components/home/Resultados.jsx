"use client";

import React from "react";
import "../styles/_resultados.scss";
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

function Resultados() {
  return (
    <div id="resultados" className="resultados">
      <motion.div {...imageVariants} className="titulos">
        <h3>Resultados online</h3>
        <h4>Accede desde aquí al portal de resultados</h4>
      </motion.div>

      <motion.div {...imageVariants} className="botones">
        <a
          target="blank"
          href="https://delsur.kernitcloud.com/#/login/paciente"
        >
          INGRESAR
        </a>
        <a
          target="blank"
          href="https://api.whatsapp.com/send/?phone=5491127714569&text=Hola&type=phone_number&app_absent=0"
        >
          Más Información
        </a>
      </motion.div>
    </div>
  );
}

export default Resultados;
