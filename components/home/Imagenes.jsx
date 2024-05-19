"use client";

import Image from "next/image";
import React from "react";
import Lab from "../../Images/lab_acreditado.png";
import Peec from "../../Images/peec.png";
import { motion } from "framer-motion";

import "../styles/_imagenes.scss";

const imageVariants = {
  viewport: { once: true },
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

function Imagenes() {
  return (
    <div className="imagenes-container">
      <motion.div {...imageVariants}>
        <Image src={Lab} />
      </motion.div>
      <motion.div {...imageVariants}>
        <Image src={Peec} />
      </motion.div>
    </div>
  );
}

export default Imagenes;
