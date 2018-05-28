class Contacto{

	//creacion del constructor
	//n --> nombre
	//t --> telefono
	//d --> direccion
	constructor(n, t, d){
		this.nombre = n;
		this.telefono = t;
		this.direccion = d;

	}

	Escribir(elementoHTML)
	{

		var resultado = document.getElementById(elementoHTML)
		resultado.innerHTML += "Nombre: " + this.nombre + "<br>" +
							   "Telefono: " + this.telefono + "<br>" + 
							   "Direccion: " + this.direccion;
	}

	EscribirNombre(elementoHTML)
	{

		var resultado = document.getElementById(elementoHTML)
		resultado.innerHTML += "Nombre: " + this.nombre + "<br>";
	}

	Cambiar(nuevoT){
		this.telefono = nuevoT;

	}

}



class ListaContacto{
	
	//creacion del constructor
	//nContactos --> numero de contactos
	//lista --> lista de contactos
	constructor(){
		this.nContactos = 0;
		this.lista = new Array(5); //crea tabla de 5 elementos
	}

	InsertarContacto(n, t, d){
		var contacto = new Contacto(n, d, t);

		this.lista[this.nContactos] = contacto;
		this.nContactos ++;

	}
	EscribirNombres(elementoHTML){
		//Escribir los elementos 
		//lista. El numero de elementos que almacena
		//en this.nContactos
		var resultado = document.getElementById(elementoHTML);
		resultado.innerHTML ="";
		for (var i = 0; i < this.nContactos; i++){
			//this.lista[i];
			this.lista[i].EscribirNombre(elementoHTML);
		}
	}

}

// Objeto Global
var miLista = new ListaContacto();

function InsertarContactoLista() {
	var miNombre, miDireccion, miTelefono;

	miNombre = document.getElementById('nombre').value;
	miTelefono = document.getElementById('telefono').value;
	miDireccion = document.getElementById('direccion').value;

	miLista.InsertarContacto(miNombre,miTelefono,miDireccion);
	miLista.EscribirNombres('ListaContactoNombre');



}