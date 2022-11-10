import axios from 'axios'
import Global from './../Global'

export default class ServiceSeries {
    getSeries(){
        return new Promise(function(resolve){
            var request = 'api/series/';
            var url = Global.url + request;
            var series = [];
            axios.get(url).then(res=> {
                series = res.data;
                resolve(series)
            })
        });
    }
    insertPersonaje(personaje){
        return new Promise(function(resolve){
            var request = "/api/personajes";
            var url = Global.url + request;
            axios.post(url, personaje).then(response => {
                resolve(response)
            })
        })
    }
    getSerie(idserie){
        return new Promise(function(resolve){
            var request = '/api/Series/'+idserie;
            var url = Global.url + request;
            axios.get(url).then(res=> {
                resolve(res.data)
            })
        });
    }
    getPersonajes(idserie){
        return new Promise(function(resolve){
            var request = '/api/Series/PersonajesSerie/'+idserie;
            var url = Global.url + request;
            var personajes = [];
            axios.get(url).then(res=> {
                personajes = res.data;
                resolve(personajes)
            })
        });
    }
    getPersons(){
        return new Promise(function(resolve){
            var request = 'api/personajes/';
            var url = Global.url + request;
            var personajes = [];
            axios.get(url).then(res=> {
                personajes = res.data;
                resolve(personajes)
            })
        });
    }
    getPersonaje(idpersonaje){
        return new Promise(function(resolve){
            var request = 'api/personajes/'+idpersonaje
            var url = Global.url+request
            axios.get(url).then(res => {
                resolve(res.data)
            })
        })
    }
    updatePersonaje(idpersonaje, idserie){
        return new Promise(function(resolve){
            var request = 'api/Personajes/'+idpersonaje+'/'+idserie
            var url = Global.url+request;
            axios.put(url).then(res=> {
                resolve(res)
            })
        })
    }
}