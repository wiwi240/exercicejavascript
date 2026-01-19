let etage =Number(prompt("vous voulez une pyramid de combien d'étage:"));

for (let i = 1; i <= etage; i++) {
  // 1. On calcule combien d'espaces il faut

let nbEspaces = etage - i;
// 2. On crée la ligne en assemblant les morceaux
  // On répète l'espace, puis on répète le dièse
let ligne = " ".repeat(nbEspaces) + "#".repeat(i);

  // 3. On affiche la ligne terminée
console.log(ligne);
}