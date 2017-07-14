function Mostrar()
{
	var respuesta="si",num=0,neg=0;contneg=0,pos=0,contpos=0,ceros=0,pares=0,promneg=0,prompos=0,dif=0;//diferencia siempre es positiva

	while(respuesta=="si")
	{
		num=parseInt(prompt("Ingrese un numero:"));
		while (isNaN(num));//esto agreggue
		{
                   num=prompt("Ingrese un numero");
		}
		if (num<0)
		{
			neg=neg+num;
			contneg++;
		}
		else if (num>0)
		{
			pos=pos+num;
			contpos++;
		}
		else
		{
			ceros++;
		}
		if (num%2==0)
		{
			pares++;
		}
		respuesta=prompt("Desea ingresar otro numero?");//rta=confirm();
	}
	promneg=neg/contneg;/*if(contpos==0)
	                       {
							   pp=("no ingreso numero");
						   }         
						   if(unNaN(pn))
						   {
							   pn=("")
						   }
						   */ 
	prompos=pos/contpos;//si solamente ingresamos positivos, 0/0, cero dividido cero 
	dif=pos-neg;        // diferencia de positivo menos negativos
	                        /*if(contadorpos<contNeg)
							{
								dif=contneg-contpos;
							}
							else
							{
                                dif=contpos-contneg;
							}
							             OTRA FORMA;Ò

							if (dif<0)
							{
                                 dif*=-1;
							}
							

							
							
							*/ 
	document.write("La suma de los negativos es: "+neg+"<br/>La suma de los positivos es: "+pos+
					"<br/>La cantidad de negativos es: "+contneg+"<br/>La cantidad de positivos es: "+contpos+
					"<br/>La cantidad de ceros es: "+ceros+"<br/>La cantidad de numeros pares es: "+pares+
					"<br/>El promedio de los numeros positivos es: "+prompos+
					"<br/>El promedio de los numeros negativos es: "+promneg+
					"<br/>La diferencia entre positivos y negativos es: "+dif);
}//FIN DE LA FUNCIÓN

/