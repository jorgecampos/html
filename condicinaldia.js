function CalcularDia(){
	// body...
	var CampoResultado,
		fechaActual,
		diaActual;


	CampoResultado = document.getElementById('Resultado');
	//Instanciacion del objeto Date.
	fechaActual = new Date();
	/*la funcion de getDay devuelve el dia de la samana con fecha:
		0:domingo
		1:lunes*/
	diaActual = fechaActual.getDay();
	switch(diaActual){
		case 1:
			CampoResultado.innerHTML = "Lunes "
		case 2:
		case 3:
		case 4:
		case 5:
			CampoResultado.innerHTML += "Entre semana";
			break;
		case 6:
		case 0:
			CampoResultado.innerHTML += "Fin de semana";
			break;
		default:
			CampoResultado.innerHTML += "Dia no valido";
			break;
	
	}

}