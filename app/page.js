import BotonFlotante from "@/components/home/BotonFlotante";
import Contacto from "@/components/home/Contacto";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Imagenes from "@/components/home/Imagenes";
import Maps from "@/components/home/Maps";
import NavBar from "@/components/home/Navbar";
import Nosotros from "@/components/home/Nosotros";
import ObrasSociales from "@/components/home/ObrasSociales";
import Preguntas from "@/components/home/Preguntas";
import Resultados from "@/components/home/Resultados";
import Servicios from "@/components/home/Servicios";
import Terminos from "@/components/home/Terminos";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <NavBar />
      <Welcome />
      <Servicios />
      <Maps />
      <Preguntas />
      <ObrasSociales inicio="hola" />
      <Nosotros />
      <Imagenes />
      <Resultados />
      <Contacto />
      <Terminos />
      <BotonFlotante />
      <Footer />
    </main>
  );
}
