console.log("coucou depuis la console");
myvariable=50

let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  var data3 = "variable en let définie dans le sous-bloc";
  //let  data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal

let a = 100;
let b = 100;
a++
console.log(a %=10);
console.log(b *= 10);


let c= "Bonjour", d= "Monde";
console.log(c + " " + d);


let firstname = prompt("quel est ton prenom");
console.log("bonjours  " + firstname);




