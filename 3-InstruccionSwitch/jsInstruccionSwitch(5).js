function Mostrar()
{

var laHora = document.getElementById('hora').value;

switch(laHora)
{
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    alert("es de mañana");
    break;

    default:
    alert("es otra hora");
    break;
}
	
	



}