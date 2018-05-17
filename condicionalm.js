function CalcularEtapa() {
	// Calcular etapa
	var CampoEdad,
		CampoResultado,
		ValorEdad;

		CampoResultado = document.getElementById('Resultado');
		CampoEdad = document.getElementById('Edad');
		ValorEdad = parseInt(CampoEdad.value);

		

		switch(ValorEdad){
			case 12:CampoResultado.innerHTML = "infancia";
			 break;
			case 13:CampoResultado.innerHTML = "Adolescencia";
			 break;
			case 17:CampoResultado.innerHTML = "Joventud";
			 break;
			case 23:CampoResultado.innerHTML = "Adulto";
			 break;
		}
}