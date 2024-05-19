"use client";

import React from "react";
import "../styles/_servicios.scss";
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

function Servicios() {
  return (
    <div className="servicios">
      <motion.div {...textVariants} className="servicio">
        <span>REALIZAMOS</span>
        <h3>Análisis clínicos y microbiológicos</h3>
        <p>
          De baja, mediana y alta complejidad. Estudios bacteriológicos,
          biología molecular, marcadores oncológicos y estudios genómicos.
        </p>
      </motion.div>
      <div className="servicio-flex">
        <div className="servicio">
          <motion.div {...textVariants}>
            <h4>
              <i className="bi bi-check2"></i>Hisopados
            </h4>
            <p className="ms-3">
              Realizamos testeos para detectar COVID-19, Influenza A y B y
              Estreptococo Beta Hemolítico.
            </p>
          </motion.div>
          <motion.div {...textVariants}>
            <h4>
              <i className="bi bi-check2"></i>Extracciones a domicilio
            </h4>
            <p className="ms-3">
              Ofrecemos extracciones a domicilio para que no tenga que salir de
              su casa. Solicite su turno online{" "}
              <a href="https://api.whatsapp.com/send?phone=541127714569&text=Hola">
                aquí
              </a>
            </p>
          </motion.div>
        </div>
        <div className="servicio">
          <motion.div {...textVariants}>
            <h4>
              <i className="bi bi-check2"></i>Resultados online
            </h4>
            <p className="ms-3">
              Reciba sus resultados de forma rápida y segura a través del
              siguiente{" "}
              <a href="https://delsur.kernitcloud.com/#/login/paciente">
                sitio
              </a>
              .
            </p>
          </motion.div>
          <motion.div {...textVariants}>
            <h4>
              <i className="bi bi-check2"></i>Empresas e instituciones
            </h4>
            <p className="ms-3">
              Atención y asesoramiento a empresas e instituciones, exámenes pre
              ocupacionales, anuales y otros servicios. <br />
              Consultanos{" "}
              <a href="mailto:info@laboratoriodelsur.com.ar">
                info@labdelsur.com.ar.
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
