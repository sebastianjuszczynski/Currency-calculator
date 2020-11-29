let amount = document.querySelector(".form__input--js-amount");
let currency = document.querySelector(".form__input--js-currency");
let countButton = document.querySelector(".form__button");
let resultElement = document.querySelector(".result__paragraph");

let GBP = 5.0239;
let EUR = 4.4843;
let USD = 3.7614;
let CHF = 4.1477;

let result;

countButton.addEventListener("click", (event) => {
    event.preventDefault();
    let amountPLN = +amount.value;
    if (currency.value === "GBP") {
        result = amountPLN / GBP;

    }
    else if (currency.value === "EUR") {
        result = amountPLN / EUR;

    }
    else if (currency.value === "USD") {
        result = amountPLN / USD;

    }
    else {
        result = amountPLN / CHF;

    }

    resultElement.innerText = `${amountPLN.toFixed(2)} złotych to w przeliczeniu ${result.toFixed(2)} ${currency.value}`;
    amount.value = "";
})

