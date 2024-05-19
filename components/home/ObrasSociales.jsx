"use client";

import React from "react";
import "../styles/_obrasSociales.scss";
import Image from "next/image";
import Galeno from "../../Images/galeno.png";
import Ioma from "../../Images/ioma.jpeg";
import Omint from "../../Images/omint.png";
import Osde from "../../Images/osde.png";
import Osdepym from "../../Images/osdepym.jpeg";
import Osmecon from "../../Images/osmecon.jpeg";
import Pami from "../../Images/pami.png";
import Sancor from "../../Images/sancor.png";
import Swiss from "../../Images/swiss_medical.png";
import Uta from "../../Images/uta.png";
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
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function ObrasSociales({ inicio }) {
  return (
    <div id="coberturas" className="obras-sociales">
      {inicio === "hola" ? (
        <motion.div {...textVariants} className="titulo">
          <h3>Atendemos más de 50 obras sociales</h3>
          <a target="blank" href="/obras-sociales">
            Ver todas
          </a>
        </motion.div>
      ) : null}

      <div className="obras-flex">
        <div className="obra-flex">
          <motion.div {...imageVariants}>
            <Image src={Galeno} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Ioma} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Omint} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Osde} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Osdepym} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Osmecon} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Pami} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Sancor} />
          </motion.div>
          <motion.div {...imageVariants}>
            <Image src={Swiss} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ObrasSociales;
