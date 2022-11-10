import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import InsertPersonaje from './components/InsertPersonaje.vue';
import SerieComponent from './components/SerieComponent.vue';
import PersonajesComponent from './components/PersonajesComponent.vue';
import UpdateComponent from './components/UpdateComponent.vue';

const routes = [
    {
        path: "/", component: HomeComponent        
    },
    {
        path: "/insert/", component: InsertPersonaje
    },
    {
        path: "/serie/:idserie/", component: SerieComponent
    },
    {
        path: "/personajes/:idserie", component: PersonajesComponent
    },
    {
        path: "/modify/", component: UpdateComponent
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes: routes
});

export default router;