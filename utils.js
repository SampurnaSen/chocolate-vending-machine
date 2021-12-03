const snacks = {
    1: 250, //Caramel
    2: 310, //Hazelnut
    3: 200 //Organic Raw
}

const denominations = {
    '10c': 10,
    '20c': 20,
    '50c': 50,
    '$1': 100,
    '$2': 200
}

function checkCoinInputs(result) {
    var amountSum = 0;

    for (const key in result) {
        if (result[key].match(/[a-z]/i)) {
            console.log("Please enter number only");
            return 'err';
        } else {  
            amountSum += (denominations[key]*parseInt(result[key]));
        }
    }

    return amountSum;
}

function checkSnackSelection(result) {
    if (result > 3 || result < 1) {
        console.log("Please choose the correct option");
       return 0;
    }
    return 1;
}

function checkEnough(coinInput, snack) {
    let amoutLeft = coinInput - snacks[parseInt(snack)];
    
    if(amoutLeft < 0) {
        console.log("Uh oh! Not enough amount for your snack!");
        return 'err';
    }

    return amoutLeft;
}

module.exports = { checkCoinInputs, checkSnackSelection, checkEnough }