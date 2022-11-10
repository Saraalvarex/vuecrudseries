<template>
 <div style="width: 900px; margin: 0 auto">
    <h1>Personajes</h1>
       <router-link :to="'/serie/'+this.$route.params.idserie" class="btn btn-warning">
    <span aria-hidden="true">&larr;</span> Back
   </router-link>
    <div v-if="status==false">
            <img src="./../assets/logo.png"/>
        </div>
    <table class="table table-dark table-hover table-bordered border-warning" v-else>    
    <thead> 
        <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Imagen</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="person in personajes" :key="person">
        <th scope="row">{{person.nombre}}</th>
        <td> <img style="width: 200px" :src="person.imagen"/></td>
    <!-- <td>
        <router-link class="btn btn-outline-light" :to="'/detalles/'+depart.numero+'/'+depart.nombre+'/'+depart.localidad">Detalles</router-link>
        <router-link class="btn btn-outline-warning" :to="'/modificar/'+depart.numero">Modificar</router-link> -->
        <!-- <router-link class="btn btn-outline-danger" :to="'/delete/'+depart.numero">Eliminar</router-link> -->
        <!-- <button class="btn btn-outline-danger" @click="deleteItem(depart.numero)">Eliminar</button>
    </td> -->
        </tr>
    </tbody>
    </table>
 </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

export default {
 name: 'PersonajesComponenent',
 data() {
 return {
    personajes: null, status: false
 };
 },
 mounted(){
    service.getPersonajes(this.$route.params.idserie).then(result=>{
        this.personajes=result;
        this.status=true;
    })
 }
};
</script>

<style scoped>

</style>