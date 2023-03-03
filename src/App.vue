<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navegacion from "./components/Navegacion.vue";
</script>

<template>
  <Navegacion>
    <br />
    <RouterView class="mt-5" />
  </Navegacion>
</template>
