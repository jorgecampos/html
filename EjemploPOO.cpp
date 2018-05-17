class Contacto
{
	//atributos de contacto
	public char nombre[30];
	public long telefono;

	//metodos de contacto
   	public Contacto(char n[30], long t){
	strcpy (this.nombre, n)
	this.telefono = t;
	}

	void escribir(){
	printf("Nombre: %s telefono: %ld", this.nombre, this.telefono);
	}

	void cambiar(){
	this.telefono = nt;
	}
	
}

main(){

	Contacto c1;

	c1 = new Contacto("Pepe",1414);
	c1.escribir();
	c1.cambiar();
}

