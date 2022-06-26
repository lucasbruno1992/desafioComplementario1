let numero = parseInt(prompt(`Ingrese un numero`)) //el cliente le asigna un valor a la variable numero

// //va a recorrer el for que va desde 0 hasta que i sea estrictamente diferente a numero y va a ir aumentando i+1
for(let i=0;i !== numero;i++){
    alert(`Hola`) //hasta que se cumple la condicion va a ir ejecutando Hola por un alert
}

//tengo un problema si el prompt queda vacio se mete en el for y queda ejecutandose indefinidamente. Pense lo siguiente: si hago un condicional con un if else y meto el for dentro deberia funcionar.

