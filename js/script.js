
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
    //Creo dei prompt per far scegliere all'utente la difficoltà
    //creo un if statement per generare la griglia giusta in base alla risposta dell'utente
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100 -> 10 quadrati x riga
// con difficoltà 2 => tra 1 e 81 -> 9 quadrati x riga
// con difficoltà 3 => tra 1 e 49 -> 7 quadrati x riga
    //Creo una funzione per generare le celle => ciclo for
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).
    //all'interno del ciclo for aggiungo un addEventListner click sui div quadrato
        //al click il quadrato selezionato cambia colore

var gridContainer = document.getElementById("grid-container");

var difficulty = parseInt(prompt("Scegli il livello di difficoltà: 1, 2 o 3"));

function gridGenerator(row, square) {
    let counter = 1;
    //genero un array di 16 numeri univoci casuali
        //il range di numeri generati dipende dal livello di difficoltà scelto
    for(let i = 0; i < row; i++) {
        let rowElement = document.createElement("div");
        rowElement.className = "row";
        gridContainer.appendChild(rowElement);

        for (let j = 0; j < square; j++) {
            let squareElement = document.createElement("div");
            squareElement.className = "square";
            rowElement.append(squareElement);

            squareElement.addEventListener("click",
                function(){
                    squareElement.classList.add("active");    
                    //ciclo dell'array/bombe
                    //condizioni : se il numero della casella cliccata è presente nell'array bombe :
                    //la partita termina
                         //faccio vedere tutte le bombe
                         //faccio vedere il punteggio -> numero di click
                         //disabilito il click
                             
                }
            )
            
            squareElement.append(counter);
            counter++;
        }   
    }
}

if (difficulty === 1) {
    gridGenerator(10, 10);
}else if (difficulty === 2) {
    gridGenerator(9, 9);
} else if (difficulty === 3) {
    gridGenerator(7, 7)
}