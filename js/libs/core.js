import {jwsClient} from './jwsClient0.4.js';
import {Jsql} from './jsql.js';

/**Clase de la aplicaci`on */
class App{
    namespace='';
    url='';
    tipo=0; //0:celular 1:escritorio
    nombre="My jsApp"; //nombre de la aplicacion
    conn = null; //conector a la Base de datos local
    ws = null;
    db='';

    constructor(config){
        for(var i in config)
            this[i] = config[i];

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
