export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Nutrición infantil ',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Condiciones socioeconómicas que afectan la salud y la nutrición infantil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Seguridad alimentaria',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Soberanía alimentaria',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Factores que inciden en la nutrición infantil y que guardan correlación con las condiciones socioeconómicas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Grupos y requerimientos alimentarios por edad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Mujeres gestantes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Período de lactancia',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Recomendaciones alimenticias de los 6 meses a los 2 años',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Alimentación de los infantes de los 2 años en adelante',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Curva de crecimiento y desarrollo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'ICBF y FAO (2018). Guías Alimentarias basadas en Alimentos para mujeres gestantes, madres en período de lactancia y niños y niñas menores de 2 años para Colombia. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2023/11/GUIAS_4.pdf ',
    },
    {
      referencia:
        'ICBF y FAO (2018). Guías Alimentarias Basadas en Alimentos para la Población Colombiana Mayor de 2 Años. ',
      link:
        ' https://www.minambiente.gov.co/wp-content/uploads/2023/11/guias_alimentarias_basadas_en_alimentos_para_la_poblacion_colombiana_mayor_de_2_anos_0.pdf',
    },
    {
      referencia:
        'Latham (2002). En la Comisión Intersectorial de Seguridad Alimentaria y Nutricional de Colombia. (2017). Lineamiento  Nacional de Educación Alimentaria y Nutricional. Bogotá, Colombia.  ',
      link:
        'https://www.icbf.gov.co/system/files/lineamiento_nacional_de_educacion_alimentaria_y_nutricional_validacion_ctean.pdf',
    },
    {
      referencia:
        'MINISTERIO DE SALUD. Fortalecimiento de la estrategia IAMI integral en departamentos priorizados Convenio 519 de 2015. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/lineamientos-iami-2016.pdf ',
    },
    {
      referencia:
        'PNUD. (2017). Programa de las Naciones Unidas para el Desarrollo - PNUD . Los ODS en Acción. Página web. ',
      link:
        'https://www.undp.org/es/colombia/objetivos-de-desarrollo-sostenible',
    },
    {
      referencia: 'REPÚBLICA DE COLOMBIA (2016). Resolución 2465 del ICBF. ',
      link:
        'https://www.icbf.gov.co/sites/default/files/resolucion_no._2465_del_14_de_junio_de_2016.pdf',
    },
    {
      referencia:
        'Bonilla Caballero, Y. (2012).  Análisis detallado de las políticas de alimentación escolar en América Latina para el fortalecimiento del programa de alimentación escolar en Colombia. FAO. Colombia. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/94658',
    },
    {
      referencia:
        'ACCIÓN CONTRA EL HAMBRE. (2024). Programa de acción contra el hambre. ¿Cuál es la situación actual del hambre en el mundo? Página web. ',
      link: 'www.accioncontraelhambre.org',
    },
    {
      referencia:
        'REPÚBLICA DE COLOMBIA. (2008). Consejo Nacional de Política Económica Social. Documento  Conpes Social 113. Política Nacional de Seguridad Alimentaria y Nutricional. Bogotá, Colombia. ',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Conpes/Conpes%20113%20de%202008.pdf',
    },
    {
      referencia:
        'REPÚBLICA DE COLOMBIA y UNICEF. (2011). Instituciones Amigas de la Mujer y la Infancia - IAMI. Lineamientos y criterios globales para el cumplimiento de los 10 pasos de la estrategia. Bogotá, Colombia. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/lineamientos-ami-2011.pdf ',
    },
    {
      referencia:
        'Correa Restrepo, M. (2010). Apuesta por la infancia en Colombia: (ed.). Barranquilla, Colombia: Universidad del Norte. Universidad del Valle, Fundación Fesco, Fundación Caminos de Identidad, Fundación Cultural Genninnndo, Fundación Bernard van Leen, Barranqujlla: Ediciones Uninorte, 20107 ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/85292?page=6.',
    },
    {
      referencia:
        'REPÚBLICA DE COLOMBIA, MINISTERIO DE SALUD e ICBF. (2016). Resolución MINSALUD 2465 . Bogotá, Colombia. ',
      link:
        'www.icbf.gov.co/sites/default/files/anexo_tecnico_3_y_4_resolucion_no._2465_de_2016.pdf',
    },
    {
      referencia:
        'KATZ, D (2015). Nutrición Médica. 3ª edición. Wolters Kluwer. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/94658',
    },
  ],
  glosario: [
    {
      termino: 'Antropometría',
      significado:
        'rama de la ciencia que se ocupa de las mediciones comparativas del cuerpo humano, sus diferentes partes y sus proporciones.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'es la transferencia de microorganismos, como bacterias, virus, parásitos o toxinas, de un alimento a otro. ',
    },
    {
      termino: 'Curvas de crecimiento ',
      significado:
        'son un instrumento que se emplea en el sistema de salud para la promoción y prevención a partir de patrones de estatura, peso y tamaño de la cabeza de los niños, en comparación con otros infantes del mismo rango de edad.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'medida que expresa la dispersión de una serie de valores o puntuaciones con relación a la media aritmética',
    },
    {
      termino: 'Edad gestacional',
      significado:
        'parámetro usado durante la gestación para describir el avance de la gestación a lo largo del tiempo y se mide en semanas, desde la semana 1 hasta la semana 42. Los niños y niñas nacidos antes de la semana 37 son prematuros y los nacidos después de la semana 42 se consideran posmaduros. ',
    },
    {
      termino: 'Estado nutricional',
      significado:
        'resultado de la relación entre la ingesta de energía y nutrientes y el gasto causado por los requerimientos nutricionales, según la edad, sexo, estado fisiológico y actividad física.  ',
    },
    {
      termino: 'Gestación',
      significado:
        'período de tiempo comprendido entre la concepción y el nacimiento. Durante este tiempo, el feto crece y se desarrolla dentro del útero de la madre',
    },
    {
      termino: 'Gobernanza alimentaria',
      significado:
        'se relaciona con los procesos, instituciones, procedimientos y prácticas que se utilizan para regular y decidir los asuntos de la sociedad en materia de alimentación. ',
    },
    {
      termino: 'Guías alimentarias',
      significado:
        'conjunto de planteamientos que brindan orientación sobre el consumo de alimentos, para promover el bienestar nutricional.',
    },
    {
      termino: 'Indicador antropométrico',
      significado:
        'índice estadístico que surge de dos variables que se utiliza para medir cuantitativamente el crecimiento y estado nutricional, toma como base medidas corporales y se obtiene mediante la comparación, contra valores de referencia para la edad y sexo o contra mediciones realizadas en el mismo sujeto en diferentes períodos.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'característica de un producto alimenticio que garantiza que no causa daño a la salud de las personas que lo consumen.',
    },
    {
      termino: 'Patrón de referencia',
      significado:
        'estándar utilizado para la valoración antropométrica mediante la comparación de los datos obtenidos, contra la referencia teórica o ideal.',
    },
    {
      termino: 'Soberanía alimentaria',
      significado:
        'movimiento que busca devolverle al consumidor la capacidad de decisión y control de lo que lleva a la mesa, que esté por encima de los productores agroindustriales e intereses económicos. ',
    },
  ],
}
