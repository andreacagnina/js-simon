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

// creo una funzione timer che si attiverà dopo tot sec
setTimeout(hideItem, 2000);
setTimeout(countDowm, 3000);

function hideItem() {
    document.getElementById('title').className = 'd-none';
}

function countDowm() {
    for (i = 0; i < 5; i++) {
        let ins = prompt('Stai tentando la fortuna: Inserisci un numero')
        console.log(ins)
    }
}