/**
 * Clon de JQuery escrito por Jesus Laynes Guatemala Centro América.
 * Se permite el uso de esta libreria pero nos eximimos de daños y perjuicios
 * por ser completamente gratuita.
 * 
 * Para soporte o comentarios comunicarse con jesla99@gmail.com
 * 
*/

function jwq(element_id) {
	if ( typeof element_id != 'function'){
		this.node = document.querySelectorAll(element_id);

		this.css = function(prop, val) {
			if (typeof prop == 'object'){
				for (i=0; i<this.node.length; i++ ){
					for (var key in prop){
						this.node[i].style[key]=prop[key];
					}
				}
			}else{
				if ( typeof val == 'undefined' ) {
					return this.node[0].style[prop];
				}else {
					for (i=0; i<this.node.length; i++ ){
						this.node[i].style[prop]=val;
					}
				}
			}
		}
		
		this.next = function(){
			console.log(1)
		}

		this.prev = function(){
			console.log(2)
		}


		this.each = function (a, r){		
			if (typeof r == 'undefined') ret = a; else ret = r;
			if (typeof a != 'function') lst = a; else lst = this.node;
			
			for (i=0; i<lst.length; i++){
				ret(lst[i]);
			}
		}
		
		this.html = function (html){
			if ( typeof html == 'undefined' ){
				return this.node[0].innerHTML;
			}else{
				this.node[0].innerHTML=html;
				for (var i = 0; i<this.node[0].childNodes.length; i++){
					 if(this.node[0].childNodes[i].tagName == 'SCRIPT'){
						 eval.apply( window, [this.node[0].childNodes[i].innerHTML] );
					 }
				};
			}
		}

		this.position = function (){
   			return {"left":this.node[0].offsetLeft,"top":this.node[0].offsetTop};
			
		}

		this.height = function (){
			var rect = this.node[0].getBoundingClientRect();
   			return parseInt(rect.height);
			
		}
		this.width = function (){
			var rect = this.node[0].getBoundingClientRect();
   			return parseInt(rect.width);
		}

		this.hasClass = function (ob, cls){
			if (typeof cls=='undefined') var lst = this.node[0].getAttribute('class').split(' ');
			else var lst = ob.getAttribute('class').split(' ');

			var found=-1;
			for (var i=0; i<lst.length; i++) if (lst[i]==cls) found=i;
			return found;
		}
		
		this.addClass = function (nclass){
			var isfound=this.hasClass;
			this.each(this.node, function (ob){
				var found=isfound(ob, nclass);
				var lst = ob.getAttribute('class').split(' ');
				if (found==-1)lst.push(nclass);
				var f=lst.join(' ');
				ob.setAttribute('class', f);
			});
		}
		
		this.removeClass = function (nclass){
			var isfound=this.hasClass;
			this.each(this.node, function (ob){
				var found=isfound(ob, nclass);
				var lst = ob.getAttribute('class').split(' ');
				if (found>-1) lst.splice(found,1);
				var f=lst.join(' ');
				ob.setAttribute('class', f);			
			});
		}

		this.val = function (txt){
			if (typeof txt == 'undefined')	return this.node[0].value;
			else this.node[0].value=txt;
		}
		
		this.attr = function (prop, val){
			if ( typeof val == 'undefined' ) {
				return this.node[0].getAttribute[prop];
			}else {
				for (i=0; i<this.node.length; i++ ){
					this.node[i].setAttribute[prop]=val;
				}
			}
		}
		
		this.data = function (){
			if ( typeof val == 'undefined' ) {
				return this.node[0].getAttribute['data-'+prop];
			}else {
				for (i=0; i<this.node.length; i++ ){
					this.node[i].setAttribute['data-'+prop]=val;
				}
			}
		}
		
		this.on = function (ev, callBack){
			ev=ev.toUpperCase();
			for(var i=0; i<this.node.length; i++){
				var ob=this.node[i];
				switch(ev){
					case "CLICK":
					case "CLIC":
						//ob.addEventListener("click", callBack);
						ob.onclick=callBack;
					break;
				} 
			}
		}
		
		this.focus = function (){
			if (this.node.tagName != undefined) 
				this.node.focus();
		}

		this.append = function (txt){
			if(this.node[0]!=undefined)
			this.node[0].innerHTML+=txt;
		}
		
		this.remove = function(){
			this.node[0].parentNode.removeChild(this.node[0]);
		}
		
	}else {
		eval("ex="+element_id);
		ex();
	}

}

reto = function(){
	this.fail=function (){};
}

var $ = function( element_id ){
	return new jwq( element_id );
};

$.post = function(url,param,c, head){
	if(typeof param=='object') param = Object.keys(param).reduce(function(a,k){a.push(k+'='+encodeURIComponent(param[k]));return a},[]).join('&');
	var obj;
	try {   
		obj = new XMLHttpRequest();  
	} catch(e){   
	   try {     
		 obj = new ActiveXObject("Msxml2.XMLHTTP");     
	   } catch(e) {     
		 try { 
		   obj = new ActiveXObject("Microsoft.XMLHTTP"); 
		 } catch(e) {       
		   console.log("Por alguna raz�n no se pudo construir la funci�n jwfPost.");
		   c({"_Debug":"Error al querer contruir $post"});
		 }
	   }   
	 }
	 
	 obj.onreadystatechange = function() {
		if(this.status==400){console.log( 'Archivo no encontrado.' ); c({"_Debug": "Servidor No encontrado."})}
		if(this.readyState!==4) return;
		if(this.status==404) {
			console.log("SERVIDOR NO ENCONTRADO");
			return;}
		if(this.status!==200) return;
		c(this.responseText);
	 }


	 obj.open('POST', url, true);
	 param = encodeURI(param);
	 obj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	 if (typeof head == 'object')
		 for (var key in head)
	 		obj.setRequestHeader(key, head[key]);
	 obj.send(param);
	 return new reto();
}