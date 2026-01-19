// 1. On récupère et on transforme la saisie
let nombre = Number(prompt("De quel nombre veux-tu calculer la factorielle ?"));

// 2. On prépare le coffre-fort
let resultat = 1;

// 3. La boucle qui fait tout le travail
for (let i = nombre; i > 0; i--) {
  resultat = resultat * i;
  // ICI : Écrivez la ligne qui multiplie "resultat" par "i"
  // et qui remet le tout dans "resultat"
}

// 4. On affiche le message final
// ICI : Écrivez le console.log pour afficher "Le résultat est : " suivi du résultat


// 4. On affiche le message final
console.log("Le résultat est : " + resultat);       