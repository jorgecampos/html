class Contacto{

	//creacion del constructor
	constructor(n, t){
		this.nombre = n;
		this.telefono = t;

	}

	Escribir(){
		var resultado = document.getElementById('Resultado')
		resultado.innerHTML += "Nombre: " + this.nombre + "<br>" + "Telefono: " + this.telefono + "<br>";
	}

	Cambiar(nuevoT){
		this.telefono = nuevoT;

	}

}

function CrearContacto(){
	
	 var c1 = new Contacto("pepe",1111),
	     c2 = new Contacto("ana", 2222);

	c1.Escribir();
	c2.Cambiar(3333);
	c2.Escribir();
}
