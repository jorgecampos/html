function Cambiartexto()
{
	/* Cambiar el texto de un elemento con id= "Resultado" del documento HTML */

	var miParrafo;
	var precio = 22.65;

	miParrafo = document.getElementById('Resultado');
	//miParrafo.innerHTML += "Texto cambiado";
	precio = precio + 10;
	miParrafo.innerHTML += 
	   "El precio es " + precio + "<br>" + "El doble precio es " + (precio*2) + "<br>";

	precio = 'muy caro'
	miParrafo.innerHTML += "Tipo de datos: string" + "<br>" + "el doble del precio es: " + + (precio*2) + "<br>";

	precio = false;
	miParrafo.innerHTML += "Tipo de datos: bolean" + "<br>" + "el doble del precio es: " + + (precio*2) + "<br>"; 
}
