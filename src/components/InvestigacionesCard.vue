<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="col-12 col-md-6 descripcion">
    <p class="titulo">{{ titulo }}</p>
  </div>
  <div class="col-12 col-md-6 descripcion">
    {{ descripcion }}
  </div>
  <br />
  <hr />
  <br />
</template>
