"use client";

import Image from "next/image";
import React from "react";
import nosotros from "../../Images/fachada.png";
import "../styles/_nosotros.scss";
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

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Nosotros() {
  return (
    <div id="nosotros" className="nosotros-container">
      <motion.div {...textVariants} className="titulo">
        <span>NOSOTROS</span>
        <h3>Calidad, responsabilidad y profesionalismo desde 1996.</h3>
      </motion.div>

      <div className="texto">
        <div className="parrafos">
          <motion.p {...textVariants}>
            Desde 1996 somos el laboratorio de análisis clínicos y microbiología
            referente en la zona.
          </motion.p>
          <motion.p {...textVariants}>
            Cuidamos a nuestros pacientes con calidez en la atención y ética
            profesional.
          </motion.p>
          <motion.p {...textVariants}>
            Formamos un grupo humano calificado que trabaja en equipo,
            cumpliendo con las tareas y objetivos planteados. Bajo la premisa de
            la capacitación y desarrollo profesional constante.
          </motion.p>
          <motion.p {...textVariants}>
            Nuestro compromiso reside en brindar un servicio de salud de
            excelencia, mediante la entrega de informes con resultados
            confiables y de calidad para nuestros pacientes y los profesionales
            de la salud.
          </motion.p>
          <motion.p {...textVariants}>
            Brindamos atención personalizada, en tiempo oportuno, procurando
            satisfacer las necesidades de nuestros pacientes con la
            incorporación de innovación y la mejora en la tecnología aplicada a
            nuestros procesos.
          </motion.p>
        </div>
        <motion.div {...imageVariants} className="imagen">
          <Image src={nosotros} />
        </motion.div>
      </div>
    </div>
  );
}

export default Nosotros;
