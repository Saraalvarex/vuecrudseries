<template>
    <h1>Update</h1>
 <div style="width: 500px; margin: 0 auto">
    <form method="post" v-on:submit.prevent="modifyPersonaje()">
        <label>Personajes: </label>
        <select class="form-select" aria-label="Default select example" v-model="idpersonaje">
            <option v-for="personaje in personajes" :key="personaje" :value="personaje.idPersonaje">{{personaje.nombre}}
            </option>
        </select><br/>
        <label>Series: </label>
        <select class="form-select" aria-label="Default select example" v-model="idserie">
            <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{serie.nombre}}
            </option>
        </select><br/>
        <button class="btn btn-success">Modificar</button>
    </form>
 </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

export default {
 name: 'UpdateComponent',
 data() {
    return {
        personajes: null, series: null, idpersonaje: 0, idserie: 0
    }
 },
 mounted(){
    service.getSeries().then(result=>{
        this.series=result;
        this.status=true;
    })
    service.getPersons().then(result=>{
        this.personajes=result;
        this.status=true;
    })
 },
 methods: {
    modifyPersonaje(){
        service.updatePersonaje(this.idpersonaje, this.idserie).then(result => {
            console.log(result);
            this.$router.push("/personajes/"+this.idserie)
        });
    }
 }
};
</script>

<style scoped>

</style>