/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{

	 numeroSecreto=Math.floor(Math.random()*100)+ 1;//Genero el número RANDOM entre 1 y 100
	 console.log(numeroSecreto)   ;    
	
}

function verificar()

{
      numero=document.getElementById("numero").value;
      contadorIntentos = contadorIntentos+1;
	if (numeroSecreto==numero)
  {
	if (contadorIntentos==1)
	{alert("ustes es un psiquico");}
	else if (contadorIntentos==2)
	{alert("exelente percepcion");}
	else if (contadorIntentos==3)
	{alert("estos es suerte");}
	else if (contadorIntentos==4)
	{alert("buena tecnica");}
	else if (contadorIntentos==5)
	{alert("usted esta en la media")}
	else if (contadorIntentos>=6 && contadorIntentos<=10)
	{alert("falta tecmica");}
	else if (contadorIntentos>10)
	{alert("afortunado en el amor");}
  }
  else
  {

    if(numeroSecreto>numero)
    {
      alert("falta");
    }

    if(numeroSecreto<numero)
    {
      alert("Te pasaste");
    }
    
     document.getElementById("intentos").value = contadorIntentos; 
   }
	
	

}