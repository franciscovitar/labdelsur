"use client";

import React from "react";
import "../styles/_indicacion.scss";

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

function Indicacion() {
  return (
    <div id="indicaciones" className="indicacion">
      <motion.div {...imageVariants} className="titulo">
        <h3>Indicaciones de estudios</h3>
        <a target="blank" href="/indicaciones">
          Ver todos
        </a>
      </motion.div>
      <div className="linea"></div>
      <div className="texto-preguntas">
        <motion.div {...imageVariants}>
          <h5>¿Cuántas horas de ayuno necesito?</h5>
          <p>
            12 hs. de ayuno, cuando se analice: colesterol total, HDL, LDL,
            triglicéridos o hepatograma. <br />8 hs. de ayuno para el resto de
            los análisis.
            <br />
            Cortisol y curva de glucemia: La extracción debe realizarse entre
            las 7:30 y las 8:00 AM con 8 hs de ayuno. <br />
            Prolactina: 8 hs de ayuno y concurrir al laboratorio con 2 horas de
            haberse levantado, sin haber hecho esfuerzo ni actividad física
            excepto que su médico/a le haya indicado otra preparación.
          </p>
        </motion.div>
        <motion.div {...imageVariants}>
          <h5>¿Cómo hacer la recolección de una orina de 24 horas?</h5>
          <p>
            Debe descartar la primera orina, luego recolectar todas las
            restantes durante 24 horas hasta la primera del día siguiente
            inclusive. La misma debe recolectarse en botellas de agua mineral y
            mantenerla refrigerada durante la recolección (2-8°C). Recuerde que
            es indispensable contar con el total de la orina recolectada en ese
            período.
          </p>
        </motion.div>
      </div>
      <div className="texto-preguntas">
        <motion.div {...imageVariants}>
          <h5>¿Cómo recolectar la muestra de orina completa?</h5>
          <p>
            Para recolectar la muestra de sedimento u orina completa utilice un
            envase limpio con tapa y recolecte la primera orina de la mañana o
            en su defecto una orina con una retención mayor a 3 hs.
          </p>
        </motion.div>
        <motion.div {...imageVariants}>
          <h5>
            ¿Debo dejar de tomar mi medicación habitual para realizar los
            estudios?
          </h5>
          <p>
            Si la medicación que toma es para las tiroides y le piden estudios
            para el dosaje de las mismas debe tomar la medicación del día luego
            de la extracción. En caso de que tome otras medicaciones consulte
            con su médica/o cómo proceder.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Indicacion;
