"use client";

import React from "react";
import "../styles/_preguntas.scss";

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

function Preguntas() {
  return (
    <div id="preguntas" className="preguntas">
      <motion.div {...imageVariants} className="titulo">
        <h3>Preguntas Frecuentes</h3>
        <a target="blank" href="/preguntas-frecuentes">
          Ver todas
        </a>
      </motion.div>
      <div className="linea"></div>
      <div className="texto-preguntas">
        <motion.div {...imageVariants}>
          <h5>¿Cómo obtener mis resultados?</h5>
          <p>
            Puede hacerlo de cualquiera de las siguientes formas:
            <br />
            Presencial: Retire sus resultados de lunes a viernes de 14:00 a
            18:00 hs. y sábados de 10:00 a 13:00 hs. en el Laboratorio.
            <br />
            Web: Descárguelos desde la solapa Resultados Online en cualquier
            momento siguiendo las instrucciones dadas en el papel de retiro.
            <br />
            WhatsApp: Solicítelos al 11-2771-4569 informando el número de orden
            y su DNI.
          </p>
        </motion.div>
        <motion.div {...imageVariants}>
          <h5>¿Cómo solicito un servicio a domicilio?</h5>
          <p>
            Lo puede solicitar por WhatsApp al{" "}
            <a href="https://api.whatsapp.com/send?phone=541127714569&text=Hola">
              11-2771-4569
            </a>
            .
          </p>
        </motion.div>
      </div>
      <div className="texto-preguntas">
        <motion.div {...imageVariants}>
          <h5>
            ¿Cuáles son los días y horarios de atención? ¿Dónde nos encontramos?
          </h5>
          <p>
            Atendemos de lunes a viernes de 7:30 a 18:00 hs y sábados de 7:30 a
            13:00 hs.
            <br />
            Lab del Sur está ubicado en la calle Margarita Weild 1200, Lanús
            Este, Prov. de Buenos Aires (esquina Anatole France).{" "}
            <a
              href="https://www.google.com/maps/place/Laboratorio+DEL+SUR+An%C3%A1lisis+Cl%C3%ADnicos/@-34.709188,-58.390198,16z/data=!4m6!3m5!1s0x95bccd2349da42d1:0x5137a310ec6e1bbc!8m2!3d-34.7091885!4d-58.3901978!16s%2Fg%2F11bz__h1w4?hl=es-419&entry=ttu"
              target="_blank"
            >
              Haz clic aquí para ver el mapa
            </a>
            .
          </p>
        </motion.div>
        <motion.div {...imageVariants}>
          <h5>¿Necesito sacar un turno para atenderme?</h5>
          <p>
            La atención en nuestro laboratorio es sin turno previo.
            <br />
            Puede consultar si su cobertura requiere autorización previa para su
            atención remitiendo su orden y credencial por WhatsApp al{" "}
            <a href="https://api.whatsapp.com/send?phone=541127714569&text=Hola">
              11-2771-4569.
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Preguntas;
