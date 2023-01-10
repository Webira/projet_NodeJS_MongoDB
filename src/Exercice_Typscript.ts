// Pour réaliser ces exercices vous pouvez utiliser les supports typescript :
// https://github.com/Djeg/formation-react/tree/training/typescript

// Créer deux constantes de type number
// contenant les chiffres 10 et 5
const x: number = 10;
const y: number = 5
// Utiliser console.log pour afficher les 2 constantes
console.log(`${x} et ${y}`)


// Créer une constante notes de type tableaux de number
// contenant les deux constantes plus haut ainsi que la note 12
const chiffres: number[] = [x, y, 12]

// Afficher dans la console le tableaux de note en utilisant console.table
console.table(chiffres)

// Créer une fonction nommé « ordonnerNotes » accéptant un paramètre
// de type tableaux de notes. Cette fonction doit retourner un nouveau
// tableaux de note mais trier par note croissante
// (indice il vous faudra utiliser la méthode d'un tableaux : sort)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Essayer d'afficher le resultat de la fonction ordonnerNote dans la console

// Créer un type « Student » qui sera un objet contenant les champs suivant
// nom: string, prenom: string, age: number, notes: tableaux de number

// Créer une constante de type « Student », vous pouvez lui spécifier les valeurs
// de votre choix

// Afficher la constante dans la console en utilisant console.table

// Créer une fonction, accéptant un paramètre de Type student et affichant la chaïne de
// caractère suivante :
// « Bonjour <eleve.nom> <prenom.eleve>, vous avez <eleve.age> ans »

// Afficher le resultat de cette fonction dans la console

// Créer une fonction afficher note qui accépte un paramètre de type tableaux de number
// et qui retourne un chaïne de caractère suivante :
// imaginons les notes suivante: [12, 10, 5] la fonction doit retourner :
// « Note n°1 : 12 / 20, Note n°2 : 10 / 20, Note n°3 : 05 / 20 »

// Créer une fonction moyenne qui accépte un tableaux de notes et retourne la moyenne
// de toutes les notes

// Créer un type ProfPrincipal qui peut être soit :
// une chaine de caractère
// un objet avec les champs suivant : { nom: string, prenom: string, matiere: string }

// Créer un type Identifiable qui accépte un générique et produit le type suivant :
// { id: <Generic> }

// En utilisant le type identifiable, créer un type IdentifiableStudent qui fusionne
// un identifiable d'un nomber avec une Student
