function CalcularEtapa() {
	// Calcular etapa
	var CampoEdad,
		CampoResultado,
		ValorEdad;

		CampoResultado = document.getElementById('Resultado');
		CampoEdad = document.getElementById('Edad');
		ValorEdad = CampoEdad.value;

		if ((ValorEdad >= 0) && (ValorEdad <= 12))
			CampoResultado.innerHTML = "infancia";
		if ((ValorEdad >= 13) && (ValorEdad <= 16))
			CampoResultado.innerHTML = "Adolescencia";
		if ((ValorEdad >= 17) && (ValorEdad <= 22))
			CampoResultado.innerHTML = "Joventud";
		if (ValorEdad >= 23)
			CampoResultado.innerHTML = "Adulto";
}

