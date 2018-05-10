function Pedirdatos() {
	//Pedida del dato 1

	var miDato1;
	var miDato2;
	var miResultado;


	miDato1 = document.getElementById('Dato1');
	miDato2 = document.getElementById('Dato2');
	
	miResultado = document.getElementById('Resultado');
	miResultado.innerHTML = "Los datos introducidos son:  " + miDato1.value +" y " + miDato2.value;	
}

function Suma() {
	//calculos

	var miDato1,
		miDato2,
		miResultado,
		res;

		miDato1 = document.getElementById('Dato1');
		miDato2 = document.getElementById('Dato2');
		miResultado = document.getElementById('Resultado');
		
		miDato1 = parseInt(miDato1.value);
		miDato2 = parseInt(miDato2.value);

		res = miDato1 + miDato2

		miResultado.innerHTML = " El resultado es " + res;


}

function Resta() {
	//calculos

	var miDato1,
		miDato2,
		miResultado,
		res;

		miDato1 = document.getElementById('Dato1');
		miDato2 = document.getElementById('Dato2');
		miResultado = document.getElementById('Resultado');
		
		miDato1 = miDato1.value;
		miDato2 = miDato2.value;

		res = miDato1 - miDato2

		miResultado.innerHTML = " El resultado es " + res;

}

function Mul() {
	//calculos

	var miDato1,
		miDato2,
		miResultado,
		res;

		miDato1 = document.getElementById('Dato1');
		miDato2 = document.getElementById('Dato2');
		miResultado = document.getElementById('Resultado');
		
		miDato1 = miDato1.value;
		miDato2 = miDato2.value;

		res = miDato1 * miDato2

		miResultado.innerHTML = " El resultado es " + res;

}

function Div() {
	//calculos

	var miDato1,
		miDato2,
		miResultado,
		res;

		miDato1 = document.getElementById('Dato1');
		miDato2 = document.getElementById('Dato2');
		miResultado = document.getElementById('Resultado');
		
		miDato1 = miDato1.value;
		miDato2 = miDato2.value;

		res = miDato1 / miDato2

		miResultado.innerHTML = " El resultado es " + res;

}
