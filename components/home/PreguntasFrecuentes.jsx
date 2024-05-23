import "../styles/_preguntasFrecuentes.scss";

function PreguntasFrecuentes({ searchTerm }) {
  const preguntasRespuestas = [
    {
      pregunta:
        "¿Cuáles son los días y horarios de atención? ¿Dónde nos encontramos?",
      respuesta: (
        <p
          dangerouslySetInnerHTML={{
            __html: `Atendemos de lunes a viernes de 7:30 a 18:00 hs y sábados de 7:30 a 13:00 hs.<br/><br/>Lab del Sur está ubicado en la calle Margarita Weild 1200, Lanús Este, Prov. de Buenos Aires (esquina Anatole France). <a href='https://www.google.com/maps/place/Laboratorio+DEL+SUR+An%C3%A1lisis+Cl%C3%ADnicos/@-34.709188,-58.390198,16z/data=!4m6!3m5!1s0x95bccd2349da42d1:0x5137a310ec6e1bbc!8m2!3d-34.7091885!4d-58.3901978!16s%2Fg%2F11bz__h1w4?hl=es-419&entry=ttu' target='_blank'>Haz clic aquí para ver el mapa</a>.`,
          }}
        />
      ),
    },

    {
      pregunta:
        "¿Cuál es el horario y días de extracción y entrega de muestras?",
      respuesta: "De 7:30 a 10:30 hs. de lunes a sábados.",
    },
    {
      pregunta: "¿Necesito sacar un turno para atenderme?",
      respuesta:
        "La atención en nuestro laboratorio es sin turno previo.\nPuede consultar si su cobertura requiere autorización previa para su atención remitiendo su orden y credencial por WhatsApp al 11-2771-4569.",
    },
    {
      pregunta: "¿Con qué obras sociales y prepagas trabajan?",
      respuesta:
        "Puede consultar la solapa Coberturas para conocer las obras sociales y prepagas con las que trabajamos.",
    },
    {
      pregunta:
        "¿Cómo puedo realizarme análisis si no cuento con obra social ni prepaga?",
      respuesta:
        "Si no posee obra social ni prepaga o la suya no está dentro de nuestras coberturas, puede solicitar un presupuesto particular enviando una foto de su orden por WhatsApp al 11-2771-4569 y le informaremos el importe y las formas de pago.",
    },
    {
      pregunta: "¿Cómo saber qué preparación necesito para mis análisis?",
      respuesta:
        "Puede consultar la solapa Indicaciones de Estudios para obtener información sobre sus análisis.\n\nAsimismo, puede recabar más información consultando por WhatsApp al 11-2771-4569 mediante el envío de su orden médica.",
    },
    {
      pregunta: "¿Cómo solicito un servicio a domicilio?",
      respuesta: "Lo puede solicitar por WhatsApp al 11-2771-4569.",
    },
    {
      pregunta:
        "¿Debo dejar de tomar mi medicación habitual para realizarme análisis?",
      respuesta:
        "Si la medicación que toma es para las tiroides y le piden estudios para el dosaje de las mismas, debe tomar la medicación del día luego de la extracción. En caso de que tome otras medicaciones, consulte con su médica/o cómo proceder.",
    },
    {
      pregunta: "¿Cómo obtener mis resultados?",
      respuesta:
        "Puede hacerlo de cualquiera de las siguientes formas:\n\nPresencial: Retire sus resultados de lunes a viernes de 14:00 a 18:00 hs. y sábados de 10:00 a 13:00 hs. en el Laboratorio.\n\nWeb: Descárguelos desde la solapa Resultados Online en cualquier momento siguiendo las instrucciones dadas en el papel de retiro.\n\nWhatsApp: Solicítelos al 11-2771-4569 informando el número de orden y su DNI.",
    },
    {
      pregunta: "¿Realizan test de embarazo?",
      respuesta:
        "Acércate a realizarte la extracción de sangre de lunes a viernes de 7:30 a 15:00 hs. y sábados de 7:30 a 11:00 hs. Te enviamos tu resultado en el día.",
    },
    {
      pregunta: "¿Realizan test rápido para FAUCES?",
      respuesta:
        "Acércate a realizarte el hisopado de lunes a viernes de 7:30 a 15:00 hs. Te enviamos tu resultado en el día.",
    },
    {
      pregunta:
        "¿Realizan hisopados para detección de COVID19 / SARSCOV 2? ¿Necesito orden médica?",
      respuesta:
        "Acércate a realizarte el hisopado de lunes a viernes de 7:30 a 15:00 hs. y sábados de 7:30 a 12:00 hs. Te enviamos tu resultado en el día.\n\n*Para PCR: Lunes a Viernes de 7:30 a 15:00 hs. No es necesario contar con orden médica. Solicitar mayor información.",
    },
    {
      pregunta: "¿Realizan anticuerpos / antígeno para DENGUE?",
      respuesta:
        "Acércate a realizarte la extracción de sangre de lunes a viernes de 8:00 a 15:00 hs. Te enviamos tu resultado en el día.",
    },
    {
      pregunta:
        "¿Hasta qué hora puedo realizar una curva de sobrecarga de glucosa?",
      respuesta:
        "Este análisis puede hacerse entre las 7.30 y 8.00 horas con 8 hs. de ayuno.",
    },
    {
      pregunta: "¿Realizan Grupo sanguíneo y Factor Rh?",
      respuesta:
        "Acércate a realizarte la extracción de sangre de lunes a sábados de 7:30 a 11:00 hs. Te enviamos tu resultado en el día.",
    },
    {
      pregunta: "¿Qué validez tienen las recetas?",
      respuesta:
        "SWISS MEDICAL, OSDEPYM: 90 días.\nOSDE, GALENO, OMINT: 60 días.\nPREVENCIÓN SALUD, OSMECON: 30 días.\nIOMA: 90 días desde su autorización.\nPAMI: Las Órdenes Médicas Electrónicas tienen una vigencia de 150 días.\n\nLa validez de las recetas varía según su cobertura. Puede consultar por WhatsApp al 11-2771-4569.",
    },
    {
      pregunta: "¿Puede retirar mis resultados otra persona?",
      respuesta:
        "Sí, se pueden retirar con el talón que se le entregó el día de la extracción o de la recepción de muestra.",
    },
  ];

  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const filteredPreguntasRespuestas = preguntasRespuestas.filter(
    (item) =>
      normalizeString(item.pregunta).includes(normalizeString(searchTerm)) ||
      normalizeString(item.respuesta).includes(normalizeString(searchTerm))
  );

  return (
    <div className="preguntas-frecuentes">
      {filteredPreguntasRespuestas.map((item, index) => (
        <div key={index}>
          <div className="preguntas-flex">
            <h4>{item.pregunta}</h4>
            <p>{item.respuesta}</p>
          </div>
          <div className="linea"></div>
        </div>
      ))}
    </div>
  );
}

export default PreguntasFrecuentes;
