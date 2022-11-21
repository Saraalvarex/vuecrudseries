<template>
    <router-link to="/" class="btn btn-warning">
        <span aria-hidden="true">&larr;</span> Back
    </router-link>
   <br/><br/>
    <h1>Update</h1>
 <div style="width: 270px; margin: 0 auto">
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
    <br/>
 </div>
 <div class="container">
     <!-- Si se ha modificado correctamente pinto -->
    <div class="justify-content-center align-items-center" style="width: 50%" v-if="statusModif==true">
    <!-- Pinto serie y personaje -->
    <table class="table table-dark table-hover table-bordered border-warning">    
    <thead>
        <tr>
            <th class="table table-warning" colspan="2">Serie</th>
            <th class="table table-warning" colspan="2">Personaje</th>
        </tr>
        <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">{{serie.nombre}}</th>
            <td><img style="width: 200px" :src="serie.imagen"/></td>
            <th scope="row">{{personaje.nombre}}</th>
            <td><img style="width: 150px" :src="personaje.imagen"/></td>
        </tr>
    </tbody>
    </table>
    </div>
</div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

export default {
 name: 'UpdateComponent',
 data() {
    return {
        personajes: null,
        series: null,
        idpersonaje: 9,
        idserie: 1,
        serie: {},
        personaje: {},
        status: false,
        statusModif: false
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
            // this.$router.push("/personajes/"+this.idserie)
            service.getSerie(this.idserie).then(resu =>{
                this.serie=resu;
                this.statusModif=true;
            })
            service.getPersonaje(this.idpersonaje).then(resu => {
                this.personaje=resu;
            })
        });
    }
 }
};
</script>

<style scoped>
</style>