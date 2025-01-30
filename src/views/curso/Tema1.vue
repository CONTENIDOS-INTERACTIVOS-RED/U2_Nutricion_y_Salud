<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Condiciones socioeconómicas que afectan la salud y la nutrición infantil'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1
          .p-4
            p.mb-0(data-aos="fade-up") Son múltiples los factores que inciden en las óptimas condiciones de salud y nutrición infantil. Asegurar el derecho a la alimentación, supone la disponibilidad de alimentos mediante fuentes naturales o de producción; la accesibilidad física y económica de los mismos por parte de todas las personas; la estabilidad o control sobre los procesos cíclicos de los cultivos, así como el almacenamiento para contingencias en épocas de déficit alimenticio.  
    
    .row.mb-5
      .col-lg-8.order-2
        p De igual forma, el derecho está relacionado con el acceso y control de los medios de producción (tierra, agua, insumos, tecnología, conocimiento y a los alimentos disponibles en el mercado); su consumo y utilización biológica, existencia, inocuidad, dignidad y condiciones higiénicas. 
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 De acuerdo con Latham (2002), citado en el Lineamiento Nacional de Educación Alimentaria y Nutricional de la Comisión Intersectorial de Seguridad Alimentaria y Nutricional de Colombia, una última parte de la garantía al derecho, está relacionada con la distribución equitativa de la alimentación en los hogares y el suministro de alimentos para satisfacer las necesidades poblacionales, de acuerdo con las condiciones de salud, ocupación, edad, género, entre otros; asunto que suele asociarse al área de la salud y la nutrición, exclusivamente. 
      .col-lg-4.d-none.d-sm-block.order-1
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    p Cuando no es posible garantizar el derecho a la alimentación, se evidencian los fenómenos de hambre y desnutrición, asuntos sobre los cuales, la FAO y otros organismos internacionales, desarrollan estudios periódicos de orden mundial. Al respecto, las ediciones del informe previas al año 2016, reflejaban de una manera optimista, la disminución del hambre en el mundo. 
    p Sin embargo, para el 2017, el Programa de las Naciones Unidas para el Desarrollo - PNUD afirmó que:

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in").d-none.d-lg-block
      .col-lg-8.order-1.bg-color-13
        .bloque-texto-c.bg-color-2.p-4.mb-3(data-aos="fade-left")
          i.fas.fa-quote-left.mb-3
          h3.mb-2 “Debido al rápido crecimiento económico y al aumento de la productividad agrícola en las últimas dos décadas, el número de personas desnutridas disminuyó casi a la mitad”.
          span (Programa de las Naciones Unidas para el Desarrollo , 2017) 
        p(data-aos="fade-left") La subalimentación ataca principalmente a África (256,5 millones de personas), Asia (515 millones de personas) y América Latina y el Caribe (39,3 millones de personas). A su vez, la subalimentación genera impacto sobre las mujeres, los niños menores de 5 años, la ciudadanía que habita las áreas rurales y aquellos países que se encuentran en conflicto gubernamental, como en el caso de Venezuela.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Seguridad alimentaria
      
    p.mb-5 La seguridad alimentaria se entiende como la disponibilidad de alimentos suficientes, seguros y nutritivos para que todas las personas puedan acceder a ellos en todo momento. 

    .bg-h85-2
      .row.justify-content-center.align-items-end.mb-4
        .col-lg-7.order-2(data-aos="fade-left")
          h5.mb-4 Considerar la seguridad alimentaria implica que los alimentos deben cumplir con las siguientes condiciones: 
          ul.lista-ul.mb-4
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 Ser de calidad e inocuos.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 Estar disponibles en cantidad suficiente.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 Permitir una utilización biológica adecuada.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 Estar disponibles de forma estable en el tiempo.

        .col-lg-5.order-1
          figure
            img(src="@/assets/curso/tema1/4.svg", data-aos="zoom-in")
    
    p.mb-5 Los pilares de la seguridad alimentaria son:

    .row.align-items-start.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/5.png", alt="").mb-4.mb-lg-0
      .col-lg-7.order-1
        AcordionA(tipo="b")
          .div(titulo="Disponibilidad")
            p.mb-0 Está relacionada con el suministro adecuado de alimentos a nivel nacional, regional o local. Las fuentes de suministro pueden ser la producción familiar o comercial, las reservas de alimentos, las importaciones y la asistencia alimentaria. En países como Colombia, donde la ruralidad y biodiversidad es alta, podría deducirse que existe alta disponibilidad de alimentos; sin embargo, la comercialización de productos en las grandes ciudades lleva a que los productos sean llevados a las zonas urbanas generando desabastecimiento en los mercados rurales locales.
            p.mb-0 Para garantizar la seguridad alimentaria, se deben implementar previsiones, sobre todo en relación con las estaciones y variaciones meteorológicas, para planificar cosechas, almacenar de manera correcta y prevenir contingencias. 
          .div(titulo="Acceso")
            p Se refiere a la posibilidad de obtener alimentos de manera permanente o transitoria. El acceso está determinado por la disponibilidad, la cantidad y calidad. Cuando las personas tienen el poder adquisitivo para pagar los precios de los alimentos, se puede acceder a ellos, sin embargo, existen factores que pueden ayudar a mejorar el acceso a los alimentos son:
            ul.lista-ul.mb-4
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 El empleo.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 El intercambio de servicios.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 El trueque.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 El crédito.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Las remesas.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Los vínculos de apoyo familiar o comunitario. 
            p En Colombia, la imposibilidad de acceder a los alimentos es una de las principales causas de la inseguridad alimentaria y nutricional. Esto se debe en gran medida al bajo nivel de ingresos de la población vulnerable. 
          .div(titulo="Consumo")
            p Es la cantidad de alimentos consumida por persona, familia o comunidad. También incluye los desperdicios a nivel de hogar después de que los alimentos han sido adquiridos y preparados. Cuando se hacen comparaciones entre naciones, se evidencia que varía el consumo alimenticio y el exceso o el déficit de consumo de alimentos, trae consigo situaciones precarias, enfermedades y situaciones de malnutrición.
          .div(titulo="Utilización biológica")
            p Es el proceso por el cual el cuerpo humano aprovecha los alimentos que consume y los convierte en nutrientes para el organismo. Está relacionado con el estado nutricional de la persona y puede tener consecuencias como la desnutrición o malnutrición si no es adecuada. La utilización biológica de los alimentos puede estar relacionada con:
            ul.lista-ul.mb-4
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Enfermedades infecciosas o parasitarias. 
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Acceso a servicios de salud. 
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Acceso a agua potable y saneamiento básico. 
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Prácticas de preparación, conservación, higiene y manipulación de alimentos. 
              
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Soberanía alimentaria 
    
    .row.mb-5
      .col-lg-8.order-2
        p En Colombia, la Política Nacional de Seguridad Alimentaria y Nutricional tiene el objetivo de garantizar que toda la población tenga acceso a alimentos de manera permanente y oportuna. Por tanto, la <b>soberanía alimentaria</b> es el derecho de todos los pueblos y comunidades a tener acceso a alimentos nutritivos, culturalmente apropiados, y producidos de manera sostenible y ecológica. 
        .bg-color-8.p-4(data-aos="fade-left")
          p.mb-0 La soberanía alimentaria vincula la capacidad de los pueblos para decidir su propio sistema alimentario y productivo, lo cual estaría relacionado con la cultura, las tradiciones, las creencias y los hábitos. 
      .col-lg-4.d-none.d-sm-block.order-1
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-h85-2
      .row.justify-content-center.align-items-end.mb-4
        .col-lg-5(data-aos="fade-left")
          h5.mb-4 Los principios de la soberanía alimentaria son:
          ul.lista-ul.mb-4
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 La alimentación es un derecho humano y debe garantizarse.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 La solidaridad.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 La cooperación.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 El internacionalismo.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 La justicia.

        .col-lg-6
          figure
            img(src="@/assets/curso/tema1/7.svg", data-aos="zoom-in")
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8 
        p(data-aos="fade-left").mb-4 El movimiento por la soberanía alimentaria propuesto en el año de 1996 en el país, por parte de la vía campesina, es un movimiento mundial de campesinos y pueblos rurales que busca devolver al consumidor el control (derecho) de lo que come; evitar que la soberanía de un país dependa de la producción de alimentos de otros países y fomenta prácticas de sostenibilidad como la agroecología y el desarrollo de modelos de negocios agros locales. 
        .bg-color-5.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 De acuerdo con el programa de acción contra el hambre (<b>www.accioncontraelhambre.org</b>), una de las principales diferencias entre la seguridad y la soberanía alimentaria, es que la seguridad es un concepto neutro que no juzga la concentración de poder en los niveles del comercio de alimentos, mientras que la soberanía alimentaria contrasta la asimetría del poder en los diversos mercados mundiales. 
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Factores que inciden en la nutrición infantil y que guardan correlación con las condiciones socioeconómicas
    
    p.mb-4 Los factores que inciden en la nutrición infantil y que guardan correlación con las condiciones socioeconómicas, son:

    .row.mb-5 
      .col-lg-4
        div.tarjeta.p-4.bg-color-6.text-center.h-100.alin
          p.mb-0 Ingresos económicos en el núcleo familiar.
      .col-lg-4
        div.tarjeta.p-4.bg-color-1.text-center.h-100.alin
          p.mb-0 Estado de los suelos y acceso al agua potable.
      .col-lg-4
        div.tarjeta.p-4.bg-color-9.text-center.h-100.alin.text-white
          p.mb-0 Adecuado suministro de alimentos según la edad.
    
    .row.mb-5.justify-content-center
      .col-lg-4
        div.tarjeta.p-4.bg-color-14.text-center.h-100.alin.text-white
          p.mb-0 Asepsia y buen manejo (conservación y preparación).
      .col-lg-4
        div.tarjeta.p-4.bg-color-15.text-center.h-100.alin
          p.mb-0 Acceso a los servicios básicos y condiciones de las viviendas (infraestructura y manejo de basuras).
    
    h2(data-aos="fade-left") Ingresos económicos

    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          p.mb-0 El acceso a una fuente de empleo o de ingresos económicos suficientes en el núcleo familiar o comunitario, puede facilitar la adquisición de alimentos dignos por producción propia o compra directa. En caso de tener que adquirirlos, se traduce en contar con cadenas de suministro y ventas de alimentos de la canasta familiar, con productos suficientes y de buena calidad. 
        p En un país como Colombia, en donde existe inequidad por el acceso a tierras, empleos o ingresos económicos suficientes, el acceso a alimentos dignos resulta ser un tema de agenda pública.  
      .col-lg-4.d-none.d-sm-block.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La <b>canasta familiar</b> es la denominación de análisis que permite comprender la economía de Colombia a través de los hábitos de consumo de los ciudadanos. El Departamento Administrativo Nacional de Estadística (DANE) es el encargado de seleccionar los productos que la componen. 
      
    .bg-full-width.bg-color-3.mb-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-end.mb-4
          .col-lg-7.order-2(data-aos="fade-left")
            h5.mb-4 Los productos de la canasta familiar están exentos parcial o totalmente del impuesto al valor agregado (IVA). Los artículos que la conforman se seleccionan teniendo en cuenta criterios como:
            ul.lista-ul.mb-4
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 La demanda de cada artículo.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 El peso de cada artículo dentro del gasto de los hogares.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Los productos y servicios con demanda creciente.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Para el año 2024, se calcula que una familia promedio puede gastar entre $800.000 y $3.000.000 mensuales para abastecerse de lo básico.

          .col-lg-5.order-1
            figure
              img(src="@/assets/curso/tema1/12.svg", data-aos="zoom-in")
    
    p.mb-4 La canasta familiar está compuesta por los productos y servicios que las personas necesitan para su sostenimiento diario, quincenal o mensual. En ella se incluyen:

    .titulo-figura.mb-4
      h5 Figura 1. 
      span Elementos que componen la canasta familiar, de acuerdo con el Departamento Administrativo Nacional de Estadística (DANE) de Colombia
    .row.justify-content-center.align-items-center.mb-5.bg-color-7.p-4
      .col-lg-8
        figure
          img(src="@/assets/curso/tema1/13.svg", data-aos="zoom-in")
    
    h2(data-aos="fade-left") Estado de los suelos y acceso al agua potable

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/14.png', alt='')
        .col-lg.order-1
          .p-4
            p.mb-0(data-aos="fade-up") Suelos desérticos, empobrecidos por la sobreexplotación o con exceso de productos químicos altamente tóxicos para la salud humana, son un problema emergente en la nutrición. El cambio climático está afectando el suministro de agua dulce, que representa el 0,5 % del agua de la Tierra. El acceso al agua potable y al saneamiento es un derecho humano reconocido internacionalmente; para el año 2022, más de 2.200 millones de personas no tenían acceso a fuentes de agua potable segura y 3.500 millones no tenían acceso a saneamiento seguro. 

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8 
        p(data-aos="fade-left").mb-4 A partir de la industrialización se han generado acciones de agricultura y ganadería extensiva, que como consecuencia han degradado los suelos y los han llevado a reducir su fertilidad. De igual importancia, la presencia de agua en los territorios agrícolas, determina la posibilidad de unas cosechas provechosas, así que en los territorios que aquejan sequías extremas o en donde por fenómenos meteorológicos determinados por el cambio climático están siendo afectados, se empiezan a ver las consecuencias en la Calidad de los alimentos. 
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La degradación de los ecosistemas, la pérdida de biodiversidad (extinción de especies) y el cambio climático, son problemas de escala global que están poniendo en riesgo la sostenibilidad y la existencia de toda forma de vida.

    p.mb-4 Lo anterior implica, por un lado, tener acceso a tierra fértil, contar con la tecnología adecuada para la producción de alimentos, el acceso a insumos y semillas y que se cumplan, de acuerdo con el producto, los tiempos y requerimientos biológicos para su crecimiento y cosecha plena.  

    .row.mb-5
      .col-lg-8
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Hay naciones que sí pueden tener el acceso económico suficiente para adquirir los alimentos, pero el acceso a los alimentos puede ser un reto gubernamental debido a la insuficiencia de los suelos o a la necesidad de transportar los alimentos desde otras zonas. 
        p Un ejemplo de esta situación es la situación de seguridad alimentaria en Emiratos Árabes Unidos, nación que, debido a las condiciones climáticas, tiene una producción alimentaria muy reducida. Se estima que el 90 % de los alimentos que son consumidos en el país, son importados, por lo que la dependencia de las importaciones es elevada. 
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    .titulo-figura.mb-4
      h5 Tabla 1. 
      span Algunas funciones que relacionan la calidad de los suelos con la disponibilidad de agua potable.

    .tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th(width="40%").bg-color-9.text-white Función
            th.bg-color-9.text-white Relación 
        tbody
          tr.bg-color-white
            td.text-bold El suelo filtra y almacena agua
            td El suelo es capaz de capturar y almacenar agua, lo que la pone a disposición de los cultivos para que la absorban. Esta capacidad reduce la evaporación y maximiza la eficacia del uso del agua. 
          tr.bg-color-white
            td.text-bold La textura del suelo afecta la cantidad de agua disponible
            td La textura del suelo influye en la cantidad de agua que está disponible para las plantas y los seres vivos que la consumen. Según la textura, los suelos pueden ser arenosos, arcillosos, terrosos; y dependiendo de esto, está la capacidad de retención de agua.
          tr.bg-color-white
            td.text-bold El suelo ayuda a prevenir inundaciones y sequías
            td Los suelos funcionales ayudan a prevenir inundaciones y sequías. Algunos ecosistemas como los manglares o humedales cumplen funciones de amortiguamiento de aguas lluvias, adicionalmente son claves en el equilibrio ecosistémico.
          tr.bg-color-white
            td.text-bold El suelo atrapa contaminantes
            td La infiltración del agua a través del suelo atrapa los contaminantes e impide que se filtren en el agua freática, llevando a mejorar la calidad del agua. 
    
    h2(data-aos="fade-left") Adecuado suministro de alimentos, según la edad
    p.mb-5 El momento de vida define también el tipo de alimentos que debe consumir un bebé o un infante. En ese sentido, la apertura a nuevos alimentos, el control sobre posibles cantidades y alergénicos, la disposición correcta de nutrientes y la variedad, definirán los requerimientos diarios aproximados de cada niño.

    h2(data-aos="fade-left") Acceso a los servicios básicos y condiciones de las viviendas (infraestructura y manejo de basuras)

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-8.order-1
        .bg-color-8.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El tipo de servicio sanitario y el manejo adecuado de las basuras y desechos en el hogar y la comunidad, es parte esencial de la salud, incluyendo la nutricional, pues la disposición para la limpieza, la infraestructura adecuada y el manejo pertinente de los residuos sólidos, líquidos, orgánicos e inorgánicos, puede incidir positiva o negativamente en la contaminación de espacios vitales. 
        p(data-aos="fade-left").mb-4 Los tipos de servicio sanitario más adecuados son los conectados al alcantarillado y pozo séptico. Los hogares con sistemas menos adecuados de disposición de excretas suelen estar ubicados en zonas rurales, periurbanas y de invasión. Usan sanitarios sin conexión, letrinas, pozos negros, hoyos, bajamar o no tener sanitario, (caso de cerca del 5 % de los hogares colombianos). 

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-end.mb-4
          .col-lg-7.order-2(data-aos="fade-left")
            p En cuanto a los residuos, la recolección periódica por un servicio de aseo es la forma más adecuada de disposición de las basuras. Pero se estima que más del 25 % del país no tiene acceso a este tipo de servicio y en esos casos, se presenta manejo inadecuado por quemas de los residuos a cielo abierto, vertimiento de basuras en zonas hídricas, o sepultamiento de estas. 
            p Las familias que viven cerca a los sitios de vertimientos de basuras en las principales ciudades suelen presentar síntomas de enfermedades infecciosas y respiratorias asociadas a los microorganismos y a la mala condición atmosférica producto de la descomposición.

          .col-lg-5.order-1
            figure
              img(src="@/assets/curso/tema1/20.svg", data-aos="zoom-in")
    
    h2(data-aos="fade-left").mb-5 Asepsia y buen manejo de los alimentos (conservación y preparación)
    
    .row.mb-5
      .col-lg-8
        p La manipulación segura de los alimentos, es clave para preservar la calidad de los nutrientes y el correcto consumo. Cuando ciertas bacterias o agentes patógenos que causan enfermedades contaminan los alimentos, pueden causar enfermedades transmitidas por los alimentos, este fenómeno se denomina “intoxicación por alimentos”.  
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Consumir bacterias peligrosas transmitidas por los alimentos, suele causar enfermedades dentro de horas o un par de días después de consumir los alimentos contaminados. Lo más delicado es que si la persona que los consume es un bebé, un niño o un adulto que no se encuentra bien de salud, mujeres embarazadas, adultos de la tercera edad y personas con sistemas inmunes debilitados, se pone en riesgo la vida misma. Los síntomas de las enfermedades transmitidas por los alimentos incluyen vómitos, diarrea, dolor abdominal y síntomas similares a los de la gripe, fiebre, dolor de cabeza y dolor del cuerpo. 
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    p Aunque muchas personas saludables se recuperan de una enfermedad transmitida por los alimentos en un corto período con ayuda de medicamentos básicos y orientados por un médico, algunos pueden desarrollar problemas de salud crónicos, graves o incluso mortales. 
    p.mb-5 La seguridad alimentaria vincula la manipulación correcta de los alimentos, así que los principales consejos son: 

    .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4.mb-3.mb-lg-0
          .bg-color-3.p-4(data-aos="fade-down").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Limpiar.

        .col-lg-4.mb-3.mb-lg-0
          .bg-color-3.p-4(data-aos="fade-up").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/23.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Separar.
        .col-lg-4.mb-3.mb-lg-0
          .bg-color-3.p-4(data-aos="fade-down").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Cocinar y enfriar.
    
    p.mb-5 Para mantener una nutrición segura para la familia, hay unos pasos fundamentales:

    .bg-full-width-2.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/25.png")
            .col-lg-7.order-lg-1
              h5 Refrigerar
              p Refrigerar en un máximo de 2 horas después de cocinarlos o comprarlos. Nunca descongele los alimentos a temperatura ambiente. Cuando disponga de grandes cantidades de restos de comida, repártalos en envases poco profundos. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/26.png")
            .col-lg-7.order-lg-1
              h5 Lavar 
              p Lavar manos y limpiar superficies con frecuencia, tablas de cortar, platos, utensilios. Enjuagar frutas y verduras frescas. Limpiar la tapa de los productos enlatados antes de abrirlos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/27.png")
            .col-lg-7.order-lg-1
              h5 Cocinar 
              p Cocinar a la temperatura adecuada. Estos productos deben alcanzar la temperatura interna mínima segura para destruir cualquier bacteria dañina. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/28.png")
            .col-lg-7.order-lg-1
              h5 Separar 
              p Separar la carne cruda de los otros alimentos. Use una tabla de cortar para las frutas y verduras frescas, y otra diferente para la carne, las aves, y los pescados y mariscos crudos. 


  //  
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
