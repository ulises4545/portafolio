<script>
import SumarioCard from "./SumarioCard.vue";

export default {
  components: {
    SumarioCard,
  },
};
</script>

<template>
  <section id="sumario" class="experiencia seccion-clara">
    <div class="container text-center">
      <h2 class="seccion-titulo">SUMARIO</h2>
      <div class="row">
        <!-- SEMANA 1-->
        <SumarioCard
          titulo="Desarrollo Frontend con librerias del lado del cliente"
        >
          <li>Introduccion a JavaScript Básico.</li>
          <li>Introduccion a las librerrias (Vue.js y Bootstrap).</li>
          <li>Introduccion a las librerrias (Vue.js y Bootstrap).</li>
          <li>Redering declarativo y manipulacion del DOM.</li>
          <li>Introduccion al rendenring declarativo.</li>
          <li>Expresiones, propiedades y control de flujos con directivas.</li>
          <li>Renderizado de lista.</li>
          <li>Menejo de eventos clases y estilos en tiempo real.</li>
          <li>Sistema de componentes.</li>
          <li>Crear componentes custom.</li>
          <li>Comunicacion entre componentes: propiedades y eventos.</li>
        </SumarioCard>
        <!-- Semana 2 -->
        <SumarioCard
          titulo="Desarollo Backend con el Framework del lado del servidor y base de datos"
        >
          <li>Introduccion al Desarollo con PHP.</li>
          <li>Declaracion de variables.</li>
          <li>Declaracion de funciones.</li>
          <li>Programacion Orientada a Objetos.</li>
          <li>Conexion a base de datos.</li>
          <li>Introduccion a Laravel.</li>
          <li>CRUD con Laravel.</li>
        </SumarioCard>
        <!-- Semana 3 -->
        <SumarioCard titulo="Incorporando tecnologias de Servidor Web">
          <li>Formularios Laravel.</li>
          <li>Sistema de ruta y controladores.</li>
          <li>Validacion de datos.</li>
          <li>Blame: Sistema de plantillas avanzado.</li>
          <li>Trajando con Laravel/UI.</li>
          <li>Creacion de API REST con Laravel.</li>
          <li>Consumo de API REST.</li>
        </SumarioCard>
        <!-- Semana 4 -->
        <SumarioCard titulo="Eventos y Clases">
          <li>Eventos.</li>
          <li>Manejadores de eventos.</li>
          <li>Modificadores de eventos.</li>
          <li>Clases y estilos en tiempo real.</li>
        </SumarioCard>
        <!-- Semana 5 -->
        <SumarioCard titulo="Componentes">
          <li>Sistema de Componentes.</li>
          <li>Introducción al sistema de Componentes.</li>
          <li>Crear Componentes Custom.</li>
        </SumarioCard>
      </div>
    </div>
  </section>
</template>
