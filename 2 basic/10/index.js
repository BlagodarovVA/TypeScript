"use strict";
const currRate = "1.07";
const fetchCurr = (response) => {
    const data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        let res = fetchCurr(currRate) * amount * commission;
        console.log(res);
    }
    else {
        console.log("Сейчас обмен недоступен");
    }
}
transferEurToUsd(true, 500, 1.02);
