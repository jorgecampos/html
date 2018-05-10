function CalcularOperadores() {
	/* Realiza operaciones aritmeticas con documentos html*/

	var miParrafo;
	var valor;

	miParrafo = document.getElementById('Resultado')
	valor = 12 + 20;
	miParrafo.innerHTML += "Sumando los numeros 12 Y 20 = " + valor + "<br>";
	
	valor = 12 - 20;
	miParrafo.innerHTML += "Restando los numeros 12 Y 20 = " + valor + "<br>";
	
	valor = 12 * 20;
	miParrafo.innerHTML += "Multiplicando los numeros 12 Y 20  = " + valor + "<br>";
	
	valor = 12 / 20;
	miParrafo.innerHTML += "Dividiendo los numeros 12 Y 20 = " + valor + "<br>";

	valor = 13;
	miParrafo.innerHTML += "Sumando valor = " + (valor++) + "<br>";

	valor = 13;
	miParrafo.innerHTML += "Sumando valor = " + (++valor) + "<br>";
}