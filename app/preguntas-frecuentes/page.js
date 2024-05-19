"use client";

import React, { useState } from "react";

import BotonFlotante from "@/components/home/BotonFlotante";
import Contacto from "@/components/home/Contacto";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import NavBar from "@/components/home/Navbar";
import ObrasSociales from "@/components/home/ObrasSociales";
import PreguntasFrecuentes from "@/components/home/PreguntasFrecuentes";
import Terminos from "@/components/home/Terminos";
import WelcomePreguntas from "@/components/home/WelcomePreguntas";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="main">
      <Header />
      <NavBar />
      <WelcomePreguntas setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <PreguntasFrecuentes searchTerm={searchTerm} />
      <Contacto />
      <Terminos />
      <BotonFlotante />
      <Footer />
    </main>
  );
}
