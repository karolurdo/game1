

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    drwas: 0,
}


const game = {
    playerHand: null,
    aiHand: null,
   }

//first function
function handSelection() {
   
game.playerHand = this.dataset.option;
console.log(this.dataset.option);
hands.forEach(hand => hand.style.boxShadow = '');
this.style.boxShadow = '0 0 0 4px green';

}

//second function

const letsPlay = () => {
    console.log('work');
}

const hands = document.querySelectorAll(' .select img');
const button = document.querySelector('button');

hands.forEach(hand => hand.addEventListener('click', handSelection));
button.addEventListener('click', letsPlay);