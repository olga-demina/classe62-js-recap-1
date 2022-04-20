// 1. variabili
// const shoppingItem1 = "latte";
// 
// console.log(shoppingItem1);

// 2. String

// const shoppingItem1 = "latte";
// const shoppingItem2 = "pane";
// // let shoppingList = shoppingItem1 + ", " + shoppingItem2;
// let shoppingList = `${shoppingItem1}, ${shoppingItem2}`;
// shoppingList += ", formaggio"; 
// console.log(shoppingList); 
// 
// // 3. Number
// let price = 100;
// // let totalPrice = price - (price * 0.2); 
// price -= (price * 0.2);
// 
// console.log(price);
// 
// let x = 1;
// console.log(x);
// x++;
// console.log(x);
// 
// price = price + shoppingItem1;
// console.log(price);

// 4. Boolean
// const trueValue = true;
// const falseValue = false;
// 
// // console.log(!falseValue);
// 
// const myNumber = '5';
// const otherNumber = 5;
// 
// const result = myNumber === otherNumber;
// console.log(result);

// 5. Condizioni 
// Se l'utente ha più di 100 euro, può fare la spesa grande
// Se ne ha più /uguale di 50 può fare una spesa piccola
// Se ne ha meno di 50 meglio che sta a casa

// 
// const userMoney = parseInt(prompt("Quanti soldi hai?"));
// 
// console.log(userMoney);
// let messaggio;
// let myNumber = 5
// 
// if ( userMoney < 50 ) {
//     messaggio = "Stai a casa fino allo stipendio";
// } else if ( userMoney < 100 ) {
//     messaggio = "Ok, puoi fare una piccola spesa";
// } else {
//     messaggio ="Bene, fai la spesa grande";
// }
// 
// console.log(myNumber);
// 
// console.log(messaggio);


// 6. Cicli e Array
const shoppingList = []; //-> length = 3

// Chiedere all'utente i prodotti da inserire nella lista. Per completare l'inserimento l'utente deve scrivere "stop";
let userItem = (prompt("Inserisci un prodotto. Scrivi 'stop' per interrompere")).toLocaleLowerCase();

while (userItem !== "stop") {
    shoppingList.push(userItem);
    userItem = prompt("Inserisci un prodotto. Scrivi 'stop' per interrompere");
}

// Al click del bottone visualizzo la lista di spesa
const showButton = document.getElementById("show-list");
console.log(showButton);
showButton.addEventListener("click", 
    function() {
        const shoppingUl = document.getElementById("shopping-list");
        shoppingUl.innerHTML = "";
        for (let index = 0; index < shoppingList.length; index++) {
            const element = shoppingList[index];
            const newLi = document.createElement("li");
            newLi.innerHTML = element;

            if (index % 2 === 0) {
                newLi.classList.add("even");
            } else {
                newLi.classList.add("odd");
            }

            shoppingUl.append(newLi);
        }
    }
)


