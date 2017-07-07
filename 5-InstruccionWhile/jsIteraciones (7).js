function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var num;
	num=prompt("Ingrese un numero");
	num=parseInt(num);
	acumulador=num;
	respuesta=prompt("¿desea seguir ingresando numeros?")
	contador=contador+1;
while(respuesta=="si")
{
	num=prompt("Ingrese un numero");
	num=parseInt(num);
	acumulador=acumulador+num;
	respuesta=prompt("¿desea seguir ingresando numeros?");
	contador=contador+1;
}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN