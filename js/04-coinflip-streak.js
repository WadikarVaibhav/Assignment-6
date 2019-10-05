var coinFlip;

do {
    coinflip = Math.round(Math.random());
    result = coinflip == 0 ? 'Heads' : 'Tails';
    console.log(result);
} while (coinflip != 1)

document.write('Check console for result');