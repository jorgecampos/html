function ObtenerOperando(idOperando) 
{
	var Operando;

	miOperando = document.getElementById(idOperando);
	return parseInt(miOperando.value);
}

function RalizarOperacion(tipoOperacion) {

	var valor1, valor2 , valor;


	
	valor1 = ObtenerOperando('Operando1');
	valor2 = ObtenerOperando('Operando2');

	if(tipoOperacion == '+')
		valor = valor1 + valor2;
	else if (tipoOperacion == '-')
		valor = valor1 - valor2;
	else if (tipoOperacion == '*')
		valor = valor1 - valor2;
	else if (tipoOperacion == '/')
		valor = valor1 - valor2;
	else 
		valor = 0;

	document.getElementById('Resultado').innerHTML = valor ;


 
}
