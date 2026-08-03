import "../styles/_preguntasFrecuentes.scss";

function Coberturas({ searchTerm }) {
  const coberturas = [
    {
      titulo: "SERVICIO PENITENCIARIO FEDERAL",
      significado:
        "DIRECCIÓN DE OBRA SOCIAL DEL SERVICIO PENITENCIARIO FEDERAL",
    },
    { titulo: "GALENO", significado: "GALENO ARGENTINA" },
    { titulo: "IOMA", significado: "INSTITUTO OBRA MÉDICO ASISTENCIAL" },
    { titulo: "OMINT", significado: "OMINT" },
    {
      titulo: "OSDE",
      significado: "ORGANIZACIÓN DE SERVICIOS DIRECTOS EMPRESARIOS",
    },
    { titulo: "OSDEPYM", significado: "OBRA SOCIAL DE EMPRESARIOS" },
    {
      titulo: "OSMECON",
      significado: "OSMECON LOMAS DE ZAMORA Y ESTEBAN ECHEVERRÍA",
    },
    {
      titulo: "PAMI",
      significado:
        "INSTITUTO NACIONAL DE SERVICIOS SOCIALES PARA JUBILADOS Y PENSIONADOS",
    },
    { titulo: "SANCOR", significado: "SANCOR SALUD" },
    { titulo: "SWISS MEDICAL", significado: "SWISS MEDICAL" },
    { titulo: "AMCI", significado: "ASOCIACIÓN MUTUAL DEL CONTROL INTEGRAL" },
    {
      titulo: "AMEBPBA",
      significado:
        "ASOCIACIÓN MUTUALISTA DE EMPLEADOS DEL BANCO DE LA PCIA. BS. AS.",
    },
    {
      titulo: "AMFFA",
      significado: "ASOCIACIÓN MUTUAL FARMACÉUTICOS FLORENTINO AMEGHINO",
    },
    { titulo: "AMS SALUD", significado: "AMSTERDAM SALUD" },
    { titulo: "ANDREANI", significado: "DEVELOP CONSULTING S.A." },
    {
      titulo: "APOC",
      significado: "ASOCIACIÓN DEL PERSONAL DE LOS ORGANISMOS DE CONTROL",
    },
    {
      titulo: "APSOT",
      significado:
        "ASOCIACIÓN DEL PERSONAL SUPERIOR DE LA ORGANIZACIÓN TECHINT",
    },
    { titulo: "ASS", significado: "AGRUPACIÓN SANATORIAL SUR" },
    {
      titulo: "ATGGBA",
      significado:
        "ASOCIACIÓN DE TRABAJADORES DEL MINISTERIO DE GOB. Y DE LA GOBERNACIÓN DE LA PCIA. DE BS. AS.",
    },
    { titulo: "AVALIAN - ACA", significado: "AVALIAN - ACA SALUD" },
    { titulo: "BRISTOL", significado: "EX FEMEBA AVELLANEDA" },
    {
      titulo: "CAJA NOTARIAL",
      significado: "CAJA NOTARIAL COMPLEMENTARIA DE SEGURIDAD SOCIAL",
    },
    { titulo: "CASA", significado: "CAJA DE ABOGADOS" },
    { titulo: "CEA", significado: "CONFERENCIA EPISCOPAL ARGENTINA" },
    { titulo: "CENTRO MÉDICO PUEYRREDÓN", significado: "CMP CONURBANO" },
    {
      titulo: "COLEGIO DE FARMACÉUTICOS",
      significado: "COLEGIO DE FARMACÉUTICOS DE LA PCIA. DE BS. AS.",
    },
    { titulo: "COMEI", significado: "OBRA SOCIAL DE LA CAJA DE ODONTÓLOGOS" },
    {
      titulo: "DASMI",
      significado:
        "DIRECCIÓN DE ASISTENCIA SOCIAL Y MEDICINA INTEGRAL DE LA UNIVERSIDAD NACIONAL DE LUJÁN",
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
    { titulo: "GRUPO SAN NICOLÁS", significado: "GRUPO SAN NICOLÁS" },
    { titulo: "HOMINIS", significado: "HOMINIS" },
    {
      titulo: "IOSFA",
      significado: "INSTITUTO DE OBRA SOCIAL DEL EJÉRCITO - FUERZAS ARMADAS",
    },
    { titulo: "ISALUD", significado: "ISALUD" },
    { titulo: "JERÁRQUICOS", significado: "JERÁRQUICOS SALUD" },
   {
  titulo: "LUIS PASTEUR",
  significado:
    "OBRA SOCIAL DEL PERSONAL DE DIRECCIÓN DE SANIDAD LUIS PASTEUR",
},
{
  titulo: "MEDICUS",
  significado: "MEDICUS S.A. DE ASISTENCIA MÉDICA Y CIENTÍFICA",
},
{
  titulo: "OPDEA",
  significado:
    "OBRA SOCIAL DEL PERSONAL DE DIRECCIÓN DE EMPRESAS DE LA ALIMENTACIÓN",
},
    { titulo: "OSAP", significado: "OBRA SOCIAL ACEROS PARANÁ" },
    {
      titulo: "OSAPM",
      significado: "OBRA SOCIAL AGENTES DE PROPAGANDA MÉDICA",
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
      significado: "OBRA SOCIAL FEDERACIÓN ARGENTINA TRABAJADORES LUZ Y FUERZA",
    },
    {
      titulo: "OSFATUN",
      significado:
        "OBRA SOCIAL DE LA FEDERACIÓN ARGENTINA DEL TRABAJADOR DE LAS UNIVERSIDADES NACIONALES",
    },
    { titulo: "OSFOT", significado: "OBRA SOCIAL DE FOTÓGRAFOS" },
    {
      titulo: "OSIAD",
      significado:
        "OBRA SOCIAL PERSONAL DE LA INDUSTRIA ACEITERA, DESMOTADORA Y AFINES",
    },
    {
      titulo: "OSJERA",
      significado:
        "OBRA SOCIAL DEL PERSONAL JERÁRQUICO DE LA REPÚBLICA ARGENTINA",
    },
    { titulo: "OSRJA", significado: "OBRA SOCIAL DE RELOJEROS Y JOYEROS" },
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
        "OBRA SOCIAL DEL PERSONAL DE ESCRIBANÍAS DE LA PCIA. DE BS. AS.",
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
        "OBRA SOCIAL DEL PERSONAL DE LA INDUSTRIA DE LA ALIMENTACIÓN",
    },
    {
      titulo: "OSPIL",
      significado: "OBRA SOCIAL DEL PERSONAL DE LA INDUSTRIA LECHERA",
    },
    {
      titulo: "OSPILM",
      significado:
        "OBRA SOCIAL DEL PERSONAL DE LA INDUSTRIA LADRILLERA A MÁQUINA",
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
      significado: "OBRA SOCIAL DEL PERSONAL DEL PAPEL CARTÓN Y QUÍMICOS",
    },
    {
      titulo: "OSPPRA",
      significado: "OBRA SOCIAL PERSONAL DE PRENSA DE LA REPÚBLICA ARGENTINA",
    },
    { titulo: "OSPRERA", significado: "OSPRERA" },
    {
      titulo: "OSPSA / FATSA",
      significado: "OBRA SOCIAL DEL PERSONAL DE LA SANIDAD ARGENTINA",
    },
    { titulo: "OSPTV", significado: "OBRA SOCIAL DEL PERSONAL DE TELEVISIÓN" },
    { titulo: "OSSEG", significado: "OBRA SOCIAL EMPLEADOS DE SEGUROS" },
    {
      titulo: "OSSIMRA",
      significado:
        "OBRA SOCIAL DE LOS SUPERVISORES DE LA INDUSTRIA METALMECÁNICA DE LA REPÚBLICA ARGENTINA",
    },
    {
      titulo: "OSVARA",
      significado:
        "OBRA SOCIAL VENDEDORES AMBULANTES DE LA REPÚBLICA ARGENTINA",
    },
    {
      titulo: "PODER JUDICIAL",
      significado: "CORTE SUPREMA DE JUSTICIA OBRA SOCIAL DEL PODER JUDICIAL",
    },
    { titulo: "PREVENCIÓN SALUD", significado: "PREVENCIÓN SALUD S.A." },
    { titulo: "SABER SALUD", significado: "SABER SALUD" },
    {
      titulo: "SADAIC",
      significado:
        "OBRA SOCIAL DE LA SOCIEDAD ARGENTINA DE AUTORES Y COMPOSITORES",
    },
    { titulo: "SCIS", significado: "SCIS MEDICINA PRIVADA" },
    { titulo: "STAFF MÉDICO", significado: "STAFF MÉDICO S.A." },
    {
      titulo: "UTA",
      significado:
        "OBRA SOCIAL DE CONDUCTORES DE TRANSPORTE COLECTIVO DE PASAJEROS",
    },
    { titulo: "UNIMED", significado: "TIEMPO MÉDICO" },
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
      normalizeString(item.significado).includes(normalizeString(searchTerm)),
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
