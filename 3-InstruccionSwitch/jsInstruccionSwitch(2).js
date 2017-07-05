function Mostrar()
{
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Julio":
    alert("estamos en invierno");
    break;

    case "Agosto":
    alert("estamos en invierno");
    break;

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert("ya paso");
    break;

    default:
    alert("falta");
    break;

}
}//FIN DE LA FUNCIÓN