function Mostrar()
{
var sexo = prompt("ingrese f ó m .");


while ( sexo !="f" && sexo != "m")
{
    sexo = prompt ( "Ingrese una letra entref o m");
    
}

if ( sexo ==  "f")
{sexo = " femenino";}
if (sexo == "m")
{ sexo = "masculino";}

document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN