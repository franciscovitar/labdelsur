"use client";

import React, { useState } from "react";
import BotonFlotante from "@/components/home/BotonFlotante";
import Contacto from "@/components/home/Contacto";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import NavBar from "@/components/home/Navbar";
import ObrasSociales from "@/components/home/ObrasSociales";
import Terminos from "@/components/home/Terminos";
import Coberturas from "@/components/home/Coberturas";
import WelcomeCoberturas from "@/components/home/WelcomeCoberturas";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main className="main">
      <Header />
      <NavBar />
      <WelcomeCoberturas
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <ObrasSociales />
      <Coberturas searchTerm={searchTerm} />
      <Contacto />
      <Terminos />
      <BotonFlotante />
      <Footer />
    </main>
  );
}
