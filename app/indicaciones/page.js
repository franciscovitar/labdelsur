"use client";

import React, { useState } from "react";

import BotonFlotante from "@/components/home/BotonFlotante";
import Contacto from "@/components/home/Contacto";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import NavBar from "@/components/home/Navbar";
import Terminos from "@/components/home/Terminos";
import Indicaciones from "@/components/home/Indicaciones";
import WelcomeIndicaciones from "@/components/home/WelcomeIndicaciones";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="main">
      <Header />
      <NavBar />
      <WelcomeIndicaciones
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <Indicaciones searchTerm={searchTerm} />
      <Contacto />
      <Terminos />
      <BotonFlotante />
      <Footer />
    </main>
  );
}
