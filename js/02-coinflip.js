var coinflip = Math.floor(Math.random() * 10);
var choice = window.prompt('Heads or Tails');
var result = coinflip > 5 ? 'Tails' : 'Heads';

console.log(coinflip);

function getMessage(choice, coinflip) {
    switch (choice) {
        case 'Heads':
            return coinflip < 20 
            ? 'The flip was heads and you chose heads...you win!' 
            : 'The flip was tails but you chose heads...you lose!';
        case 'Tails':
            return coinflip < 20 
            ? 'The flip was heads but you chose tails...you lose!' 
            : 'The flip was tails and you chose tails...you win!';
    }
    return 'Invalid';
}

document.write(getMessage(choice, coinflip));