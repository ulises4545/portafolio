<script>
import InvestigacionesCard from "./InvestigacionesCard.vue";

export default {
  components: {
    InvestigacionesCard,
  },
};
</script>
<template>
  <section id="investigaciones" class="contacto seccion-oscura mt-5">
    <div class="container">
      <div class="container text-center rectangulo d-flex">
        <div class="row">
          <InvestigacionesCard
            class="mt-5"
            titulo="QUE ES JAVASCRIPT"
            descripcion="JavaScript es un lenguaje de programación de alto nivel que se
            utiliza principalmente en el desarrollo web. Fue creado en 1995 por
            Brendan Eich mientras trabajaba en Netscape Communications
            Corporation y ha evolucionado mucho desde entonces. Se diseñó
            inicialmente para ser un lenguaje de programación complementario
            para los navegadores web, permitiendo a los desarrolladores crear
            sitios web interactivos y dinámicos que pueden responder a la
            entrada del usuario. JavaScript es un lenguaje de programación
            interpretado, lo que significa que el código se ejecuta línea por
            línea sin necesidad de compilarlo antes. Además, es un lenguaje
            orientado a objetos, lo que significa que se utiliza para crear
            objetos que contienen propiedades y métodos que pueden manipular
            datos y realizar acciones. A lo largo de los años, JavaScript se ha
            convertido en uno de los lenguajes de programación más populares del
            mundo, gracias a su flexibilidad, facilidad de uso y amplia gama de
            aplicaciones. Se utiliza en una variedad de campos, incluyendo la
            programación de sitios web, aplicaciones móviles, videojuegos,
            herramientas de automatización y mucho más. En resumen, JavaScript
            es un lenguaje de programación esencial para cualquier persona
            interesada en el desarrollo web y la creación de aplicaciones
            interactivas y dinámicas en línea. Con su versatilidad y
            popularidad, es una habilidad valiosa para cualquier programador o
            desarrollador que busque avanzar en su carrera."
          ></InvestigacionesCard>
          <InvestigacionesCard
            titulo="BOOTSTRAP, VUEJS"
            descripcion="Bootstrap es un marco de trabajo de código abierto que permite a los
            desarrolladores crear sitios web y aplicaciones web rápidamente
            utilizando HTML, CSS y JavaScript. Fue creado por Twitter en 2010 y
            se ha convertido en uno de los marcos de trabajo de diseño web más
            populares del mundo. Bootstrap se basa en el concepto de diseño
            responsivo, lo que significa que los sitios web y las aplicaciones
            creadas con él se ajustarán automáticamente a diferentes tamaños de
            pantalla, desde dispositivos móviles hasta pantallas de escritorio.
            Bootstrap ofrece una variedad de componentes predefinidos, como
            botones, formularios, navegación y mucho más, lo que hace que el
            proceso de desarrollo sea más rápido y eficiente. También
            proporciona una amplia gama de plantillas y temas personalizables,
            lo que facilita la creación de sitios web y aplicaciones con un
            diseño atractivo y coherente. <br /><br />
            Por otro lado, Vue.js es un marco de trabajo de JavaScript de código
            abierto utilizado para construir interfaces de usuario. Fue creado
            por Evan You en 2014 y ha ganado popularidad en los últimos años.
            Vue.js se basa en la arquitectura de componentes, lo que significa
            que las aplicaciones construidas con Vue.js se descomponen en
            componentes reutilizables y personalizables. Vue.js también es
            conocido por su capacidad de rendimiento rápido y su facilidad de
            integración con otras bibliotecas o marcos de trabajo. En resumen,
            Bootstrap es un marco de trabajo utilizado para crear sitios web y
            aplicaciones web de manera rápida y eficiente, mientras que Vue.js
            se utiliza para construir interfaces de usuario interactivas y
            escalables. Ambos son herramientas valiosas para cualquier
            desarrollador web o de aplicaciones que busque acelerar el proceso
            de desarrollo y mejorar la experiencia del usuario final."
          ></InvestigacionesCard>
          <InvestigacionesCard
            titulo="RENDERING DECLARATIVO, DIRECTIVAS PERSONALIZADAS, REPRESENTACIÓN DE LISTA."
            descripcion="El rendering declarativo es un enfoque de programación utilizado en muchos marcos de trabajo y bibliotecas de JavaScript, incluyendo React y Vue.js, que permite a los desarrolladores describir cómo debe ser la interfaz de usuario sin preocuparse por los detalles específicos de cómo se implementa. En lugar de manipular directamente el DOM (Document Object Model), los desarrolladores declaran qué elementos deben aparecer en la pantalla y en qué condiciones, y el marco de trabajo se encarga de la implementación subyacente. Este enfoque puede hacer que el código sea más fácil de leer, mantener y depurar, y también puede mejorar el rendimiento de la aplicación al reducir la necesidad de manipulaciones directas del DOM. Las directivas personalizadas son una característica clave de los marcos de trabajo de JavaScript como Vue.js, que permiten a los desarrolladores extender la funcionalidad de HTML con sus propias etiquetas personalizadas y atributos. Las directivas personalizadas pueden usarse para manipular el DOM, aplicar estilos, manejar eventos y mucho más. Por ejemplo, en Vue.js, se puede crear una directiva personalizada llamada v-focus que establece el enfoque en un elemento de formulario cuando se muestra en la pantalla. La representación de lista es un patrón común utilizado en muchos marcos de trabajo de JavaScript para mostrar listas de datos en la interfaz de usuario. En lugar de codificar manualmente los elementos de la lista en el HTML, los desarrolladores utilizan un ciclo de renderizado para crear elementos de lista dinámicamente a partir de un conjunto de datos. Por ejemplo, en React, se puede utilizar la función de mapa para recorrer un arreglo de datos y generar elementos de lista dinámicamente. La representación de lista puede ayudar a hacer que el código sea más modular, escalable y fácil de mantener, especialmente cuando se trabaja con grandes conjuntos de datos."
          ></InvestigacionesCard>
          <InvestigacionesCard
            titulo="EVENTOS, MANEJADORES DE EVENTOS, MODIFICADORES DE EVENTOS, CLASES Y ESTILOS ENTIEMPO REAL."
            descripcion="Los eventos son una parte fundamental de la programación web que permiten a los usuarios interactuar con la interfaz de usuario de una aplicación o sitio web. En JavaScript, los eventos pueden ser desencadenados por una variedad de acciones, como hacer clic en un botón, mover el mouse, escribir en un campo de formulario, etc. Los eventos pueden ser manejados por código JavaScript, que puede ejecutar una serie de acciones en respuesta al evento.

Los manejadores de eventos son funciones de JavaScript que se ejecutan cuando ocurre un evento. En la mayoría de los marcos de trabajo de JavaScript, los manejadores de eventos se adjuntan a los elementos de la interfaz de usuario utilizando métodos específicos del marco de trabajo. Por ejemplo, en Vue.js, los manejadores de eventos se definen como métodos dentro del objeto de opciones del componente y se adjuntan a los elementos de la interfaz de usuario utilizando directivas especiales.

Los modificadores de eventos son una característica de algunos marcos de trabajo de JavaScript, como Vue.js, que permiten modificar el comportamiento predeterminado de un evento. Por ejemplo, el modificador prevent puede usarse para evitar que el navegador realice la acción predeterminada asociada con un evento, como seguir un enlace o enviar un formulario. Otros modificadores comunes incluyen stop para detener la propagación del evento y once para asegurarse de que un evento se maneje solo una vez.

Las clases y estilos en tiempo real son una característica de muchos marcos de trabajo de JavaScript que permiten cambiar dinámicamente la apariencia de la interfaz de usuario en respuesta a eventos o cambios en el estado de la aplicación. Por ejemplo, en Vue.js, se pueden utilizar las directivas v-bind:class y v-bind:style para cambiar dinámicamente las clases y los estilos asociados con un elemento de la interfaz de usuario en tiempo real. Esto puede ser útil para crear interacciones de usuario más dinámicas y atractivas."
          ></InvestigacionesCard>
          <InvestigacionesCard
            titulo="SISTEMA DE COMPONENTES, INTRODUCCIÓN AL SISTEMA DE COMPONENTES, CREAR COMPONENTES CUSTOM."
            descripcion="Un sistema de componentes es un enfoque de diseño y desarrollo de software que se centra en la creación y reutilización de componentes de software modulares y reutilizables. En el contexto de la programación web, los sistemas de componentes se utilizan comúnmente en marcos de trabajo de JavaScript como React y Vue.js para crear interfaces de usuario dinámicas y escalables.

La introducción al sistema de componentes implica familiarizarse con la idea de que una interfaz de usuario se puede descomponer en componentes más pequeños y reutilizables. Estos componentes pueden ser construidos utilizando una variedad de tecnologías, como HTML, CSS y JavaScript, y pueden ser diseñados para ser altamente personalizables y extensibles. Los componentes se pueden usar y reutilizar en toda la aplicación, lo que puede ahorrar tiempo y esfuerzo en el desarrollo y mantenimiento del código.

Crear componentes personalizados es una tarea común en los marcos de trabajo de JavaScript. En React, los componentes se crean como clases o funciones de JavaScript que devuelven elementos de React (por ejemplo, etiquetas HTML) que representan la interfaz de usuario del componente. En Vue.js, los componentes se definen como objetos de opciones que incluyen datos, métodos y propiedades de estilo para el componente. Los componentes personalizados pueden incluir funcionalidades complejas, como la manipulación de eventos, la gestión de datos y la representación de listas, y se pueden personalizar para adaptarse a los requisitos específicos de la aplicación. Además, muchos marcos de trabajo de JavaScript incluyen bibliotecas de componentes preconstruidos que pueden ser utilizados como bloques de construcción para la creación de aplicaciones."
          ></InvestigacionesCard>
        </div>
      </div>
    </div>
  </section>
</template>
