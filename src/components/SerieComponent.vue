<template>
<div class="card" style="width: 18rem; margin: 0 auto;">
  <img class="card-img-top" :src="serie.imagen" alt="imagen">
  <div class="card-body">
    <h5 class="card-title">Serie {{serie.nombre}}</h5>
  </div>
  <div class="card-body">
   <router-link to="/" class="btn btn-warning">
    <span aria-hidden="true">&larr;</span> Back
   </router-link>
    <!-- <a href="#" class="card-link">Link</a> -->
     <router-link :to="'/personajes/'+serie.idSerie" class="btn btn-success">Personajes</router-link>
  </div>
</div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

export default {
 name: 'SerieComponent',
 data() {
 return {
    serie: {}, status: false
 };
 },
 methods: {

 },
 mounted(){
    service.getSerie(this.$route.params.idserie).then(result=>{
        this.serie=result;
        this.status=true;
    })
 }
};
</script>

<style scoped>

</style>