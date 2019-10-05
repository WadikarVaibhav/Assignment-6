var coinflip;

for (var i=0; i<10; i++) {
    coinflip = Math.round(Math.random());
    result = coinflip  == 0 ? 'Heads' : 'Tails';
    console.log(result);
}

document.write('Check console for result');