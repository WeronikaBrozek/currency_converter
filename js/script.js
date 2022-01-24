{
    const welcome = () => {
        console.log("Witam serdecznie, każdego kto tu zagląda!");
    };

    const calculateResult = (pln, currency) => {
        const eur = 4.55;
        const gbp = 5.44;
        const jpy = 0.035;

        switch (currency) {
            case "EUR":
                return pln / eur;

            case "GBP":
                return pln / gbp;

            case "JPY":
                return pln / jpy;
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnValueElement = document.querySelector(".js-plnValue");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const pln = plnValueElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(pln, currency);


        resultElement.innerText = `${result.toFixed(2)} ${currency}`;

    };


    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    welcome();
    init();

}