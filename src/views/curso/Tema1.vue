<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Marco legal de nutrición'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8.order-2
        p Todos los niños y niñas tienen derecho a una buena nutrición. Con las políticas internacionales y nacionales, se ha logrado que, en los últimos 20 años, se reduzca el porcentaje de niños menores de cinco años con retraso en su crecimiento o enfermedades, asociadas a la mala nutrición. Las condiciones mundiales y locales de malnutrición infantil demandan una respuesta a escala mundial, que permita priorizar la alimentación adecuada, servicios y prácticas que favorezcan una nutrición ideal en todas las etapas de la vida y que, puedan contribuir a un desarrollo integral.
        .bg-color-5.p-4(data-aos="fade-left")
          p(data-aos="fade-left").mb-0 La malnutrición infantil está asociada al consumo suficiente de alimentos nutritivos, pero además está asociado con el acceso a los alimentos de buena calidad, suficientes, que promuevan de unas acciones agrícolas adecuadas, que tengan una buena conservación desde el suministro, pero, sobre todo, que sean adecuados para su edad y momento de vida. Todo esto requiere que tantos padres, cuidadores, sistema de salud, sistema educativo, gestores sociales y gobiernos, tengan una priorización sobre el tema y lo asuman con la responsabilidad correspondiente.  
      .col-lg-4.d-none.d-sm-block.order-1
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in").mb-4.mb-lg-0

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Triple carga de la malnutrición
    
    p.mb-4 Para hablar de nutrición, es preciso definir el hambre, la inseguridad alimentaria y la malnutrición en todas sus formas. 

    .bg-full-width-2.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7.order-lg-1
              h5 Hambre
              p Es una sensación física que, además de parecer incómoda, es dolorosa, causada por un consumo insuficiente de energía alimentaria. Es crónica cuando la persona no consume una cantidad suficiente de calorías de forma regular, para llevar una vida normal, activa y saludable, según su edad, estilo de vida y requerimientos nutricionales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-lg-1
              h5 Inseguridad alimentaria 
              p Es la falta de acceso regular a los alimentos nutritivos e inocuos, o la incapacidad de pagarlos. Esto provoca que las personas tengan malnutrición y hábitos alimenticios alterados. En Colombia, según una encuesta realizada entre 2021 y 2022, el 71,6 % de los hogares encuestados en 11 ciudades del país, enfrentan inseguridad alimentaria.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-lg-1
              h5 Malnutrición  
              p Es una condición fisiológica que se produce cuando la ingesta de nutrientes o calorías es inadecuada, por exceso, por defecto o por un desequilibrio. 
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-bold Dentro de las formas de malnutrición se encuentran: 
    
    .titulo-figura.mb-4
      h5 Figura 1. 
      span La sumatoria de condiciones que inciden en la triple carga de malnutrición
    .row.justify-content-center.align-items-center.mb-5.bg-color-7.p-4
      .col-lg-11
        figure
          img(src="@/assets/curso/tema1/5.svg", data-aos="zoom-in")
    
    p.mb-5.text-bold La mala nutrición infantil está relacionada con tres factores esenciales: 

    .row.align-items-start.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/6.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Desnutrición")
            p La <b>desnutrición</b>, que corresponde a la condición que se produce cuando el cuerpo no recibe los nutrientes necesarios para mantenerse sano. Puede ser causada por una mala alimentación, inanición, trastornos alimentarios, o por problemas para digerir o absorber los nutrientes. 
            p En los infantes, la mala nutrición se manifiesta con retraso en el crecimiento y la desnutrición aguda. La desnutrición puede ser leve y no presentar síntomas, o tan grave que cause daño permanente al cuerpo. Algunos de sus síntomas generales son: fatiga, mareo, pérdida de peso, huesos sobresalientes, piel seca e inelástica, cabello seco y que se cae fácilmente. 
            p La desnutrición es peligrosa en niños y niñas en edad de crecimiento, mujeres embarazadas o lactantes, personas mayores, y quienes padecen enfermedades crónicas.


          .div(titulo="Deficiencias de micronutrientes")
            p Las <b>deficiencias de micronutrientes</b>, se producen  cuando el organismo no recibe la cantidad suficiente de vitaminas y minerales que requiere, según su edad, actividad física y estado de salud. 
            p Estas deficiencias pueden tener consecuencias negativas para la salud, como: deficiencias en la salud ocular, bajo peso al nacer, efectos negativos en el desarrollo físico y cognitivo de los niños, aumento del riesgo de enfermedades crónicas. Algunas de las causas relacionadas con las deficiencias de micronutrientes son la pobreza, las dietas deficientes y la agricultura subdesarrollada (esto asociado también a la pobreza de minerales, microorganismos y nutrientes en los suelos).


          .div(titulo="Sobrepeso y la obesidad infantil")
            p El aumento de la <b>prevalencia del sobrepeso y la obesidad infantil</b>, que continúa en aumento en todo el mundo debido al acceso y la globalización de productos altos en calorías, grasas no saludables, azúcares y otros componentes que inciden en la ingesta inadecuada. 
            p Según cifras de la Organización Mundial de la Salud (2024), en el año 2022, 37 millones de niños menores de 5 años, tenían sobrepeso, y más de 390 millones de niños y adolescentes de 5 a 19 años, tenían sobrepeso. 


          .div(titulo="Protocolos de higiene")
            p Estrategias de limpieza y mantenimiento para mantener condiciones óptimas en la operación.
    
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/7.png', alt='')
        .col-lg.order-1
          .p-4
            p.mb-0(data-aos="fade-up") El sobrepeso y la obesidad, tienen graves consecuencias sanitarias, y pueden aumentar el riesgo de desarrollar enfermedades del corazón, accidente cerebrovascular y problemas renales, que inician en la niñez y pueden extenderse para el resto de la vida. Algunos factores que pueden aumentar el riesgo de sobrepeso y obesidad son: falta de actividad física, hábitos alimentarios poco saludables, afecciones médicas, genética, el contexto o entorno con los adultos, la cantidad de horas de sueño reparador y los medicamentos. 
    
  
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8 
        p(data-aos="fade-left").mb-4 El estado de la seguridad en el mundo está en alerta, según Food and Agriculture Organization of the United Nations (FAO), la cantidad de personas que sufrían hambre en el mundo permaneció relativamente estable entre 2021 y 2022, dato esperanzador después del estado en el mundo, a consecuencia de la pandemia del Covid 19. Sin embargo, no se debe dejar de lado que las cifras cambian cuando se detalla la condición infantil, porque el acceso puede ser diferencial debido a la ubicación geográfica, la relación sociedad, cultura.
        .bg-color-3.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Entre 691 y 783 millones de personas se enfrentan al hambre en todo el mundo en el 2022 y más de 3.100 millones de personas no cuentan con una dieta saludable. Sobre el entorno infantil, se plantea que: 


    .bg-h85
      .row.justify-content-end.align-items-end.mb-4
        .col-lg-5
          ol.lista-ol--cuadro(data-aos="fade-up")
            li 
              .lista-ol--cuadro__vineta.text-white.bg-color-9
                span 1
              | 22,3 % de los niños menores de 5 años, sufren retraso del crecimiento.
            li 
              .lista-ol--cuadro__vineta.text-white.bg-color-9
                span 2
              | El 6,8 % sufren emaciación, un tipo de desnutrición que se caracteriza por un peso insuficiente en relación con la altura, causado por una pérdida de peso repentina, ya sea por una alimentación insuficiente o por una enfermedad infecciosa y en paralelo.
            li 
              .lista-ol--cuadro__vineta.text-white.bg-color-9
                span 3
              | El 5,6 % de los niños tienen sobrepeso. 

        .col-lg-6
          figure
            img(src="@/assets/curso/tema1/10.svg", data-aos="zoom-in")

        
    .row.mb-5
      .col-lg-8.order-2
        p Pero en países como Colombia, las cifras varían de acuerdo con la región; el acceso a la alimentación adecuada es diferencial entre los territorios urbanos y rurales, entre los estratos socioeconómicos y dependiendo de la zona (Andina, Pacífica, Caribe, Amazonía, etc.).
        .bg-color-5.p-4(data-aos="fade-left")
          p(data-aos="fade-left") De acuerdo con el siguiente mapa, la hambruna es un problema controlado en países como Colombia; sin embargo, no es posible generalizar esta condición si no se hace un análisis detallado por zonas, departamentos y municipios del país. 
      .col-lg-4.d-none.d-sm-block.order-1
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in").mb-4.mb-lg-0


    .titulo-figura.mb-4
      h5 Figura 2. 
      span Índice mundial del hambre

    figure.mb-5
      img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      ficaption.bg-color-12.p-3.d-block.mb-0 Nota. Tomado de Deutsche Wlthungerhife e.V. y Concern Worldwode (2021). 

    .titulo-figura.mb-4
      h5 Figura 3. 
      span Principales causas de la inseguridad alimentaria en el mundo
    .row.justify-content-center.align-items-center.mb-5.bg-color-7.p-4
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/13.svg", data-aos="zoom-in")
    

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Normatividad internacional
    
    p.mb-4 La normatividad internacional relacionada con la alimentación y la nutrición infantil constituye un pilar fundamental para garantizar el derecho a una alimentación adecuada y saludable.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Normatividad internacional 
            p.mb-4(data-aos="fade-right") En el PDF <b>Normatividad Internacional</b>, se presentan los principales pronunciamientos y acuerdos globales que promueven la seguridad alimentaria, la erradicación del hambre y la protección de los derechos de los niños. Este documento analiza declaraciones, pactos y convenciones, además de abordar iniciativas recientes, como los Objetivos de Desarrollo Sostenible y estrategias de organizaciones internacionales, para enfrentar los desafíos globales en nutrición y bienestar infantil.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Normatividad internacional .

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/14.png', alt='')


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Normatividad nacional


    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8 
        p(data-aos="fade-left").mb-4 Colombia, siendo un país con MEGA diversidad biológica y ecosistémica, el tema de nutrición resulta siendo una paradoja. Pese a la disponibilidad de recursos y de territorios aptos para el cultivo, existen  cifras alarmantes sobre la nutrición infantil, en especial, en aquellas zonas geográficas donde existe pobreza extrema.
        p Allí la carencia en el acceso, la disponibilidad de <b>alimentos inocuos</b> y en general, la <b>soberanía alimentaria</b>, resulta siendo un tema de prioridad en las agendas públicas.
        .bg-color-3.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La Constitución Política de Colombia establece el derecho a la alimentación equilibrada como un <b>derecho fundamental de los niños</b> (artículo 44) y, en cuanto a la oferta y la producción agrícola, la Constitución establece en los artículos 64, 65 y 66, los deberes del Estado en esta materia. 


    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-2.order-2
        figure
          img(src="@/assets/curso/tema1/17.svg", data-aos="zoom-in")
      .col-lg-10.order-1.mb-3.mb-lg-0 
        p(data-aos="fade-left").mb-4 Además, el país cuenta con un documento CONPES (Consejo Nacional de Política Económica Social República de Colombia Departamento Nacional de Planeación) No. 113 del año 2008, en el que se estableció la Política Nacional de seguridad alimentaria, entendida como el acceso a los alimentos suficientes, seguros y nutritivos para que todas las personas puedan llevar una vida saludable y activa. Al respecto, la <b>Política Nacional de Seguridad Alimentaria y Nutricional</b>, trazó como objetivo “garantizar que la población colombiana disponga, acceda y consuma alimentos de manera permanente y oportuna, en suficiente cantidad, variedad, calidad e inocuidad”.

    .row.mb-5.align-items-center
      .col-lg-7
        .bg-color-1.p-5(data-aos="fade-left")
          p(data-aos="fade-left") Como toda política requiere un seguimiento, en el país existe la Comisión Intersectorial de Seguridad Alimentaria y Nutricional – CISAN, que favorece la gobernanza y coordinación de la política en mención. 
          p.mb-0 Por otro lado, la Ley 2120 del 2021 establece medidas para fomentar entornos alimentarios saludables y prevenir enfermedades. 
 
      .col-lg-5.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in").mb-4.mb-lg-0

    .bg-h85-2.mb-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.order-2
          p.mb-0 Uno de los hitos más recientes es la Resolución 2492 del 2022 que establece requisitos para los alimentos que hagan uso de declaraciones de propiedades nutricionales, es decir, que establece el reglamento técnico sobre los requisitos de etiquetado nutricional y frontal que deben cumplir los alimentos envasados y empacados para consumo humano, un tema clave al momento de adquirir productos alimenticios en los supermercados y tiendas. 

        .col-lg-6.order-1.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/19.svg", data-aos="zoom-in")

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Sobre las etiquetas en los productos alimenticios     


    .row.mb-5.align-items-center
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0  
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La Corporación Colombiana de Padres y Madres (Red PaPaz), en el año 2021, desarrolló acciones relacionadas con el etiquetado de los productos ultraprocesados, pues presentó una solicitud al Ministerio de Salud y Protección Social la solicitud para que se adoptara un sello octagonal de advertencia en lugar del sello circular. 
        p(data-aos="fade-left") Además, participó en la conformación de un Comité de Verificación de Cumplimiento de la Sentencia, junto con la ministra de Salud y Protección Social, la Asociación Colombiana de Educación al Consumidor, Educar Consumidores, y Fian Colombia. 
          
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-bold Red PaPaz advierte que el etiquetado de advertencia octogonal es el más efectivo para advertir a los colombianos sobre los excesos de nutrientes críticos en los productos ultraprocesados. 

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/22.svg", data-aos="zoom-in")
      .col-lg-10 
        p(data-aos="fade-left") También se cuenta con la base de un estudio realizado por la Universidad Nacional de Colombia, la Universidad de Carolina del Norte y la Pontificia Universidad Javeriana, en donde se concluyó que el 72 % de los participantes, seleccionó este sello como el que más reducía la intención de consumo.

    .titulo-figura.mb-4
      h5 Figura 4. 
      span Etiquetados en los productos alimenticios asociados con alertas frente a los aportes nutricionales de los alimentos
    .row.justify-content-center.align-items-center.mb-5.bg-color-7.p-4
      .col-lg-11
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.svg", data-aos="zoom-in")
      .col-lg-10 
        p(data-aos="fade-left") Por otro lado, existe un sistema internacional que ya es visible en el país, para determinar la calidad nutricional de los alimentos, basándose en una escala de colores y letras, denominado Nutri – Score. El objetivo de esta etiqueta es comparar fácilmente la calidad nutricional de los productos teniendo como referente la cantidad de nutrientes benéficos para el ser humano. Siguiendo esta referencia a continuación se presenta un ejemplo: 
    
    .titulo-figura.mb-4
      h5 Figura 5. 
      span Según la clasificación de <em>Nutri – Score</em>, los productos clasificados en A y B son más saludables
    .row.justify-content-center.align-items-center.mb-5.bg-color-7.p-4
      .col-lg-11
        figure
          img(src="@/assets/curso/tema1/25.svg", data-aos="zoom-in")





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.icbf.gov.co/sites/default/files/politica_nacional_de_infancia_y_adolescencia.pdf " target="_blank" rel="noopener noreferrer") Gobierno de Colombia. (2018). POLÍTICA NACIONAL DE INFANCIA Y ADOLESCENCIA 2018-2030. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.who.int/es/news-room/fact-sheets/detail/malnutrition" target="_blank" rel="noopener noreferrer") ORGANIZACIÓN MUNDIAL DE LA SALUD. (2024). Malnutrición. Datos de estado de la malnutrición en el mundo 2022. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=168029" target="_blank" rel="noopener noreferrer") CONGRESO DE LA REPÚBLICA. Ley 2120 de 2021. Por medio de la cual se adoptan medidas para fomentar entornos saludables y prevenir enfermedades no transmisibles y se adoptan otras disposiciones.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.unicef.org/es/convencion-derechos-nino/texto-convencion" target="_blank" rel="noopener noreferrer") ONU (1989). Convención de los derechos del Niño. Adoptada y abierta a la firma y ratificación por la Asamblea General en su resolución 44/25, de 20 de noviembre de 1989.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.fao.org/4/v7700t/v7700t04.htm" target="_blank" rel="noopener noreferrer") FAO. (2012) Declaración Mundial sobre la Nutrición, 1992. Conferencia Internacional sobre Nutrición. Roma, Italia. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.fao.org/4/y1780s/y1780s06.htm" target="_blank" rel="noopener noreferrer") FAO. (2002). Cumbre Mundial sobre la Alimentación. Roma, Italia. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.un.org/sustainabledevelopment/es/hunger/ " target="_blank" rel="noopener noreferrer") ONU (2012). Objetivos de Desarrollo Sostenible. Reto Hambre Cero. Río de Janeiro, Brasil. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="www.un.org/es/events/childrenday/pdf/derechos.pdf " target="_blank" rel="noopener noreferrer") ONU. (2013)Convención sobre los Derechos del Niño. Asamblea General. Nueva York, Estados Unidos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.undp.org/es/publicaciones/objetivos-de-desarrollo-del-milenio-informe-de-2015 " target="_blank" rel="noopener noreferrer") ONU. (2015). Objetivos de Desarrollo del Milenio. informe 2015 de La movilización mundial tras los Objetivos de Desarrollo del Milenio (ODM) del 2000.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/  " target="_blank" rel="noopener noreferrer") ONU. (2015). Objetivos de Desarrollo Sostenible - ODS.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ohchr.org/es/special-procedures/sr-food/international-standards " target="_blank" rel="noopener noreferrer") Página Web de la ONU y de la Oficina del Alto Comisionado Naciones Unidas y Derechos Humanos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.fao.org/home/es" target="_blank" rel="noopener noreferrer") Página web oficial de la Organización de las Naciones Unidas para la Alimentación y la Agricultura. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.icbf.gov.co/bienestar/nutricion" target="_blank" rel="noopener noreferrer") Instituto Colombiano de Bienestar Familiar.
            

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=APj8tKJ3F6U" target="_blank" rel="noopener noreferrer") Estado de la seguridad alimentaria y la nutrición en el mundo 2023. FAO (2023) 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
