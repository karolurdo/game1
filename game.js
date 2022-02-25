

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    drwas: 0,
}


const game = {
    playerHand: null,
    aiHand: null,
    playerHanHTML: null,
}




const hands = document.querySelectorAll(' .select img');

hands.forEach(hand => hand.addEventListener('click', handSelection));