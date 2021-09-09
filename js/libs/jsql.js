"use strict"

/** Clase de web Sql 
 * Clase que controla la base de datos local WebSql
 * parametros de contruccion
 *   db = Nombre de la base de datos a utilizar
 * */
class Jsql{
    conn=null;
    constructor(param){    
        this.conn = openDatabase(param.db, '1.0', 'base de tendero', 2*1024 * 1024);
    }

    query(sql){
        this.conn.transaction(function(tx){
            tx.executeSql(sql);
        });
    }

    saludo(){
        console.log("Hola mundo.")
    }
}

export {Jsql}