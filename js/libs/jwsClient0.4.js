"use strict";

/**Classe de comunicacion con JWS 0.4
 * Parametros de incio:
 *  url: Direccion del servicio
 *  namespace: Instancia a la que se conecta
 */

class jwsClient{
    jws='0.4';
    version='0.1';
    estado=0; //0:desconectado 1:conectado 2:ocupado 3:timeout
    url='';
    namespace='';
    cache={};
    token='';

    construct(){ //function contructora

    }

    algo = function(){
        console.log("Esto es algo");
    }

    algo2(){
        console.log("Esto es algo2");
    }
}

class nene{

}

export {jwsClient}