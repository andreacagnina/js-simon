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


setTimeout(hideItem, 1000);
setTimeout(inserimentoNum, 2000);
setTimeout(result, 3000);

// creo una funzione timer per nascondere i numeri
function hideItem() {
    let hide = document.getElementById('title').classList
    hide.add('d-none')
}

// creo una funzione timer per fare apparire 5 prompt e richiamo la funzione di confronto
function inserimentoNum() {
    for (i = 0; i < 5; i++) {
        let ins = parseInt(prompt('Stai tentando la fortuna: Inserisci un numero'));
        console.log(ins)
        lucky.push(ins)
    }
}

function result() {
    let punteggio = confronto();
    // console.log(punteggio.length)
    score.innerHTML = `'Hai indovinato i numeri "${punteggio}". Totalizzando ${punteggio.length} punti'`

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