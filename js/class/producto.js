"use strict";
export class producto{
    codigo;
    nombre;
    categoria_id;
    marca_id;
    foto;
    stock;
    ranking;

    set(objeto){
        var retorno = {error:''};
        if(typeof objeto.codigo =='undefined') retorno.error='Se esperaba un codigo';
        if(typeof objeto.nombre =='undefined') retorno.error='Se esperaba un nombre';
        if(typeof objeto.categoria_id =='undefined') retorno.error='Se esperaba un Id de categoria';
        if(typeof objeto.marca_id =='undefined') retorno.error='Se esperaba un Id de marca';
        if(typeof objeto.foto =='undefined') retorno.error='Se esperaba una url para foto';
        if(typeof objeto.stock =='undefined') retorno.error='Se esperaba un stock';
        if(typeof objeto.ranking =='undefined') retorno.error='Se esperaba un ranking';

        if (retorno.error==''){
            this.codigo=objeto.codigo;
            this.nombre=objeto.nombre;
            this.categoria_id=objeto.categoria_id;
            this.marca_id=objeto.marca_id;
            this.foto=objeto.foto;
            this.stock=objeto.stock;
            this.ranking=objeto.ranking;
        }
        return retorno;
    }

    get(){
        var objeto={};
        objeto.codigo=this.codigo;
        objeto.nombre=this.nombre;
        objeto.categoria_id=this.categoria_id;
        objeto.marca_id=this.marca_id;
        objeto.foto=this.foto;
        objeto.stock=this.stock;
        objeto.ranking=this.ranking;
        return objeto;
    }

    load(objeto){

    }
}