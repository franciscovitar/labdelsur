"use client";

import React from "react";
import "../styles/_maps.scss";
import Image from "next/image";
import maps from "../../Images/image.png";
import { motion } from "framer-motion";

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0, x: 60 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Maps() {
  return (
    <div className="maps">
      <motion.div {...imageVariants} className="imagen">
        <a
          target="blank"
          href="https://www.google.com/maps/place/Laboratorio+DEL+SUR+An%C3%A1lisis+Cl%C3%ADnicos/@-34.709188,-58.390198,16z/data=!4m6!3m5!1s0x95bccd2349da42d1:0x5137a310ec6e1bbc!8m2!3d-34.7091885!4d-58.3901978!16s%2Fg%2F11bz__h1w4?hl=es-419&entry=ttu"
        >
          <Image src={maps} />
        </a>
      </motion.div>
      <div className="texto">
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-telephone"></i>
          <p>4225-0789 / 4249-8651</p>
        </motion.div>
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-chat-dots"></i>
          <a
            target="blank"
            href="https://api.whatsapp.com/send/?phone=5491127714569&text=Hola&type=phone_number&app_absent=0"
          >
            <p>11 2771 45 69</p>
          </a>
        </motion.div>
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-envelope"></i>
          <a target="blank" href="mailto:info@laboratoriodelsur.com.ar">
            <p>info@laboratoriodelsur.com.ar</p>
          </a>
        </motion.div>
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-clock"></i>
          <p>
            Lunes a Viernes 7:30 a 18:00 hs. / Sábados 7:30 a 13:00 hs.
            <br />
            Extracciones hasta 10:30 hs.
          </p>
        </motion.div>
        <motion.div {...textVariants} className="iconos">
          <i className="bi bi-geo-alt"></i>
          <p>
            Margarita Weild 1200 (esq. Anatole France)
            <br />
            Lanús Este, Prov. de Buenos Aires
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Maps;
