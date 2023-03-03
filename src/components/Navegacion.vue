<template>
  <nav class="navbar navbar-expand-md navbar-light fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-toggler"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-toggler">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/imagenes/icono-navegacion.png"
            width="50"
            alt="Logo de la página web"
          />
        </a>
        <ul class="navbar-nav d-flex justify-content-center align-items-center">
          <li class="nav-link active" v-for="route in routes" :key="route">
            <router-link :to="route.path" class="nav-link">{{
              route.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <slot></slot>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.routes.push({
        name: route.name,
        path: route.path,
      });
    });
  },
};
</script>

<style scoped>
/* Barra de navegacion */

.navbar {
  padding: 2rem;
  background-color: #f5f6f7;
}

.navbar-collapse {
  align-items: center;
  justify-content: space-between;
}
</style>
