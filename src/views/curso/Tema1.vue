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




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.icbf.gov.co/sites/default/files/politica_nacional_de_infancia_y_adolescencia.pdf " target="_blank" rel="noopener noreferrer") Gobierno de Colombia. (2018). POLÍTICA NACIONAL DE INFANCIA Y ADOLESCENCIA 2018-2030 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ohchr.org/es/special-procedures/sr-food/international-standards" target="_blank" rel="noopener noreferrer") Página Web de la ONU y de la Oficina del Alto Comisionado Naciones Unidas y Derechos Humanos. Consultado 26/11/2024 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.fao.org/home/es" target="_blank" rel="noopener noreferrer") Página web oficial de la Organización de las Naciones Unidas para la Alimentación y la Agricultura. Consultado 26/11/2024  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.icbf.gov.co/bienestar/nutricion" target="_blank" rel="noopener noreferrer") Instituto Colombiano de Bienestar Familiar. Consultado 26/11/2024
            

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=LHbflIy-F8I" target="_blank" rel="noopener noreferrer") SUAVINEX SPAIN. (2016, 31 agosto) El inicio de la alimentación complementaria por Lucía Galán, pediatra. 

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
