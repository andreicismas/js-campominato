






// maxi funzione 
(function () {

    // variabili al posto dei nr 
    var minNumber = 1
    var maxNumber = 100
    var pcNumberLungo = 16

    var pcNumber = []

    var numeriUtente = []
    // chiediamo al utente di ins i nr trammite prompt dove il valore e la differnza di maxNumber e pcNumber

    // controla che il nr e valido e che il nr ins non e doppione
    var gameOver = false
    function chiediNumeriUtente() {

        var utenteLangth = maxNumber - pcNumberLungo

        while (numeriUtente.length < utenteLangth && !gameOver) {
            var userInput = prompt("inserisci un nr tra" + minNumber + "e" + maxNumber)

            var validImput = controlaNumeriUtente(userInput)
            
            if (!validImput && validImput !== "game over") {
                
                alert("nr non valido")
            } else if (validImput === "game over") {
                gameOver = true
                alert("ai perso dopo aver inserito " + numeriUtente.lengt6 + "numeri")
            } else {
                userInput.push(parseInt(numeriUtente))
            }
        }

        
        
        
    }
    chiediNumeriUtente(numeriUtente)

    // controla
    // numero reale 
    // nr non minore di minNumber
    // nr non maggiore di maxNumber
    // nr non esiste gi

    function controlaNumeriUtente(valoreInput) {
        var risultato = true

        var nrUtente = parseInt(valoreInput)
        if (isNaN(numeriUtente)) {
            return false
        }

        if (nrUtente < minNumber || nrUtente > maxNumber) {
            return false
        }

        if (numeriUtente.indexOf(nrUtente) > -1) {
            return false
        }

        if (pcNumber.indexOf(nrUtente) > -1) {
            return "game over"
        }


        return risultato

    }
    // crea ii nr iniziali de px x 16 e fa il controllo che non sono doppioni 
    function CreatePcNumbers() {

        do {
            var nrRandom = generaNumeri(minNumber, maxNumber)

            if (pcNumber.indexOf(nrRandom) === -1) {
                pcNumber.push(nrRandom)
            }

        } while (pcNumber.length < pcNumberLungo);
    }

    console.log(pcNumber);


    // funzione che genera nr random tra il min e max passati come argomento 

    function generaNumeri(min, max) {
        return Math.floor(Math.random() * max) + min
    }


    // invoco della funzione 
    CreatePcNumbers()

})()


