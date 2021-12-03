const prompt = require('prompt');
const tools = require('./utils');

prompt.start();
console.log("Welcome to the Chocolate Vending Machine!!");
console.log("\nYou can select a chocolate ranging from: \n1 -> Caramel ($2.50), \n2 -> Hazelnut ($3.10), \n3 -> Organic Raw ($2.00)");
console.log("\nEnter number of coins for the following denominations to get a snack:")

prompt.get(['10c', '20c', '50c', '$1', '$2'], function (err, result) {
    if (err) { 
        console.log(err);
        return;
    }

    let getCoinInput = tools.checkCoinInputs(result);
    if (getCoinInput == 'err') { return } else if (getCoinInput == 0) { console.log('Oops! You don\'t have enough money for the snack..'); return; }

    console.log("Select your choice of chocolate: \n1 -> Caramel ($2.50), \n2 -> Hazelnut ($3.10), \n3 -> Organic Raw ($2.00)");
    prompt.get(['Snack'], function (err1, result1) {
        if (tools.checkSnackSelection(result1) == 0) { return };
        
        let amoutLeft = tools.checkEnough(getCoinInput, result1['Snack'])
        if (amoutLeft == 'err') { 
            return 
        } else if (amoutLeft == 0) { 
            console.log('Yay!! You got a snack!');
        } else {
            console.log('\nYay!! You got a snack!');
            console.log('You also get back:', `$`+amoutLeft/100);
        }
    });

});

function onErr(err) {
    console.log(err);
    return 1;
}
