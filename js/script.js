// creo una funzione per generare 5 numeri casuali
function randomNum() {
    let title = document.getElementById('title');
    let numArr = [];
    while (numArr.length < 5) {
        let num = Math.floor(Math.random() * 100 + 1);
        numArr.push(num);
        console.log(num)


        title.innerText += ' ' + num;

    }
}
let fiveNumber = randomNum();