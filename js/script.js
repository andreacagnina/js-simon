const title = document.getElementById('title');
const score = document.getElementById('score');
let fiveNumber = randomNum();
let lucky = [];

title.innerHTML = fiveNumber.join(' ');

// creo una funzione per generare 5 numeri casuali
function randomNum() {
    const numArr = [];

    while (numArr.length < 5) {
        let num = Math.floor(Math.random() * 100 + 1);
        numArr.push(num);
        console.log(num)
    }

    return numArr;
}


setTimeout(hideItem, 30000);
setTimeout(inserimentoNum, 31000);
setTimeout(result, 32000);

// creo una funzione timer per nascondere i numeri
function hideItem() {
    let hide = document.getElementById('title').classList
    hide.add('d-none')
}

// creo una funzione timer per fare apparire 5 prompt e tramite ciclo while metto delle condizioni
function inserimentoNum() {
    for (i = 0; i < 5; i++) {
        let ins = parseInt(prompt('Stai tentando la fortuna: Inserisci un numero'));
        while (ins < 1 || ins > 100 || isNaN(ins)) {
            ins = parseInt(prompt('Il valore inserito non è valido. Riprova'));
        }
        lucky.push(ins)
    }
}

// creo una funzione con timer che farà apparire a video i risultati ottenuti solo dopo che il giocatore avrà inserito i numeri tramite prompt
function result() {
    let punteggio = confronto();
    // console.log(punteggio.length)
    if (punteggio.length == 0) {
        score.innerHTML = 'Magari sei fortunato in amore'
    } else if (punteggio.length == 1) {
        score.innerHTML = `Hai indovinato solo il numero "${punteggio}". Totalizzando ${punteggio.length} punto`
    } else {
        score.innerHTML = `Hai indovinato i numeri "${punteggio}". Totalizzando ${punteggio.length} punti`
    }

}

// creo una funzione per confrontare i numeri generati con i numeri inseriti dal giocatore
function confronto() {
    let itemIndovinati = [];
    for (let i = 0; i < lucky.length; i++) {
        if (fiveNumber.includes(lucky[i])) {
            itemIndovinati.push(lucky[i])
        }
    }
    // console.log(itemIndovinati)
    // console.log(itemIndovinati.length)

    return itemIndovinati;
}