var word=prompt("insirisci una parola per sapere se è palindroma");
  var control="";
for ( i=word.length-1; i>=0; i-- ){
  control+=word[i];
}
if (palindroma(word,control)) console.log("palindroma")
else {
  console.log("non è palindroma")
}

function palindroma(arg1, arg2) {
  return arg1==arg2;
}
