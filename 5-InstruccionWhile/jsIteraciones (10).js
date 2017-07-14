function Mostrar()
{

	var contador=0;
	var contadorPositivos=0, contadorNegativos=0, contadorCeros=0; contadorPares=0;
	var promedioNegativos,promedioPositivos;
	var respuesta="si";
	var sumaPositivos=0 , sumaNegativos = 0;
	var num;

	while(respuesta=="si"){

		num = prompt ( "Ingrese un numeros" );
		num = parseInt ( num );
		if (num % 2 ==0){
			contadorPares = contadorPares + 1;}
			
			if ( num > 0 ){ 
			sumaPositivos = sumaPositivos + num;
		    contadorPositivos = contadorPositivos +1; }
		
		else {
			if ( num < 0 ){ 
				sumaNegativos = sumaNegativos + num;
		        contadorNegativos = contadorNegativos +1; }
		    else{
			    contadorCeros=contadorCeros+1;}
			 }
		
		  respuesta = prompt ( "¿Desea seguir ingresando numero?");
		
	}
	document.write(" Suma de Positivos : " + sumaPositivos );
	document.write(" Suma de Negativos : " + sumaNegativos );
	document.write(" Cantidad de positivos :" + contadorPositivos );
	document.write(" Cantidad de negativos:" + contadorNegativos );
	document.write(" Cantidad de ceros: "+ contadorCeros);
	document.write(" Cantidad de numeros pares: "+ contadorPares );
	document.write(" Promedio de Positivos : " + sumaPositivos/contadorPositivos );
	document.write(" Promedio de Negativos : " + sumaNegativos/contadorNegativos );
	document.write(" Diferencia Positivos - Negativos: " + (sumaPositivos-sumaNegativos));

}
//FIN DE LA FUNCIÓN