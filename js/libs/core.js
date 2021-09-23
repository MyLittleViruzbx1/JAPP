import {jwsClient} from './jwsClient0.4.js';
import {Jsql} from './jsql.js';

/**Clase de la aplicaci`on */
class App{
    namespace='';
    url='';
    tipo=0; //0:celular 1:escritorio
    nombre="My jsApp"; //nombre de la aplicacion
    conn = null; //conector a la Base de datos local
    ws = {call:function(x,y,z){
        return {error: "JWS no esta activado en config.js o la propiedad usarJWS esta inactiva"}
    }};
    db='';
    ventanaActual=null; //Indica que ventana esta enfocada, util para el focus y el lost focus

    usarJWS=false; //indica si se debe construir japp.ws
    historial=[]; //pila para controlar la navegacion
    timer = new Procesador(); //controlador de procesos
    vistaRuta = ''//Si aparece vacia se usara las vistas de la estructura de JAPP o bien una ruta diferente
    local = null; //

    constructor(config){
        for(var i in config)
            this[i] = config[i];

        if(typeof config.useJws != 'undefined'){
            if(config.useJws){
                this.ws = new jwsClient(config.url, config.namespace);
            }
        }

        if (this.tipo == 0){ //Si es tipo celular
            var titulo = document.createElement("div");
            titulo.innerHTML = this.nombre;
            titulo.id='jap_titulo';
            document.body.appendChild(titulo);

            var body = document.createElement("div");
            body.id='jap_cuerpo';
            document.body.appendChild(body);
        }
    }

}


export {App}
