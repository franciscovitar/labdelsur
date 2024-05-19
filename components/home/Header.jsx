"use client";

import React from "react";
import "../styles/_header.scss";
import { motion } from "framer-motion";

const textVariants = {
  viewport: { once: true },
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 1 },
  },
};

function Header() {
  return (
    <div className="header-up">
      <div className="left">
        <motion.a
          {...textVariants}
          target="blank"
          href="https://www.facebook.com/delsurlaboratorio"
        >
          <i className="bi bi-facebook"></i>
        </motion.a>
        <motion.a
          {...textVariants}
          target="blank"
          href="https://www.linkedin.com/company/laboratorio-del-sur/"
        >
          <i className="bi bi-linkedin"></i>
        </motion.a>
        <motion.a
          {...textVariants}
          target="blank"
          href="https://www.instagram.com/laboratoriodelsur/"
        >
          <i className="bi bi-instagram"></i>
        </motion.a>
      </div>
      <motion.div {...textVariants} className="right">
        <i className="bi bi-telephone"></i>
        <p>4225-0789 / 4249-8651</p>
      </motion.div>
    </div>
  );
}

export default Header;
