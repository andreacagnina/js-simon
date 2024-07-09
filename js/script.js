// creo una funzione per generare 5 numeri casuali
function randomNum() {
    const title = document.getElementById('title');
    const numArr = [];
    // let nums = numArr.length;

    while (numArr.length < 5) {
        let num = Math.floor(Math.random() * 100 + 1);
        numArr.push(num);
        console.log(num)


        title.innerText += ' ' + num;

    }
}
let fiveNumber = randomNum();


// creo una funzione timer che si attiverà dopo tot sec per nascondere i numeri
setTimeout(hideItem, 1000);
setTimeout(countDown, 2000);

function hideItem() {
    let hide = document.getElementById('title').classList
    hide.add('d-none')
}

// creo una funzione timer per fare apparire 5 prompt
function countDown() {
    let lucky = []
    for (i = 0; i < 5; i++) {
        let ins = prompt('Stai tentando la fortuna: Inserisci un numero')
        console.log(ins)
        lucky.push(ins)
        // console.log(lucky)
    }
}

function confronto() {
    let itemIndovinati = [];
    let score = 0;

    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < lucky.length; i++) {
            if (numArr[i] === lucky[j]) {
                itemIndovinati.push(numArr[i])
            }
        }
    }
    console.log(itemIndovinati)

}