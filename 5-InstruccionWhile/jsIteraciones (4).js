function Mostrar()
{

	var num = prompt("ingrese un número entre 0 y 10.");

	while(num<0 || num>10)
	{
		alert ("Numero incorrecto");
		num=prompt("Reingrese el numero");
	}

	alert("el numero es correcto");


}//FIN DE LA FUNCIÓN