//Lista della spesa con ciclo while
const shoppingList= ["pane","acqua", "sapone", "carta", "mele", "latte", "caffè", "gelato", "olio"];
//stampo lista in console
console.log(shoppingList);
//Prelevo la lista dall'HTML
let list = document.querySelector("ul");

//Ciclo per la stampa della lista
let i = 0;
while (i < shoppingList.length) {
    list.innerHTML += `<li>${shoppingList[i]}</li>`;
    i++;
}