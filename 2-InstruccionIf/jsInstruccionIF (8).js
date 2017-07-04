function Mostrar()
{
//tomo la edad  
var edad;
var eCivil
edad=document.getElementById("edad").value;
eCivil=document.getElementById("estadoCivil").value;
  if(edad >= 18 && eCivil == "Soltero")
    {
        alert("Eres soltero y no eres menor");
    }


}//FIN DE LA FUNCIÓN