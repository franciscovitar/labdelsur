import "../styles/_preguntasFrecuentes.scss";

function PreguntasFrecuentes({ searchTerm }) {
  const preguntasRespuestas = [
    {
      pregunta: "¿Cómo obtener mis resultados?",
      respuesta:
        "Puede retirar sus resultados de lunes a viernes de 14:00 a 18:00 hs., sábados de 10:00 a 13:00 hs. o bien descargarlos a través del portal en cualquier momento.",
    },
    {
      pregunta: "¿Cómo solicito un servicio a domicilio?",
      respuesta:
        "Lo puede solicitar a nuestro asistente virtual haciendo click aquí.",
    },
    {
      pregunta: "¿Cuáles son los horarios de atención y la ubicación?",
      respuesta:
        "Atendemos de lunes a viernes de 7:30 a 18:00 hs y sábados de 7:30 a 13:00 hs.\n Las extracciones son hasta las 10:30 hs.\n Estamos en Margarita Weild 1200, Lanús Este, Prov. de Buenos Aires.",
    },
    {
      pregunta: "Horarios de hisopado COVID19",
      respuesta:
        "Sin turno. Hisopados PCR de lunes a viernes de 11:00 a 15:00 hs. Test de antígenos de lunes a viernes de 11:00 a 15:00 hs. y sábados de 9:00 a 12:00 hs.",
    },
    {
      pregunta:
        "¿Cómo puedo realizarme estudios si no cuento con obra social ni prepaga?",
      respuesta:
        "Si no posee obra social ni prepaga o la suya no está dentro de coberturas, puede enviar una foto de su orden por whatsapp al 11-2771-4569 y le informaremos el importe y formas de pago.",
    },
    {
      pregunta: "¿Cómo hacer la recolección de una orina de 24 horas?",
      respuesta:
        "Debe descartar la primera orina, luego recolectar todas las restantes durante 24 horas hasta la primera del día siguiente inclusive. La misma debe recolectarse en botellas de agua mineral. Recuerde que es indispensable contar con el total de la orina recolectada en ese período.",
    },
    {
      pregunta: "¿Cómo recolectar la muestra de orina completa?",
      respuesta:
        "Para recolectar la muestra de sedimento u orina completa utilice el envase limpio que prefiera y recolecte la primera orina de su mañana o en su defecto una orina con 4 hs. de retención previas.",
    },
    {
      pregunta: "¿Con qué Obras sociales y prepagas trabajan?",
      respuesta:
        "Puede consultar las coberturas en la solapa de 'Obras Sociales'.",
    },
    {
      pregunta: "¿Cuál es el horario y días de atención?",
      respuesta:
        "Atención de 7:30 a 18:00 hs. de lunes a viernes y sábados de 7:30 a 13:00 hs.",
    },
    {
      pregunta:
        "¿Cuál es el horario y días de extracción y entrega de muestras?",
      respuesta: "De 7:30 a 10:00 hs. de lunes a sábados.",
    },
    {
      pregunta:
        "¿Cuál es la preparación y la muestra para sangre oculta en materia fecal?",
      respuesta:
        "Condiciones previas a la recolección de la muestra:\n Durante tres días consecutivos el/la paciente evitará comer carne roja y alimentos que contengan sangre.\n Deberá evitarse la ingestión de: rábanos, nabos y cacao.\n Los analgésicos y antirreumáticos no son aconsejables durante estos tres días.\n Al cuarto día debe recolectar en un frasco de boca ancha bien limpio y seco una porción de una deposición espontánea (no recolectar orina).\n Aclarar si el paciente sufre de hemorroides. Rotular con nombre y apellido.\n Si lo desea podrá retirar el frasco en el laboratorio presentando la orden medica del/la paciente.",
    },
    {
      pregunta:
        "¿Cuáles son las indicaciones para el análisis bacteriológico de orina? (Urocultivo)",
      respuesta:
        "Para mujeres o personas con vulva:\nRecolectar la primera orina de la mañana o en su defecto la orina con una retención no menor a tres horas.\na) Se practicará un cuidadoso lavado de la zona genital con abundante agua y jabón.\nb) Secar con una toalla limpia y planchada, o con toallitas descartables.\nc) Taponar el orificio vaginal con algodón o con un tampón vaginal.\nd) Separar los labios y orinar desechando el primer chorro de la micción.\ne) Recolectar la porción media de la micción en un frasco estéril.\nf) Tapar el frasco, rotular con nombre y apellido. Guardar en la heladera hasta su envío al laboratorio.\n\nPara hombres o personas con pene:\nRecolectar la primera orina de la mañana o en su defecto la orina con una retención no menor a tres horas.\na) Se practicará un cuidadoso lavado del pene con abundante agua y jabón.\nb) Secar con una toalla limpia y planchada, o con toallitas descartables.\nc) Rebatir el prepucio y orinar, desechando el primer chorro de la micción.\nd) Recolectar la porción media de la micción en un frasco estéril.\ne) Tapar el frasco, rotular con nombre y apellido. Guardar en la heladera hasta su envío al laboratorio.\n\nBebés, niños y/o adultos que no controlan esfínteres:\n- Higienizar muy bien los genitales externos con agua y jabón.\n- Recoger orina al acecho en frasco estéril (una sola micción, no importa que la cantidad sea escasa). Tapar inmediatamente el frasco y conservar en heladera.\nPodrá retirar sin cargo el envase en el laboratorio presentando la orden medica del/la paciente.",
    },
    {
      pregunta:
        "¿Cuáles son las indicaciones para realizarme un análisis de Antígeno Prostático Específico (PSA)?",
      respuesta:
        "Ayuno de 8 hs. (si tiene otros estudios como hepatograma o colesteroles considere que esto puede modificarse).\n Abstinencia sexual al menos 48 hs. previas a la extracción.\n No haberse realizado en la semana previa tacto rectal o ecografía transrectal o biopsia.\n No haber realizado ejercicios sentado (como andar en bicicleta o a caballo) al menos 48 hs. previas a la extracción.",
    },
    {
      pregunta:
        "¿Cuáles son las indicaciones para realizarme un cultivo de flujo?",
      respuesta:
        "Durante las 72 hs. anteriores al estudio:\n\n no tomar antibióticos,\n no colocarse ningún tipo de crema, talco, óvulos, etc.\n no mantener relaciones sexuales\n no realizarse ecografías transvaginales\n no estar menstruando.\n\n El día del estudio: no utilizar bidet.",
    },
    {
      pregunta: "¿Cuáles son las indicaciones para un estudio micológico?",
      respuesta:
        "Micologico de uñas:\nSuspender medicación antimicótica, por lo menos 10 días antes de la recolección. No se debe utilizar esmalte, talco, crema, aerosol, desinfectante, loción, etc. sobre la lesión por lo menos 3 días antes de la toma de muestra. Durante los 3 días previos a la toma, cepillar sus uñas con agua y jabón blanco por encima y por debajo de la lámina ungueal, al menos 3 veces al día. Evitar cortarlas desde la semana previa. Un día antes, hacer 3 baños con agua y sal. Preparados con una cuchara sopera de sal fina en un litro de agua previamente hervida y entibiada. Importante: si la lesión es en los pies, concurrir con calzado cerrado y medias.\n\nMicologico de lesiones en piel o cuero cabelludo:\nSuspender medicación antimicótica, por lo menos 10 días antes de la recolección. No utilizar talco, crema, aerosol, desinfectante, loción, etc. sobre la lesión por lo menos 3 días antes de la toma de muestra. Lavar la zona lesionada con jabón blanco o neutro, por lo menos 3 veces al día durante los 3 días previos a la toma de muestra. Importante: si la lesión es en los pies, concurrir con calzado cerrado y medias.",
    },
    {
      pregunta: "¿Cuántas horas de ayuno necesito?",
      respuesta:
        "12 hs. de ayuno, cuando se analice: colesterol total, HDL, LDL, triglicéridos o hepatograma.\n 8 hs. de ayuno para el resto de los análisis.\n Cortisol y curva de glucemia: La extracción debe realizarse entre las 7:30 y las 8:00 AM con 8 hs de ayuno.\n Prolactina: 8 hs de ayuno y concurrir al laboratorio con 2 horas de haberse levantado, sin haber hecho esfuerzo ni actividad física excepto que su medico/a le haya indicado otra preparacion.",
    },
    {
      pregunta:
        "¿Debo dejar de tomar mi medicación habitual para realizar los estudios?",
      respuesta:
        "Si la medicación que toma es para las tiroides y le piden estudios para el dosaje de las mismas debe tomar la medicación del día luego de la extracción. En caso de que tome otras medicaciones consulte con su médica/o cómo proceder.",
    },
    {
      pregunta:
        "¿Hasta qué hora puedo realizar una curva de sobrecarga de glucosa?",
      respuesta:
        "Este análisis puede hacerse entre las 7.30 y 8.00 horas con 8 hs. de ayuno.",
    },
    {
      pregunta:
        "¿Necesito orden médica para realizar un hisopado de detección de Covid-19?",
      respuesta:
        "No es necesario contar con orden médica. Puede consultar presupuesto y horarios por whatsapp aqui.",
    },
    {
      pregunta: "¿Puede retirar mis resultados otra persona?",
      respuesta:
        "Si, se pueden retirar con el talón que se le entregó el día de la extracción o de la recepción de muestra.",
    },
    {
      pregunta: "¿Qué validez tienen las recetas?",
      respuesta:
        "SWISS MEDICAL, PAMI, OSDEPYM: 90 días.\n\nOSDE, GALENO, OMINT: 60 días.\n\nUTA: 60 días desde su autorización.\n\nPREVENCIÓN SALUD, OSMECON: 30 días.\n\nIOMA: 90 días desde su autorización. La validez de las recetas varía según su cobertura. Puede consultar por whatsapp aqui.",
    },
    {
      pregunta:
        "Me indicaron un análisis parasitológico o de coprocultivo, ¿Dónde debo retirar el material? ¿Cuáles son las indicaciones?",
      respuesta:
        "Podrá retirar el material en el laboratorio presentando la orden médica del paciente. Las indicaciones específicas para la recolección de la muestra le serán proporcionadas al retirar el material.",
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
