<template>
 <div style="width: 500px; margin: 0 auto">
    <h1>Inserta un personaje</h1>
    <h3 style="color: red">{{mensaje}}</h3>
    <form method="post" v-on:submit.prevent="insertarPersonaje()">
    <div class="mb-3">
        <label class="form-label">Id personaje: </label>
        <input type="number" class="form-control" aria-describedby="textHelp" v-model="personaje.idPersonaje">
        <div id="textHelp" class="form-text">Escribe algo</div>
    </div>
    <div class="mb-3">
        <label class="form-label">Nombre personaje: </label>
        <input type="text" class="form-control" aria-describedby="textHelp" v-model="personaje.nombre">
    </div>
    <div class="mb-3">
        <label class="form-label">Imagen src: </label>
        <input type="text" class="form-control" aria-describedby="textHelp" v-model="personaje.imagen">
    </div>
    <div class="mb-3">
        <label class="form-label">Id serie: </label>
        <input type="number" class="form-control" aria-describedby="textHelp" v-model="personaje.idSerie">
        <div id="textHelp" class="form-text">Escribe algo</div>
    </div>
    <button class="btn btn-success">Confirmar</button>
    </form>
 </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

export default {
 name: 'InsertPersonaje',
 methods: {
    insertarPersonaje(){
       service.insertPersonaje(this.personaje).then(result=> {
        console.log(result)
        this.mensaje="Personaje insertado";
        this.$router.push("/personajes/"+this.personaje.idSerie);
       })
    }
}
 ,data() {
    return {
        mensaje: "",
        personaje : {
            "idPersonaje": 0,
            "nombre": "",
            "imagen": "",
            "idSerie": 0
        }
    };
 },
};
</script>

<style scoped>

</style>