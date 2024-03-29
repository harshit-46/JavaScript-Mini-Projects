const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        let code = currCode;
        let selOpt = countryList[code][1];
        newOption.innerText = selOpt;
        newOption.value = code;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
    select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    let fromOutput = countryList[fromCurr.value][1].slice(6,);
    let toOutput = countryList[toCurr.value][1].slice(6,);
    let add = 's';
    let zero = '.00';
    if(amtVal>1) {
        msg.innerText = `${amtVal}${zero} ${fromOutput}${add} =\n ${finalAmount} ${toOutput}${add}`;
    } else {
        msg.innerText = `${amtVal}${zero} ${fromOutput} =\n ${finalAmount} ${toOutput}`;
    }
};

const updateFlag = (element) => {
    let currCode = element.value;
    let arr = countryList[currCode];
    let countryCode = arr[0];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};


// This function is under development.
/*const updateSymbol = (element) => {
    let symbol = element.value;
    let toUp = symbolList[symbol];
    console.log("Symbol is:", toUp);
};*/

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});


/*fromCurr.addEventListener("change", (evt) => {
    updateSymbol(evt.target);
});*/