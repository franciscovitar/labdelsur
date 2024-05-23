import "../styles/_preguntasFrecuentes.scss";

function Indicaciones({ searchTerm }) {
  const indicaciones = [
    {
      pregunta: "¿Cuántas horas de ayuno necesito?",
      respuesta:
        "12 hs. de ayuno, cuando se analice: colesterol total, HDL, LDL, triglicéridos o hepatograma.\n8 hs. de ayuno para el resto de los análisis.\nCortisol y curva de glucemia: La extracción debe realizarse entre las 7:30 y las 8:00 AM con 8 hs de ayuno.\nProlactina: 8 hs de ayuno y concurrir al laboratorio con 2 horas de haberse levantado, sin haber hecho esfuerzo ni actividad física excepto que su médico/a le haya indicado otra preparación.",
    },
    {
      pregunta: "¿Cómo hacer la recolección de una orina de 24 horas?",
      respuesta:
        "Debe descartar la primera orina, luego recolectar todas las restantes durante 24 horas hasta la primera del día siguiente inclusive. La misma debe recolectarse en botellas de agua mineral y mantenerla refrigerada durante la recolección (2-8°C). Recuerde que es indispensable contar con el total de la orina recolectada en ese período.",
    },
    {
      pregunta: "¿Cómo recolectar la muestra de orina completa?",
      respuesta:
        "Para recolectar la muestra de sedimento u orina completa utilice el envase limpio con tapa y recolecte la primera orina de la mañana o en su defecto una orina con una retención mayor a 3 hs.",
    },
    {
      pregunta:
        "¿Cuál es la preparación y la muestra para sangre oculta en materia fecal?",
      respuesta:
        "Condiciones previas a la recolección de la muestra: Durante tres días consecutivos el/la paciente evitará comer carne roja y alimentos que contengan sangre. Deberá evitarse la ingestión de: rábanos, nabos y cacao. Los analgésicos y antirreumáticos no son aconsejables durante estos tres días. Al cuarto día debe recolectar en un frasco de boca ancha bien limpio y seco una porción de una deposición espontánea (no recolectar orina). Aclarar si el paciente sufre de hemorroides. Rotular con nombre y apellido. Si lo desea podrá retirar el frasco en el laboratorio presentando la orden medica del/la paciente.",
    },
    {
      pregunta:
        "¿Cuáles son las indicaciones para el análisis bacteriológico de orina? (Urocultivo)",
      respuesta:
        "Deberá recolectar la 1º orina de la mañana o en su defecto con retención de 3 hs como mínimo en un frasco estéril de boca ancha comprado en farmacia.\n\nIndicaciones:\n1) Higienice sus genitales con abundante agua y jabón.\n2) Enjuague bien toda la zona.\n3) Comience a orinar en el inodoro, y sin interrumpir la micción, recolectar el chorro medio en el frasco (llenar hasta medio frasco aprox.) Termine de orinar en el inodoro. Tapar inmediatamente el frasco y guardar en la heladera hasta su envío al laboratorio.\nAtención: Si Ud. es mujer o persona menstruante, colóquese un tampón vaginal para la recolección de muestra de orina.\nRemita al laboratorio el frasco (con datos del paciente) junto con la orden médica correspondiente.\nBebés, niños y/o adultos que no controlan esfínteres:\nDeberá recolectar la 1º orina de la mañana o en su defecto con retención de 3 hs como mínimo en un frasco estéril de boca ancha comprado en farmacia.\nIndicaciones:\n1) Higienice sus genitales con abundante agua y jabón.\n2) Enjuague bien toda la zona.\n3) Recoja orina al acecho en frasco estéril (una sola micción, no importa que la cantidad sea escasa). Tapar inmediatamente el frasco y conservar en heladera. Remita al laboratorio el frasco (con datos del paciente).\nPodrá retirar sin cargo el envase en el laboratorio.",
    },
    {
      pregunta:
        "¿Cuáles son las indicaciones para realizarme un análisis de Antígeno Prostático Específico (PSA)?",
      respuesta:
        "Ayuno de 8 hs. (si tiene otros estudios como hepatograma o colesteroles considere que esto puede modificarse). Abstinencia sexual al menos 48 hs. previas a la extracción. No haberse realizado en la semana previa tacto rectal o ecografía transrectal o biopsia. No haber realizado ejercicios sentado (como andar en bicicleta o a caballo) al menos 48 hs. previas a la extracción.",
    },
    {
      pregunta:
        "¿Cuáles son las indicaciones para realizarme un cultivo de flujo?",
      respuesta:
        "Durante las 72 hs. anteriores al estudio: no tomar antibióticos, no colocarse ningún tipo de crema, talco, óvulos, etc. no mantener relaciones sexuales no realizarse ecografías transvaginales no estar menstruando. El día del estudio: no utilizar bidet. Horario: de 7:30 a 10:30 hs.",
    },
    {
      pregunta: "¿Cuáles son las indicaciones para un estudio micológico?",
      respuesta:
        "Micológico de uñas: Suspender medicación antimicótica, por lo menos 10 días antes de la recolección. No se debe utilizar esmalte, talco, crema, aerosol, desinfectante, loción, etc. sobre la lesión por lo menos 3 días antes de la toma de muestra. Durante los 3 días previos a la toma, cepillar sus uñas con agua y jabón blanco por encima y por debajo de la lámina ungueal, al menos 3 veces al día. Evitar cortarlas desde la semana previa. Un día antes, hacer 3 baños con agua y sal. Preparados con una cuchara sopera de sal fina en un litro de agua previamente hervida y entibiada. Importante: si la lesión es en los pies, concurrir con calzado cerrado y medias.\n\nMicológico de lesiones en piel o cuero cabelludo: Suspender medicación antimicótica, por lo menos 10 días antes de la recolección. No utilizar talco, crema, aerosol, desinfectante, loción, etc. sobre la lesión por lo menos 3 días antes de la toma de muestra. Lavar la zona lesionada con jabón blanco o neutro, por lo menos 3 veces al día durante los 3 días previos a la toma de muestra. Importante: si la lesión es en los pies, concurrir con calzado cerrado y medias.",
    },
    {
      pregunta:
        "¿Debo dejar de tomar mi medicación habitual para realizar los estudios?",
      respuesta:
        "Si la medicación que toma es para las tiroides y le piden estudios para el dosaje de las mismas debe tomar la medicación del día luego de la extracción. En caso de que tome otras medicaciones consulte con su médica/o cómo proceder.",
    },
    {
      pregunta:
        "Me indicaron un análisis parasitológico o de coprocultivo, ¿Dónde debo retirar el material? ¿Cuáles son las indicaciones?",
      respuesta:
        "Deberá presentarse en el Laboratorio con la orden médica correspondiente. Las indicaciones específicas para la recolección de la muestra le serán proporcionadas junto con el material que necesitará para realizarla.",
    },
  ];

  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const filteredPreguntasRespuestas = indicaciones.filter(
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

export default Indicaciones;
