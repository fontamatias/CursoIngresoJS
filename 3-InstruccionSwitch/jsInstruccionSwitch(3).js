function Mostrar()
{

var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Febrero":
    alert ("Este mes tiene 29 dias");
    break;

    default:
    alert("este mes tienes 30 o mas dias");
    break;

}
}