function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random()*10)+1;
	
	if(nota>=9)
       {
	alert(nota + "exelente");
       }
	
	 if(nota>=4 && nota<=8)
        {
	alert(nota + "Aprobo");
        }

       if(nota<=4)
         {
	alert(nota+" Vamos, la proxima se puede");
         }
}//FIN DE LA FUNCIÓN