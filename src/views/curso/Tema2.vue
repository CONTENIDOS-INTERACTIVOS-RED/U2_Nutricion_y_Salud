<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Grupos y requerimientos alimentarios por edad '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1 
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A partir del CONPES 113 del 2008, Colombia debe contar con guías alimentarias que son parte de la estrategia de información, educación y comunicación para el abordaje de la situación nutricional en el país, la actualización y difusión permanente de instrumentos de orientación alimentaria y nutricional. Dentro de las guías alimentarias para la población colombiana, están para la población mayor de dos años, la población menor de dos años y para gestantes y madres en lactancia.
        p(data-aos="fade-left").mb-4 Según el Instituto Colombiano de Bienestar Familiar – ICBF (2020), las guías alimentarias son un conjunto de planteamientos que brindan orientación sobre el consumo de alimentos, para promover el bienestar nutricional. Tienen en cuenta el momento socio económico, el patrón alimentario y sugieren aspectos que deben ser modificados o reforzados.
    
    .bg-h85-2
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7.order-2(data-aos="fade-left")
          h5.mb-4.mt-5 Para el caso de la nutrición infantil en Colombia, es preciso consultar: 
          ul.lista-ul.mb-4
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 Guías alimentarias basadas en alimentos para <b>mujeres gestantes</b>, madres en <b>período de lactancia</b> y niños y niñas <b>menores de 2 años</b> de Colombia.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right 
              p.mb-0 Guías alimentarias basadas en alimentos para la población colombiana <b>mayor de 2 Años</b>.

        .col-lg-5.order-1
          figure
            img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")

    p.mb-5 En términos generales, estas guías orientan sobre las cantidades (porciones), frecuencia en la alimentación y requerimientos nutricionales, según grupos alimenticios. Dentro de las cualidades alimenticias, se encuentran:

    .row.mb-5.justify-content-center.position-relative
      .col-lg-5.bg-color-7.p-5
        img.pst(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")
        ul.lista-ul.mb-0
          li.mb-3.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 <b>Inocua</b>, que el alimento no se encuentre contaminado por alguna bacteria o sustancia química. 
          li.mb-3.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 <b>Suficiente</b> para cubrir las necesidades de energía y nutrientes.
          li.mb-3.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 <b>Variada</b>, que contenga alimentos de diferentes grupos. 
      .col-lg-5.bg-color-16.p-5
        img.pst-2(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")
        ul.lista-ul.mb-0
          li.mb-3.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 <b>Equilibrada</b>, que el aporte de nutrientes esté en las cantidades necesarias.  
          li.mb-3.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 <b>Completa</b>, que aporte todos los nutrientes. 
          li.mb-3.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 <b>Adecuada</b>, acorde con la región, situaciones sociales, económicas, sociológicas y culturales.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Mujeres gestantes     

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left") 
        p.mb-4 Durante la gestación, las mujeres necesitan una buena alimentación para prevenir problemas de salud durante toda la gestación, el parto y la etapa inicial de la crianza, tanto para ellas, como para sus bebés.  
        .bg-color-8.p-4.mb-3
          p.mb-0 Si la madre no consume alimentos saludables, la madre puede presentar malnutrición por déficit de alimentación (desnutrición) o por exceso de consumo de alimentos de baja calidad nutricional que generan sobrepeso y obesidad. En ambos casos, se pone en riesgo la salud de la gestante y el bebé, aumentando la posibilidad de que la madre presente diabetes gestacional, presión arterial alta, enfermedades del corazón, deficiencia de algunos micronutrientes, entre otros.
        p Para detallar los tipos de alimentos y las cantidades sugeridas, las cartillas de guías alimentarias clasifican los alimentos por grupos así:
    
    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Grupo 1
                p.text-center Cereales, raíces, tubérculos y plátanos. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Grupo 2
                p.text-center Frutas y verduras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Grupo 3
                p.text-center Leche y productos lácteos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Grupo 4
                p.text-center Carnes, huevos, leguminosas, frutos secos y semillas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Grupo 5
                p.text-center Grasas Poliinsaturadas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Grupo 6
                p.text-center Azúcares.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/6.png', alt='')
      
        p Un ejemplo sobre la nutrición sugerida para una madre en gestación, se presenta a continuación:

    .titulo-figura.mb-4
      h5 Tabla 2. 
      span Número de intercambios diarios por grupos de alimentos para mujeres gestantes, según edad y trimestre de gestación

    .tabla-a.color-primario.mb-5 
      table
        thead
          tr
            th(width="40%")(rowspan="3")(colspan="2").text-center.bg-color-9.text-white GRUPO DE ALIMENTOS
            th(colspan="3").bg-color-9.text-white Gestantes de 14 a 17 años
            th(colspan="3").bg-color-9.text-white Gestantes de 18 a 49 años
          tr
            th.bg-color-11.text-center Primer trimestre
            th.bg-color-11.text-center Segundo trimestre
            th.bg-color-11.text-center Tercer trimestre
            th.bg-color-11.text-center Primer trimestre
            th.bg-color-11.text-center Segundo trimestre
            th.bg-color-11.text-center Tercer trimestre
          tr
            th(colspan="6").text-center.bg-color-10 NÚMERO DE INTERCAMBIOS
           
        tbody
          tr.bg-color-white
            td.text-bold(rowspan="4") GRUPO I: Cereales, raíces. Tubérculos y plátanos.
            td.text-bold.text-center Cereales
            td.text-center 3,5
            td.text-center 3,5
            td.text-center 3,5
            td.text-center 3,5
            td.text-center 3,5
            td.text-center 3,5
            
          tr.bg-color-white
            td.text-bold.text-center Raíces
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
          tr.bg-color-white
            td.text-bold.text-center Tubérculos
            td.text-center 1,0
            td.text-center 2,0
            td.text-center 2,0
            td.text-center 1,0
            td.text-center 2,0
            td.text-center 2,0
          tr.bg-color-white
            td.text-bold.text-center Plátanos
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,5
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,5 
          tr.bg-color-white
            td.text-bold(rowspan="2") GRUPO 2: Frutas y verduras
            td.text-bold.text-center Frutas
            td.text-center 3,0
            td.text-center 3,0
            td.text-center 3,5
            td.text-center 3,0
            td.text-center 3,0
            td.text-center 3,5
          tr.bg-color-white
            td.text-bold.text-center Verduras
            td.text-center 2,0
            td.text-center 2,0
            td.text-center 2,5
            td.text-center 0,0
            td.text-center 0,0
            td.text-center 2,5 
          tr.bg-color-white
            td.text-bold(rowspan="3") GRUPO 3: Leche y productos lácteos
            td.text-bold.text-center Leche entera
            td.text-center 2,0
            td.text-center 2,0
            td.text-center 2,0
            td.text-center 0,0
            td.text-center 0,0
            td.text-center 0,0
          tr.bg-color-white
            td.text-bold.text-center Leche baja en grasa
            td.text-center 0,0
            td.text-center 0,0
            td.text-center 0,0
            td.text-center 2,0
            td.text-center 2,0
            td.text-center 2,0 
          tr.bg-color-white
            td.text-bold.text-center Productos lácteos enteros
            td.text-center 1,5
            td.text-center 1,5
            td.text-center 1,5
            td.text-center 1,0
            td.text-center 3,5
            td.text-center 1,5
          tr.bg-color-white
            td.text-bold(rowspan="5") GRUPO 4: Carnes, huevos, leguminosas, frutos secos y semillas
            td.text-bold.text-center Carnes magras
            td.text-center 3,0
            td.text-center 3,0
            td.text-center 3,5
            td.text-center 3,5
            td.text-center 1,0
            td.text-center 3,5 
          tr.bg-color-white
            td.text-bold.text-center Productos altos en grasas y colesterol
            td.text-center 0,5
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
          tr.bg-color-white
            td.text-bold.text-center Huevos
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
          tr.bg-color-white
            td.text-bold.text-center Leguminosas
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
          tr.bg-color-white
            td.text-bold.text-center Frutos secos y semillas
            td.text-center 1,0
            td.text-center 0,7
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 2,0
            td.text-center 2,0
          tr.bg-color-white
            td.text-bold(rowspan="3") GRUPO 5: Grasas
            td.text-bold.text-center Poliinsaturadas
            td.text-center 3,0
            td.text-center 3,0
            td.text-center 3,0
            td.text-center 3,0
            td.text-center 3,0
            td.text-center 3,5 
          tr.bg-color-white
            td.text-bold.text-center Monoinsaturadas
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,0
            td.text-center 1,5
          tr.bg-color-white
            td.text-bold.text-center Saturadas
            td.text-center 0,0
            td.text-center 0,0
            td.text-center 0,0
            td.text-center 0,0
            td.text-center 0,0
            td.text-center 0,0
          tr.bg-color-white
            td.text-bold(rowspan="2") GRUPO 6: Azúcares
            td.text-bold.text-center Azúcares simples
            td.text-center 2,0
            td.text-center 2,0
            td.text-center 2,0
            td.text-center 2,0
            td.text-center 2,0
            td.text-center 2,0
          tr.bg-color-white
            td.text-bold.text-center Dulces y postres.
            td.text-center 1,0
            td.text-center 1,5
            td.text-center 1,5
            td.text-center 1,0
            td.text-center 1,5
            td.text-center 1,5 
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 <b>Nota</b>. Elaboración del CTNGA, a partir del cálculo de recomendaciones de ingesta de energía y nutrientes, según Resolución 3803 de 2016 del Ministerio de Salud y Protección Social, para estos grupos de población. Tomado de UNICEF (2018), guías alimentarias para mujeres gestantes, madres en periodo de lactancia, niños y niñas menores de dos años.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Período de lactancia
    
    p.mb-4 Para estudiar el tema del período de lactancia, lo invitamos a ver el siguiente video.

    .bg-full-width-2.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/CKQuU1elvCk?si=K5AmH4QTnNtRyM-7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-4 En relación con la práctica de <b>extracción de la leche materna</b>, que es el mecanismo más seguro para que el bebé cuente con suficiente alimento y la madre pueda aprovechar su producción completa:

    .bg-full-width-2.bg-fondo-slider.mb-4
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-lg-1
              p Esta debe ser extraída en las mayores condiciones de asepsia y almacenarse en un recipiente que pueda lavarse fácilmente, que resiste la ebullición y que no represente problemas para la salud del bebé, por ello se recomiendan los frascos de vidrio, los cuales además permiten la conservación en la nevera. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-lg-1
              p Todos los utensilios como frascos, tapas o tazas que entren en contacto directo con la leche materna deben lavarse con agua limpia, jabón y cepillo y hervir por 15 minutos, al igual que las manos deben lavarse cuidadosamente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.order-lg-1
              p El periodo de tránsito entre la lactancia materna y su suspensión requiere la inclusión de otros tipos de alimentos, en lo que se denomina <b>complementación</b>. A partir de los 6 meses, el bebé requiere más aportes de energía y nutrientes que deben garantizarse con la introducción de alimentos. Estos alimentos deben ser variados, frescos y naturales, sin adición de sal, ni azúcar. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7.order-lg-1
              p Este periodo de transición a otros alimentos genera vulnerabilidad en los bebés, pues si las prácticas de alimentación no son apropiadas, están expuestos a sufrir malnutrición tanto por déficit de consumo de alimentos, como por exceso en el consumo; de igual manera, aumenta el riesgo de infecciones, alergias y enfermedades.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Recomendaciones alimenticias de los 6 meses a los 2 años
    
    p.mb-4 Es necesario que la madre y la familia consulten al pediatra o al profesional de la salud para orientar y verificar el estado de crecimiento, salud y las recomendaciones necesarias, conforme se va dando el desarrollo del infante. A continuación, de acuerdo con la Organización Mundial de la Salud, se listan algunas recomendaciones que son generales, pero debe se debe insistir en el acompañamiento de profesionales especialistas:

    .row.align-items-start.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/17.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="De los 6 a los 8 meses")
            ul.lista-ul.mb-4
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Continúe ofreciendo leche materna a su bebé todas las veces que lo pida. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Ofrezca un alimento nuevo a la vez junto con uno ya conocido.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Introduzca uno nuevo 2 a 4 días después, según la tolerancia del bebé. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Ofrezca comidas muy espesas en puré, hasta que aparezca la habilidad de masticar.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Inicie con 4 a 6 cucharadas postreras por comida, hasta llegar gradualmente a media taza 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 La frecuencia de comidas debe ser progresiva hasta llegar a tres comidas diarias a los 8 meses. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 No adicione sal, azúcar, ni condimentos a las preparaciones. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Prefiera siempre los alimentos preparados en casa. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Agregue diariamente a las comidas una porción de alimentos de origen animal como carnes, vísceras, huevos y quesos frescos. 
          .div(titulo="De los 9 a los 11 meses")
            ul.lista-ul.mb-4
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Continúe ofreciendo leche materna a su bebé.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Ofrezca alimentos finamente picados, machacados y que el bebé pueda coger con la mano. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 La cantidad de alimentos por comida es de media taza 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Ofrezca al menos 3 comidas diarias y, de acuerdo con el apetito del bebé, uno o dos refrigerios.   
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 No adicione sal, azúcar, ni condimentos a las preparaciones. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Prefiera siempre los alimentos preparados en casa.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Incluya una porción de alimentos de origen animal como carnes, vísceras, huevos y quesos frescos. 
          .div(titulo="De los 12 meses a los 2 años")
            ul.lista-ul.mb-4
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Continúe dando de lactar las veces que la niña o el niño quieran, después de las comidas.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 La mayoría de los niños tiene la capacidad de comer los mismos alimentos consumidos por el resto de la familia. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Ofrezca variedad de alimentos sólidos, con algunas texturas modificadas: picados, molidos o trozos pequeños.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 La cantidad de alimentos por comida es de una taza o plato por comida.  
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Ofrezca al menos 3 comidas diarias y, de acuerdo con el apetito del bebé, uno o dos refrigerios. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 No ofrezca productos procesados como los de paquete, bebidas azucaradas, embutidos, entre otros.   
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 No adicione sal, azúcar, ni condimentos a las preparaciones.   
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Prefiera siempre alimentos preparados en casa. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Agregue diariamente a las comidas una porción de alimentos de origen animal como carnes, vísceras, huevos y quesos frescos. 
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Alimentación de los infantes de los 2 años en adelante
    
    .bg-full-width.bg-color-2.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Alimentación de los infantes de los 2 años en adelante 
            p.mb-4(data-aos="fade-right") En el PDF Alimentación de los infantes de los 2 años en adelante, se abordan las recomendaciones clave para fomentar hábitos alimenticios equilibrados, resaltando la importancia de la variedad, las rutinas familiares y el ejemplo de los cuidadores. Además, se destacan prácticas esenciales como la transición hacia alimentos sólidos, la promoción de la higiene dental y la creación de un entorno positivo durante los momentos de comida, fortaleciendo así el bienestar integral de los niños.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Alimentación de los infantes de los 2 años en adelante .
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
  




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/105434?page=3 " target="_blank" rel="noopener noreferrer") MARTÍN, J (2016) Alimentación y nutrición en el embarazo (2a. ed.). Interconsulting Málaga, Editorial ICB.  
            
           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=47zY97jMYMU" target="_blank" rel="noopener noreferrer") Hernández, E. H. (2019, marzo 13). 18 prácticas saludables según la Atención Integral a la Primera Infancia. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=k6DhL4kkb-Q" target="_blank" rel="noopener noreferrer") Food and Agriculture Organization of the United Nations. (12 junio 2021) Lactancia y alimentación complementaria, variada y saludable. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/L5nxuQ9o-To?si=IEU3ADrzr5hoCLDz " target="_blank" rel="noopener noreferrer") Poder consumidor (2021, 2 agosto). Lactancia materna y tips para el inicio de la alimentación complementaria.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
    

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
