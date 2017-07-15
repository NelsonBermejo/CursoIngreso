/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
//eleccion maquina
var resultado;
var contEmpato=0;
var contperdio=0;
var contgano=0;
var eleccionMaquina;
function comenzar()
{ eleccionMaquina;//eleccion maquina;
	 eleccionMaquina=Math.floor(Math.random()*(4-1))+1;
        console.log(eM);



}//FIN DE LA FUNCIÓN
function piedra()
{   comenzar()
	switch(eleccionMaquina)
    {    case 1:
        
        resultado("Empato");//resultado=empato++
           contEmpato++
           Break;
           case 2:
           resultado="Pierde";
           contperdio++;
           Break;
           case 3:
           resultado="Gano";
           contgano++;
           Break;
    }
mostrar()
}//FIN DE LA FUNCIÓN
function papel()
{
  comenzar()	
  switch(eleccionMaquina)
    {    case 1:
        
        resultado="Empato";//resultado=empato++
           contEmpato++
           Break;
           case 2:
           resultado="Pierde";
           contperdio++;
           Break;
           case 3:
           resultado="Gano";
           contgano++;
           Break;
    }
mostrar()
}//FIN DE LA FUNCIÓN
function tijera()
{
	 	switch(eleccionMaquina)
    {    case 1:
        
        resultado("Empato");//resultado=empato++
           contEmpato++
           Break;
           case 2:
           resultado="Pierde";
           contperdio++;
           Break;
           case 3:
           resultado="Gano";
           contgano++;
           Break;
        
}
mostrar()
}
//FIN DE LA FUNCIÓN

function mostrar()
{      
   
     
    alert (resultado+contgano+contperdio+contEmpato);
      

}