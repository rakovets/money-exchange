module.exports = function makeExchange(currency) {
    let money = new Money();

    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else if (currency < 0) {
        return money;
    }
    let balance = currency;

    let H = div(balance, 50);
    if (H != 0) {
        money.H = H;
        balance = balance % 50;
    }

    let Q = div(balance, 25);
    if (Q != 0) {
        money.Q = Q;
        balance = balance % 25;
    }

    let D = div(balance, 10);
    if (D != 0) {
        money.D = D;
        balance = balance % 10;
    }

    let N = div(balance, 5);
    if (N != 0) {
        money.N = N;
        balance = balance % 5;
    }

    if (balance != 0) {
        money.P = balance;
    }

    return money;
}

function div(a, b) {
    return (a - a % b) / b;
}

function Money() {
    let H;
    let Q;
    let D;
    let N;
    let P;
    return this;
}
