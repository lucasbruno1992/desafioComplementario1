let palabra = prompt(`Ingrese una palabra`) //se le asigna a palabra lo que el cliente desee

while (palabra != "ESC" && palabra != "esc") { //entra en un while mientras que palabra sea distinto de ESC o de esc se ejecuta la condicion
    alert(palabra) // se informa mediante un alert la palabra ingresada
    palabra = prompt(`Ingrese otra palabra`) //se pide otra palabra y se ejecuta el while
}

while (palabra != "ESC" && palabra != "esc") { //entra en un while mientras que palabra sea distinto de ESC o de esc se ejecuta la condicion
    palabra = prompt(`Ingrese otra palabra`) //se pide otra palabra y se ejecuta el while
    frase = palabra + " " + palabra
    alert(frase) // se informa mediante un alert la palabra ingresada
}
