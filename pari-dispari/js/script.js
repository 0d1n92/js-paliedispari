// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.
var evenOrUneven=prompt("scommettiamo! secondo te la somma verrà pari o dispari?");
console.log("scommetti sul:", evenOrUneven);
var number=parseInt(prompt("inserisci un numero da uno a 5 da sommare con quello del computer"));
var numberBot= Math.floor(Math.random()*5)+1;
console.log("il numero del pc: ", numberBot);
number+=numberBot;
console.log("la somma dei due numeri è:", number)
var even="dispari"
if (fxEven(number)){
  var even="pari";
}
var message="perso";
if(fxComparation(evenOrUneven,even)){
  message="hai vinto"
}
console.log(message)
function fxComparation(arg1, arg2) {return arg1==arg2;}
function fxEven(arg1){ return number%2==0;}
