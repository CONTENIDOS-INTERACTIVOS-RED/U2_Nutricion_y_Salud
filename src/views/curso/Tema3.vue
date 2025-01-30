<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Prevención en situaciones de riesgo para la salud infantil'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8 
        p(data-aos="fade-left").mb-4 Invertir y cuidar la infancia es aportar al capital humano y en las generaciones futuras, por eso los mandatarios, familias, docentes y cuidadores, tienen la obligación que cada niño cumpla con su derecho a vivir, sobrevivir, desarrollarse, aprender, jugar y participar. 
        .bg-color-5.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 De acuerdo con la agenda 2030 de los Objetivos del Desarrollo Sostenible y la Estrategia Mundial para la Salud de las Mujeres, los Niños y los Adolescentes, se están recomendando enfoques más integrados y colaborativos para abordar las desigualdades en salud, el ámbito social, las dimensiones ambientales y económicas del desarrollo. El crecimiento y desarrollo saludable y óptimo de la niñez también requiere un hogar seguro, un vecindario seguro y protección contra la violencia y la disciplina dañina.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Promoción, prevención, salud individual, salud colectiva y ambientes saludables
    
    p.mb-4 La <b>promoción y prevención</b> de la salud desde la infancia, son importantes para un crecimiento seguro, un desarrollo personal y una adultez prometedora.

    .row.mb-5.align-items-center
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-3
          p(data-aos="fade-left").mb-0 La promoción de la salud busca que todas las personas tengan un mayor control sobre su salud y la mejoren, mitigando el impacto de los entornos y contextos y mejorando hábitos y rutinas individuales o colectivas. 
        p.text-bold ¿Cómo se puede evitar la desnutrición crónica infantil?
        p Es necesario trabajar en políticas públicas integrales que garanticen:
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in").mb-4.mb-lg-0 
    

    .titulo-figura.mb-4
      h5 Figura 6. 
      span Recomendaciones sobre la prevención de la desnutrición crónica infantil
    .bg-full-width.bg-color-7
      .p-5
        .row.justify-content-center.align-items-center.p-4
          .col-lg-11
            figure
              img(src="@/assets/curso/tema3/4d.png", data-aos="zoom-in")
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-bold Los primeros 1.000 días de vida, corresponden a casi los 3 primeros años de vida de un infante, etapa crucial del crecimiento.
    
    p.mb-4 La prevención es clave para evitar enfermedades y problemas de salud, además es más efectivo (e incluso económico) prevenir enfermedades o lesiones que tratarlos una vez que se han desarrollado. 

    .bg-h85
      .row.justify-content-end.align-items-end.mb-4
        .col-lg-6.order-2
          p.text-bold Algunas acciones para promover la salud en la infancia son: 
          ol.lista-ol--cuadro(data-aos="fade-up")
            li 
              .lista-ol--cuadro__vineta.text-white.bg-color-9
                span 1
              | Hay que asegurar que los niños duerman y se ejerciten lo suficiente. 
            li 
              .lista-ol--cuadro__vineta.text-white.bg-color-9
                span 2
              | Aportarles alimentos saludables.
            li 
              .lista-ol--cuadro__vineta.text-white.bg-color-9
                span 3
              | Garantizar su seguridad en el lugar donde se encuentren. 
            li 
              .lista-ol--cuadro__vineta.text-white.bg-color-9
                span 4
              | Realizar chequeos médicos regulares y activar protocolos en caso de alertas tempranas.
            li 
              .lista-ol--cuadro__vineta.text-white.bg-color-9
                span 5
              | Participar activamente en estrategias de promoción de la salud. 

        .col-lg-6.order-1.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/5.svg", data-aos="zoom-in")
    
    .titulo-figura.mb-4
      h5 Figura 7. 
      span Los entornos seguros y saludables para la niñez, consideran la promoción y prevención
    .row.justify-content-center.align-items-center.mb-5.bg-color-7.p-4
      .col-lg-8
        figure
          img(src="@/assets/curso/tema3/6.svg", data-aos="zoom-in")
    

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Enfermedades infantiles asociadas a la nutrición

    p La malnutrición infantil desencadena enfermedades físicas y agudas en la población. Cuando la enfermedad se prolonga, se asume el riesgo de consecuencias irreparables frente a la salud cognitiva, el desarrollo y hasta la vida del infante. 
    p.mb-4.text-bold Dentro de las enfermedades asociadas a la malnutrición infantil, las más comunes son:

    .row.align-items-start.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema3/7.png", alt="").mb-4.mb-lg-0
      .col-lg-7.order-1.mb-3.mb-lg-0
        AcordionA(tipo="b")
          .div(titulo="Anemia")
            p Sus síntomas son irritabilidad, lentitud, falta de fuerza muscular, pocos deseos de comer y experimentar dolor de cabeza o mareo.  
            p Su piel se vuelve pálida en la palma de la mano, seca, escamosa y el cabello se torna seco, opaco y pajizo. 
            p La anemia significa que hay bajos niveles de glóbulos rojos en el cuerpo, su principal causa es el bajo consumo de alimentos que contienen hierro.


          .div(titulo="Diabetes")
            p La sed excesiva, cansancio, idas al baño con mayor frecuencia con alto volumen de orina y los mareos son algunos de los síntomas.
            p La obesidad es uno de los causantes de la diabetes tipo 2. 
            p La obesidad causa que el páncreas produzca menos insulina para controlar los niveles de azúcar, y esto produce un mal funcionamiento en el organismo, para lo cual se requiere tratamiento.
            p La diabetes tipo 2 se presenta cada vez más en niños y adolescentes, debido al tipo de alimentación y el estilo de vida.


          .div(titulo="Hipertensión arterial")
            p Los niños que tienen sobrepeso son propensos a sufrir de presión arterial alta. Entre los síntomas se encuentran la dificultad para respirar, alteraciones visuales, dolor de cabeza, mareos y fatiga.
            p Detectar a tiempo que un niño sufre de hipertensión es clave para evitar que se vuelva un problema mayor, llegando a una enfermedad renal o cardiovascular. 


          .div(titulo="Gastritis")
            p Este trastorno digestivo se presenta por el consumo frecuente de comidas condimentadas o productos procesados. 
            p También por no tomar los alimentos en horarios regulares o incluso saltarse las comidas como el desayuno o la cena.
            p La gastritis se presenta como una inflación de la mucosa gástrica y el niño afectado puede tener síntomas como dolor abdominal, vómitos, falta de apetito, náuseas, y en casos más severos, puede estar acompañada con sangrados en los vómitos.
          .div(titulo="Enfermedades odontológicas")
            p El alto consumo de bebidas envasadas, alimentos procesados o dulces aumenta las posibilidades de tener una deficiente salud oral y en especial desarrollar caries y manchas en los dientes.
          .div(titulo="Dificultades cognitivas asociadas a la baja ingesta de alimentos")
            p El desarrollo motor y cognitivo se ve comprometido en el aprendizaje y las actividades físicas de los menores. Esto se evidencia en la medida en que el infante es expuesto a desarrollar tareas que no puede ejecutar o que presenta síntomas asociadas a dificultades en el aprendizaje.













    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112012000500007#:~:text=En%20este%20sentido%2C%20las%20estrategias,docentes%20y%20de%20la%20comunidad" target="_blank" rel="noopener noreferrer") Camargo, C y Pinzón G (2012). La promoción de la salud en la primera infancia: evolución del concepto y su aplicación en el contexto internacional y nacional.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=XaGXPtwqm3c" target="_blank" rel="noopener noreferrer") Acción Contra el Hambre (2023) 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'NUTRICION Y SALUD INFANTIL',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es la finalidad de la Política Nacional de Infancia y Adolescencia? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Contribuir al desarrollo integral de las niñas, niños y adolescentes.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Aumentar la población infantil.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Reducir la pobreza en el país.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Fomentar la educación superior.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué documento internacional establece los derechos de los niños? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Declaración Universal de los Derechos Humanos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Convención sobre los Derechos del Niño.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Código de la Infancia y la Adolescencia.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Pacto Internacional de Derechos Civiles.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué enfoque se utiliza para garantizar la equidad en la atención a la infancia y adolescencia? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Enfoque de desarrollo humano.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Enfoque de derechos humanos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Enfoque de género.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Enfoque diferencial.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué porcentaje de la población colombiana entre 6 y 17 años corresponde a niñas, niños y adolescentes según el DANE en 2017? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '22 %.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: '20 %.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: '15 %.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '30 %.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es uno de los objetivos específicos de la Política Nacional de Infancia y Adolescencia? (CON)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomentar la migración juvenil.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Potenciar la capacidad de agencia y protagonismo.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aumentar la matrícula escolar.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reducir la violencia intrafamiliar.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
