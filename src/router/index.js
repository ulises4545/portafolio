import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SumarioView from "../views/SumarioView.vue";
import JornalizacionView from "../views/JornalizacionView.vue";
import CalendarizacionView from "../views/CalendarizacionView.vue";
import TareasView from "../views/TareasView.vue";
import InvestigacionView from "../views/InvestigacionView.vue";
import CalificacionesView from "../views/CalificacionesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/sumario",
      name: "Sumario",
      component: SumarioView,
    },
    {
      path: "/jornalizacion",
      name: "Jornalizacion",
      component: JornalizacionView,
    },
    {
      path: "/calendarizacion",
      name: "Calendarizacion",
      component: CalendarizacionView,
    },
    {
      path: "/tareas",
      name: "Tareas",
      component: TareasView,
    },
    {
      path: "/investigacion",
      name: "Investigacion",
      component: InvestigacionView,
    },
    {
      path: "/calificaciones",
      name: "Calificaciones",
      component: CalificacionesView,
    },
  ],
});

export default router;
