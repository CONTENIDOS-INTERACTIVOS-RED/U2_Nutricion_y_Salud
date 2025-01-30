<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Curva de crecimiento y desarrollo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-1 
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las curvas de crecimiento son un instrumento que se emplea en el sistema de salud para la promoción y prevención a partir de patrones de estatura, peso y tamaño de la cabeza de los niños, en comparación con otros infantes del mismo rango de edad. 
        p(data-aos="fade-left").mb-4 En el siguiente ejemplo, se visualiza un prototipo de tabla de crecimiento para niñas entre los 0 – 2 años, teniendo como referente el peso en kilogramos y la longitud de la niña. Las curvas de crecimiento son diferenciales para niños y niñas, dadas las condiciones de su desarrollo, según género.
    
    .row.mb-5.bg-color-7.p-4
      .col-lg-6
        .titulo-figura.mb-4
          h5 Figura 2. 
          span Curva de crecimiento de niñas de 0- 2 años - Referente para Colombia (ICBF)
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
            figcaption Nota. Tomado de la Resolución MINSALUD 2465 del 14 de junio del 2016.
      .col-lg-6
        .titulo-figura.mb-4
          h5 Figura 3. 
          span Curva de crecimiento de niños de 0- 2 años - Referente para Colombia (ICBF)
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
            figcaption Nota. Tomado de la Resolución MINSALUD 2465 del 14 de junio del 2016.
    
    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-7
        p Cuando el profesional de la salud identifica cambios sustanciales, remite a los niños y niñas a la orientación médica con el fin de identificar las causas de dichos trastornos o retrasos en el crecimiento. Dentro de las variables que se analizan en las curvas, se encuentran:
        ul.lista-ul.mb-0
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 Peso para la talla.   
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 Talla para la edad.  
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 Perímetro cefálico.
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 Índice de masa corporal – IMC.
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 Peso para la edad. 
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 IMC para la edad. 
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right 
            p.mb-0 Talla para la edad.
    
    p.mb-4 Para entender la Antropometría, los médicos y profesionales de la salud incluyen algunas medidas claves para el seguimiento a los infantes, dentro de lo que se destaca:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="3%" y="93.5%" numero="+")
                h5 Puntuación Z (Z Score)
                p Es la diferencia entre el valor individual y el valor medio de la población de referencia, para la misma edad o talla, dividido entre la desviación estándar de la población de referencia, es decir, identifica cuán lejos de la mediana (de la población de referencia) se encuentra el valor individual obtenido. 
      
              .bg-color-white.box-shadow.p-3(x="28.7%" y="93.5%" numero="+")
                h5 Circunferencia de la cintura
                p Medición del perímetro medio del abdomen en su parte más estrecha o más angosta; determinar la presencia de obesidad abdominal.
      
              .bg-color-white.box-shadow.p-3(x="57.7%" y="94%" numero="+")
                h5 Perímetro del brazo
                p Es la medición del perímetro del brazo en el punto medio entre los puntos acromial y radial o entre los puntos acromial y olécranon . Es una medida útil como predictor del riesgo de muerte por desnutrición en niñas y niños de 6 a 59 meses de edad.
      
              .bg-color-white.box-shadow.p-3(x="83.7%" y="93.5%" numero="+")
                h5 Talla para la edad
                p Indicador de crecimiento que relaciona la talla o longitud con la edad. Da cuenta del estado nutricional histórico o acumulativo. 
      
              .bg-color-white.box-shadow.p-3(x="17.5%" y="8%" numero="+")
                h5 IMC para la edad
                p Índice de masa corporal es un indicador que relaciona, de acuerdo con la edad, el peso corporal total en relación a la talla. Se obtiene al dividir el peso expresado en kilogramos entre la talla expresada en metros cuadrados.   
              .bg-color-white.box-shadow.p-3(x="42.5%" y="8%" numero="+")
                h5 Desnutrición
                p En la medición se indica que la valoración está por debajo de la línea de puntuación -2 desviaciones estándar de puntuación Z en los indicadores peso para la edad, peso para la longitud/talla, longitud/talla para la edad o IMC para la edad.
              .bg-color-white.box-shadow.p-3(x="70%" y="5.7%" numero="+")
                h5 Peso bajo para la edad
                p Peso para la edad por debajo de -2 desviaciones estándar, indica bajo peso para una edad específica, considerando el patrón de referencia.  
                ul.lista-ul.mb-0
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right 
                    p.mb-0 Peso para la edad: indicador antropométrico que relaciona el peso con la edad sin considerar la talla. 
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right 
                    p.mb-0 Peso para la longitud/talla: un indicador de crecimiento que relaciona el peso con longitud o con la talla. Da cuenta del estado nutricional actual del individuo. 
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right 
                    p.mb-0 Retraso en talla: también denominado como talla baja para la edad, que corresponde a un déficit en la talla con relación a la edad. El indicador T/E se encuentra por debajo de -2 desviaciones estándar.
    
    .bg-full-width.bg-color-3.mb-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-end.mb-4
          .col-lg-7(data-aos="fade-left")
            h5.mb-4 Ampliemos la información sobre la desnutrición. En ella encontramos:
            ul.lista-ul.mb-4
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Desnutrición aguda moderada:</b> peso para la talla o longitud menor a -2-y mayor o igual a -3 Desviaciones estándar. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Desnutrición aguda severa:</b> peso para la talla o longitud menor a -3 desviaciones estándar.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Obesidad infantil:</b> peso para la longitud/talla o IMC para la edad por encima de la línea de puntuación +3 desviaciones estándar en menores de 5 años y por encima de la línea de puntuación +2 desviaciones estándar en el grupo de 5 a 17 años de edad. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Riesgo de desnutrición:</b> clasificación antropométrica entre las líneas de puntuación Z ≥ -2 y < -1 desviaciones estándar del indicador peso para la longitud/talla, IMC para la edad o del indicador longitud/talla para la edad.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Riesgo de sobrepeso:</b> clasificación antropométrica entre las líneas de puntuación Z >+1 y ≤+2 desviaciones estándar del indicador peso para la longitud/talla o del indicador IMC para la edad en menores de 5 años. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 <b>Sobrepeso infantil:</b> peso para la longitud/talla o IMC para la edad entre las líneas de puntuación Z >+2 y ≤+3 desviaciones estándar en menores de cinco años y >+1 y ≤+2 desviaciones estándar del indicador IMC/E en el grupo de edad de 5 a 17 años. 
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")

  


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
              a(href="https://open.spotify.com/episode/5ko712fy1DIMDHu5WJgwQO?si=P4UrJ-5ZTI2mV_KtA159bw&t=14 " target="_blank" rel="noopener noreferrer") Podcast Crianza Respetuosa. Episodio 8. Alimentación saludable en la infancia.  

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
