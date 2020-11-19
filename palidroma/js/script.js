// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.
var word=prompt("insirisci una parola per sapere se è palindroma");
fxControl(word);
var control="";
//length conta come un umano stessa cosa di "for ( i=word.length; i>=1; i-- )"
for ( i=word.length-1; i>=0; i-- ){
  control+=word[i];
}

var message=" non è palindroma";
if (palindroma(word,control)) message=" è palindroma";
document.getElementById('result').innerHTML= word + message;


function palindroma(arg1, arg2) {
  return arg1==arg2;
}
 function fxControl(arg1) {
  while (arg1=="") {
    arg1=prompt("Attenzione parametro non consentito inserisci una parola");

  }
    return word=arg1;
 }
