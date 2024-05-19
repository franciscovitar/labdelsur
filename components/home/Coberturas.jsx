import "../styles/_preguntasFrecuentes.scss";

function Coberturas({ searchTerm }) {
  const coberturas = [
    { titulo: "GALENO", significado: "GALENO ARGENTINA" },
    { titulo: "IOMA", significado: "INSTITUTO OBRA MEDICO ASISTENCIAL" },
    { titulo: "OMINT", significado: "OMINT" },
    {
      titulo: "OSDE",
      significado: "ORGANIZACION DE SERVICIOS DIRECTOS EMPRESARIOS",
    },
    { titulo: "OSDEPYM", significado: "OBRA SOCIAL DE EMPRESARIOS" },
    {
      titulo: "OSMECON",
      significado: "OSMECON LOMAS DE ZAMORA Y ESTEBAN ECHEVERRIA",
    },
    {
      titulo: "PAMI",
      significado:
        "INSTITUTO NACIONAL DE SERVICIOS SOCIALES PARA JUBILADOS Y PENSIONADOS",
    },
    { titulo: "SANCOR", significado: "SANCOR SALUD" },
    { titulo: "SWISS MEDICAL", significado: "SWISS MEDICAL" },
    { titulo: "AMCI", significado: "ASOCIACION MUTUAL DEL CONTROL INTEGRAL" },
    {
      titulo: "AMEBPBA",
      significado:
        "ASOCIACION MUTUALISTA DE EMPLEADOS DEL BANCO DE LA PCIA. BS. AS.",
    },
    {
      titulo: "AMFFA",
      significado: "ASOCIACION MUTUAL FARMACEUTICOS FLORENTINO AMEGHINO",
    },
    { titulo: "AMS SALUD", significado: "AMSTERDAM SALUD" },
    { titulo: "ANDREANI", significado: "DEVELOP CONSULTING S.A." },
    {
      titulo: "APOC",
      significado: "ASOCIACION DEL PERSONAL DE LOS ORGANISMOS DE CONTROL",
    },
    {
      titulo: "APSOT",
      significado:
        "ASOCIACION DEL PERSONAL SUPERIOR DE LA ORGANIZACION TECHINT",
    },
    { titulo: "ASS", significado: "AGRUPACION SANATORIAL SUR" },
    {
      titulo: "ATGGBA",
      significado:
        "ASOCIACION DE TRABAJADORES DEL MINISTERIO DE GOB. Y DE LA GOBERNACION DE LA PCIA. DE BS. AS.",
    },
    { titulo: "AVALIAN - ACA", significado: "AVALIAN - ACA SALUD" },
    { titulo: "BRISTOL", significado: "EX FEMEBA AVELLANEDA" },
    {
      titulo: "CAJA NOTARIAL",
      significado: "CAJA NOTARIAL COMPLEMENTARIA DE SEGURIDAD SOCIAL",
    },
    { titulo: "CASA", significado: "CAJA DE ABOGADOS" },
    { titulo: "CEA", significado: "CONFERENCIA EPISCOPAL ARGENTINA" },
    { titulo: "CENTRO MEDICO PUEYRREDON", significado: "CMP CONURBANO" },
    {
      titulo: "COLEGIO DE FARMACEUTICOS",
      significado: "COLEGIO DE FARMACEUTICOS DE LA PCIA. DE BS. AS.",
    },
    { titulo: "COMEI", significado: "OBRA SOCIAL DE LA CAJA DE ODONTOLOGOS" },
    {
      titulo: "DASMI",
      significado:
        "DIRECCION DE ASISTENCIA SOCIAL Y MEDICINA INTEGRAL DE LA UNIVERSIDAD NACIONAL DE LUJAN",
    },
    { titulo: "ENSALUD", significado: "EN SALUD S.A." },
    {
      titulo: "ESCRIBANOS",
      significado:
        "CAJA DE SEGURIDAD SOCIAL PARA ESCRIBANOS DE LA PROVINCIA DE BUENOS AIRES",
    },
    { titulo: "FATFA", significado: "OBRA SOCIAL PERSONAL DE FARMACIA" },
    {
      titulo: "FEDERADA 25 DE JUNIO",
      significado: "MUTUAL FEDERADA 25 DE JUNIO",
    },
    { titulo: "FUTBOLISTAS", significado: "OBRA SOCIAL DE FUTBOLISTAS" },
    { titulo: "GRUPO SAN NICOLAS", significado: "GRUPO SAN NICOLAS" },
    {
      titulo: "IOSFA",
      significado: "INSTITUTO DE OBRA SOCIAL DEL EJERCITO - FUERZAS ARMADAS",
    },
    { titulo: "ISALUD", significado: "ISALUD" },
    { titulo: "JERARQUICOS", significado: "JERARQUICOS SALUD" },
    {
      titulo: "LUIS PASTEUR",
      significado:
        "OBRA SOCIAL DEL PERSONAL DE DIRECCION DE SANIDAD LUIS PASTEUR",
    },
    {
      titulo: "OPDEA",
      significado:
        "OBRA SOCIAL DEL PERSONAL DE DIRECCION DE EMPRESAS DE LA ALIMENTACION",
    },
    { titulo: "OSAP", significado: "OBRA SOCIAL ACEROS PARANA" },
    {
      titulo: "OSAPM",
      significado: "OBRA SOCIAL AGENTES DE PROPAGANDA MEDICA",
    },
    {
      titulo: "OSCTCP",
      significado:
        "OBRA SOCIAL DE CONDUCTORES DE TRANSPORTE COLECTIVO DE PASAJEROS",
    },
    { titulo: "OSDOP", significado: "OBRA SOCIAL DE DOCENTES PARTICULARES" },
    {
      titulo: "OSEIV",
      significado: "OBRA SOCIAL EMPLEADOS DE LA INDUSTRIA DEL VIDRIO",
    },
    {
      titulo: "OSEMM",
      significado: "OBRA SOCIAL EMPLEADOS DE LA MARINA MERCANTE",
    },
    {
      titulo: "OSFATLYF",
      significado: "OBRA SOCIAL FEDERACION ARGENTINA TRABAJADORES LUZ Y FUERZA",
    },
    {
      titulo: "OSFATUN",
      significado:
        "OBRA SOCIAL DE LA FEDERACION ARGENTINA DEL TRABAJADOR DE LAS UNIVERSIDADES NACIONALES",
    },
    { titulo: "OSFOT", significado: "OBRA SOCIAL DE FOTOGRAFOS" },
    {
      titulo: "OSIAD",
      significado:
        "OBRA SOCIAL PERSONAL DE LA INDUSTRIA ACEITERA, DESMOTADORA Y AFINES",
    },
    {
      titulo: "OSJERA",
      significado:
        "OBRA SOCIAL DEL PERSONAL JERARQUICO DE LA REPUBLlCA ARGENTINA",
    },
    {
      titulo: "OSPACP AUDISALUD",
      significado: "OBRA SOCIAL DEL PERSONAL AUXILIAR DE CASAS PARTICULARES",
    },
    {
      titulo: "OSPEDYC",
      significado: "OBRA SOCIAL DEL PERSONAL DE ENTIDADES DEPORTIVAS Y CIVILES",
    },
    {
      titulo: "OSPEPBA",
      significado:
        "OBRA SOCIAL DEL PERSONAL DE ESCRIBANIAS DE LA PCIA. DE BS. AS.",
    },
    {
      titulo: "OSPERYHRA",
      significado:
        "OBRA SOCIAL DEL PERSONAL DE EDIFICIOS DE RENTA Y HORIZONTALES DE LA REPÚBLICA ARGENTINA",
    },
    {
      titulo: "OSPESA",
      significado: "OBRA SOCIAL DEL PERSONAL SOCIEDADES DE AUTORES Y AFINES",
    },
    {
      titulo: "OSPIA CONURBANO",
      significado:
        "OBRA SOCIAL DEL PERSONAL DE LA INDUSTRIA DE LA ALIMENTACION",
    },
    {
      titulo: "OSPIL",
      significado: "OBRA SOCIAL DEL PERSONAL DE LA INDUSTRIA LECHERA",
    },
    {
      titulo: "OSPILM",
      significado:
        "OBRA SOCIAL DEL PERSONAL DE LA INDUSTRIA LADRILLERA A MAQUINA",
    },
    {
      titulo: "OSPIM",
      significado: "OBRA SOCIAL DEL PERSONAL DE LA INDUSTRIA MOLINERA",
    },
    {
      titulo: "OSPIM",
      significado: "OBRA SOCIAL DEL PERSONAL DE LA INDUSTRIA MADERERA",
    },
    { titulo: "OSPLAD", significado: "OBRA SOCIAL DE LOS DOCENTES" },
    {
      titulo: "OSPOCE",
      significado: "OBRA SOCIAL DEL PERSONAL DEL ORGANISMO DE CONTROL EXTERNO",
    },
    {
      titulo: "OSPPCYQ",
      significado: "OBRA SOCIAL DEL PERSONAL DEL PAPEL CARTON Y QUIMICOS",
    },
    {
      titulo: "OSPPRA",
      significado: "OBRA SOCIAL PERSONAL DE PRENSA DE LA REPUBLICA ARGENTINA",
    },
    { titulo: "OSPRERA", significado: "OSPRERA" },
    {
      titulo: "OSPSA / FATSA",
      significado: "OBRA SOCIAL DEL PERSONAL DE LA SANIDAD ARGENTINA",
    },
    { titulo: "OSPTV", significado: "OBRA SOCIAL DEL PERSONAL DE TELEVISION" },
    { titulo: "OSSEG", significado: "OBRA SOCIAL EMPLEADOS DE SEGUROS" },
    {
      titulo: "OSSIMRA",
      significado:
        "OBRA SOCIAL DE LOS SUPERVISORES DE LA INDUSTRIA METALMECANICA DE LA REPUBLlCA ARGENTINA",
    },
    {
      titulo: "OSVARA",
      significado:
        "OBRA SOCIAL VENDEDORES AMBULANTES DE LA REPUBLICA ARGENTINA",
    },
    {
      titulo: "PODER JUDICIAL",
      significado: "CORTE SUPREMA DE JUSTICIA OBRA SOCIAL DEL PODER JUDICIAL",
    },
    { titulo: "PREVENCION SALUD", significado: "PREVENCION SALUD S.A." },
    { titulo: "SABER SALUD", significado: "SABER SALUD" },
    {
      titulo: "SADAIC",
      significado:
        "OBRA SOCIAL DE LA SOCIEDAD ARGENTINA DE AUTORES Y COMPOSITORES",
    },
    { titulo: "SCIS", significado: "SCIS MEDICINA PRIVADA" },
    { titulo: "STAFF MEDICO", significado: "STAFF MEDICO S.A." },
    { titulo: "UNIMED", significado: "TIEMPO MEDICO" },
    { titulo: "UNO SALUD", significado: "UNO SALUD S. A." },
  ];
  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const filteredCoberturas = coberturas.filter(
    (item) =>
      normalizeString(item.titulo).includes(normalizeString(searchTerm)) ||
      normalizeString(item.significado).includes(normalizeString(searchTerm))
  );

  return (
    <div className="preguntas-frecuentes">
      {filteredCoberturas.map((item, index) => (
        <div key={index}>
          <div className="preguntas-flex">
            <h4>{item.titulo}</h4>
            <p>{item.significado}</p>
          </div>
          <div className="linea"></div>
        </div>
      ))}
    </div>
  );
}

export default Coberturas;
