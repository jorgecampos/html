typedef struct 
{
	char nombre[30];
	long telefono;
}Contacto ;

void crearcontacto(contacto *c, char n[30], long t){
	strcpy (c-> nombre, n);
	c->telefono = t;

}

void escribircontacto(contacto c){
	printf("Nombre: %s telefono: %ld", c.nombre, c.telefono);
}

void cambiartelefono(contacto *c, long nt){
	c->telefono = nt;
}

main(){

	Contacto c1;

	crearcontacto(&c1, "Pepito", 1111);
	escribircontacto(c1);
	cambiartelefono(&c1, 2222);

}

