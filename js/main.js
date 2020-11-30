{
    const calculateAndShowResults = (amountPLN, result, currency) => {
        const resultElement = document.querySelector(".result__paragraph");
        resultElement.innerText = `${amountPLN.toFixed(2)} złotych to w przeliczeniu ${result.toFixed(2)} ${currency.value}`;
    }

    const resultCalculator = (currency, amountPLN) => {
        let result;
        if (currency.value === "GBP") {
            const GBP = 5.0239;
            result = amountPLN / GBP;

        }
        else if (currency.value === "EUR") {
            const EUR = 4.4843;
            result = amountPLN / EUR;

        }
        else if (currency.value === "USD") {
            const USD = 3.7614;
            result = amountPLN / USD;

        }
        else {
            result = amountPLN / CHF;
            const CHF = 4.1477;

        };
        calculateAndShowResults(amountPLN, result, currency)
    }

    const dataCollectionFromApp = () => {
        const countButton = document.querySelector(".form__button");
        countButton.addEventListener("click", (event) => {
            event.preventDefault();
            const amount = document.querySelector(".form__input--js-amount");
            const currency = document.querySelector(".form__input--js-currency");
            const amountPLN = +amount.value;
            resultCalculator(currency, amountPLN);
        });
    }
    const init = () => {
        dataCollectionFromApp();
    }

    init();
}

