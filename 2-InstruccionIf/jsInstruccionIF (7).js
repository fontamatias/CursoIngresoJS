function Mostrar()
{
//tomo la edad  

var edad;
var eCivil;
edad=document.getElementById("edad").value;
eCivil=document.getElementById("estadoCivil").value;
if (edad<18 && eCivil!="soltero")
{
alert("es muy pequeño para ser soltero");
}
	


}//FIN DE LA FUNCIÓN