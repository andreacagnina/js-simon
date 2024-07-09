const title = document.getElementById('title');
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

let fiveNumber = randomNum();
let lucky = [];

title.innerHTML = fiveNumber.join(' ');


// creo una funzione timer che si attiverà dopo tot sec per nascondere i numeri
setTimeout(hideItem, 1000);
setTimeout(inserimentoNum, 2000);

function hideItem() {
    let hide = document.getElementById('title').classList
    hide.add('d-none')
}

// creo una funzione timer per fare apparire 5 prompt
function inserimentoNum() {
    for (i = 0; i < 5; i++) {
        let ins = parseInt(prompt('Stai tentando la fortuna: Inserisci un numero'));
        console.log(ins)
        lucky.push(ins)
    }
    confronto();
}

function confronto() {
    let itemIndovinati = [];
    console.log(lucky)
    console.log(fiveNumber)


    for (let i = 0; i < lucky.length; i++) {
        if (fiveNumber.includes(lucky[i])) {
            itemIndovinati.push(lucky[i])
        }
    }
    console.log(itemIndovinati)
    console.log(itemIndovinati.length)

}