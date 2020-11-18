// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.
var evenOrUneven=prompt("scommettiamo! secondo te la somma verrà pari o dispari?");
fxControlString(evenOrUneven);
var number=parseInt(prompt("inserisci un numero da uno a 5 da sommare con quello del computer"));
fxControlNumber(number);
var numberBot= Math.floor(Math.random()*5)+1;
number+=numberBot;

var even="dispari"
if (fxEven(number)){
  even="pari";
}
var message="perso";
if(fxComparation(evenOrUneven,even)){
  message="hai vinto"
}
console.log(message);

function fxControlNumber(arg1){

  while ((arg1>=1)&&(arg1<=5)){
     arg1=prompt("inserisci un numero da 1 a 5");
 }
    return arg1
 }

function fxComparation(arg1, arg2) {return arg1==arg2;}
function fxEven(arg1){ return number%2==0;}
function fxControlString(arg1){
  while (arg1!="pari" && arg1!="dispari") arg1=prompt("parametro non coretto scrivere o pari o dispari?");
}
