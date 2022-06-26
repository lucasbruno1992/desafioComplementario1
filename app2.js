let entrada = prompt(`Ingrese texto o Esc para interrumpir`); //se le asigna a palabra lo que el cliente desee
let texto = " "; //declaramos una variable texto para guargar la palabra

while (entrada != "esc" && entrada != "ESC"){ //mientras entrada sea distinto de esc se mete dentro de la condicion
texto += entrada + " "; //que texto va a concatenar la palabra ingresada + un espacio
entrada = prompt(`Ingrese texto o Esc para interrumpir`); // pide que ingrese otra palabra para ver si se mete o no en el while
}

alert(texto); //muestra por un alert la frase que se creo

