/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto=0; 
var contadorIntentos=0;
var falta;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  numeroSecreto=Math.floor(Math.random()*100)+1;
    
}

function verificar()
{
apuesta=document.getElementById("numero").value;
apuesta=parseInt(apuesta);
contadorIntentos++;
if (apuesta==numeroSecreto)
  {
    alert ("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
    document.getElementById("intentos").value=contadorIntentos;
  }
  else
  {
    if (apuesta<numeroSecreto)
    {
      falta=numeroSecreto-apuesta;
      alert ("Falta "+falta+" para llegar al numero secreto");
      document.getElementById("intentos").value=contadorIntentos;
    }
    else
    {
      falta=apuesta-numeroSecreto;
      alert ("Se pasó "+falta+" del numero secreto");
      document.getElementById("intentos").value=contadorIntentos;
    }
  }	
	
}