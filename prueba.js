
let producto;
let cantidad = 0;
let precio = 0;
let total = 0;
let seguir= false;

const tienda=()=>{

  const validacion=()=>{
    edad=prompt("Que edad tienes? (Debes ser mayor para ingresar)")

    while(!parseInt((edad))){
      alert("Debes ingresar un numero");
      edad=prompt("Cuantos años tienes")
      while(edad<18){
        alert("Debes ser mayor de edad")
        edad=prompt("Cuantos años tienes")
      }  
  }  
 }
  validacion();
 
  const menu=()=>{      
   
  
  alert("Elegi tu juego: \n1. Tlou= $4000 \n2. God of War=2500 \n3. Days gone=$2000\n4. Spiderman=$2500\n5 Life is strange=$1800 \n5 Yoistick= $3000\n5 Auriculares Sony=$2500")
  
  producto= prompt("Que juego quieres comprar?");
  cantidad= parseInt(prompt("Cuantas unidades quieres?"));
   
   while (!parseInt(cantidad)){
    alert("debe ser un numero")
    cantidad= parseInt(prompt("Cuantas unidades quieres?"));
     
    }
  
 switch (producto)
 {
 case "tlou":
 precio = 4000;
 break;
 
 case "god of war":
 precio = 2500;
 break;
 
 case "days gone":
 precio = 2000;
 break;
 
 case "spiderman":
 precio = 2500;
 break;
 
 case "life is strange":
 precio = 1800;
 break;
 
 case "yoistick":
 precio = 3000;
 break;
 
 case "auriculares sony":
 precio = 2500;
 break;
 
 default:
 alert("Alguno de los datos ingresados no es correcto");  
 precio= 0;
 cantidad=0;

 }
  }
 
  menu()
 
  const cuenta=()=>{
    let descuento= 1500;
    let descuento2= 3000;
    total= cantidad * precio;
    alert( "el total de tu compra es de : $" + total);
    
    if((total>5000) && (total<10000)){
      total-= descuento;
      alert("por tu compra de mas de 5000, tenes un descuento de 1500 en tu compra")
      alert("tu precio final es de: $" + total);
    }
    else if(total>10000){
        total-= descuento;
        alert("por tu compra de mas de 10000, tenes un descuento de 3000 en tu compra")
        alert("tu precio final es de : $" + total );
        
    }
    }
  cuenta()
 
    }

    tienda()
        
