// Pari e Dispari
// L’utente sceglie pari o dispari
var evenOrUneven=prompt("scommettiamo! secondo te la somma verrà pari o dispari?");
evenOrUneven= evenOrUneven.toLowerCase();
fxControlString(evenOrUneven);
//inserisce un numero da 1 a 5.
var number=parseInt(prompt("inserisci un numero da uno a 5 da sommare con quello del computer"));
fxControlNumber(number);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numberBot=fxNumberBot();
// Sommiamo i due numeri.
number+=numberBot;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
var even="dispari"
if (fxEven(number)){
  even="pari";
}
// Dichiariamo chi ha vinto.
var message="perso";
if(fxComparation(evenOrUneven,even)){
  message="hai vinto"
}
document.getElementById('result').innerHTML=message;

function fxControlNumber(arg1){
  while (isNaN(arg1)||arg1<1||arg1>5){
     arg1=prompt("inserisci un numero da 1 a 5");
 }
    return arg1
 }

function fxComparation(arg1, arg2) {return arg1==arg2;} //ritorna vero se la condizione è vera(se hai scritto pari ed è uscito un nuomero pari)
function fxEven(arg1){ return number%2==0;}//ritorna vero se la condizione è vera
function fxNumberBot (){
  return Math.floor(Math.random()*5)+1;
}
function fxControlString(arg1){
  while (arg1!="pari" && arg1!="dispari") arg1= arg1.toLowerCase(); arg1=prompt("parametro non coretto scrivere o pari o dispari?");
}
