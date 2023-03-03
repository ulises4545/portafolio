<script>
export default {
  name: "SumarioCard",
  props: {
    titulo: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="columna col-12 col-md-4">
    <i class="bi bi-laptop"></i>
    <p class="experiencia-titulo">
      {{ titulo }}
    </p>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
