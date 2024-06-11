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

let myBtn = document.querySelector("button");
let userInput = document.getElementById("itemInput");


myBtn.addEventListener("click",
    function() {
        console.log("hai cliccato");
        let userInputItem = userInput.value;
        console.log(userInputItem);

        let newItem = `<li>${userInputItem}</li>`;
        list.innerHTML += newItem;
    }
)