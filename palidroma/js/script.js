// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.
var word=prompt("insirisci una parola per sapere se è palindroma");
var control="";
//length conta come un uomano stessa cosa di "for ( i=word.length; i>=1; i-- )"
for ( i=word.length-1; i>=0; i-- ){
  control+=word[i];
}

if (palindroma(word,control)) console.log("palindroma");
else console.log("non è palindroma");

function palindroma(arg1, arg2) {
  return arg1==arg2;
}
