function Mostrar()
{

	var contador=0;
	var num;
	var max;
	var min;
	var respuesta='si';

	num = prompt ( "Ingrese un numero: ");
	num = parseInt (num);
	max = num;
	min = num;
	respuesta = prompt ( " ¿Desea seguir ingresando numeros? "); 
	while(respuesta=='si')
	{
		num = prompt ( "Ingrese un numero: ");
		num = parseInt (num);

		if ( num > max )
		{ max = num; }
		if ( num < min )
		{ min = num; }

		respuesta = prompt ( " ¿Desea seguir ingresando numeros? "); 

	}

document.getElementById ( "maximo" ).value = max;
document.getElementById ( "minimo" ).value = min;

}//FIN DE LA FUNCIÓN