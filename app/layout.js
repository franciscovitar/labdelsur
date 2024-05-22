import { Jost } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "LabDelSur | Análisis Clínicos y Microbiológicos de Calidad en Lanús",
  description:
    "LabDelSur ofrece análisis clínicos y microbiológicos de baja, mediana y alta complejidad en Lanús. Servicios de hisopados, extracciones a domicilio, resultados online y atención a empresas e instituciones.",
  keywords: [
    "análisis clínicos",
    "análisis microbiológicos",
    "hisopados COVID-19",
    "extracciones a domicilio",
    "resultados online",
    "laboratorio Lanús",
    "exámenes pre ocupacionales",
    "servicios de salud",
    "calidad en análisis clínicos",
    "laboratorio microbiología",
    "atención personalizada",
    "test de antígenos",
    "cobertura obras sociales",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body translate="no" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
