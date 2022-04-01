// A $( document ).ready() block.
$(document).ready(function() {

    let resultString = "";
    let actualResultString = "";
    let result = 0;

    $(".displayResult").text(resultString);

    function replaceSpecialSymbol(symbol) {

        let sign = symbol;

        switch (symbol) {
            case "÷":
                sign = "/";
                break;
            case "×":
                sign = "*";
                break;

            default:
                sign = symbol;
                break;
        }

        return sign;
    }

    function calculatedResult(resultString) {
        if (lastResultString === ("-" || "+" || "÷" || "×")) {
            resultString.pop()
            return false;
        } else {
            compute("1+2+3")
        }
    }

    function compute(resultString) {

        let newActualResultString = resultString.replace("=", '');

        let lastResultString = newActualResultString.slice(-1);

        // let lastResultString = resultString.slice(-1);
        if ((lastResultString == "-" || lastResultString == "+" || lastResultString == "÷" || lastResultString == "×")) {
            newActualResultString.slice(0, -1);
            // compute(resultString);
            // return false;
        }
        console.log(newActualResultString);
        return Function(`'use strict'; return (${newActualResultString})`)()
    }



    // function compute(resultString) {
    //     let newActualResultString = resultString.replace("=", '');

    //     let lastResultString = newActualResultString.slice(-1);
    //     if ((lastResultString == "-" || lastResultString == "+" || lastResultString == "÷" || lastResultString == "×")) {
    //         resultString.slice(0, -1);
    //         // compute(resultString);
    //         // return false;
    //     }
    //     console.log(newActualResultString);
    //     return Function(`'use strict'; return (${newActualResultString})`)()
    // }




    console.log("ready!");
    $(".btn-symbol").click(function(e) {
        let symbol = $(this).text();
        symbol = symbol.trim();
        console.log(symbol);



        if (symbol === "C") {
            resultString = "";
            actualResultString = "";
            $(".displayResult").text(resultString);
            return false;
        }

        // resultString = resultString + symbol;
        // actualResultString = actualResultString + symbol;

        let lastResultString = "";

        if (resultString.length > 1) {
            lastResultString = resultString.slice(-1);
        }


        if ((lastResultString == "-" || lastResultString == "+" || lastResultString == "÷" || lastResultString == "×") && (symbol == "-" || symbol == "+" || symbol == "÷" || symbol == "×")) {
            console.log("#########################: ");
            console.log("LastLetter: " + lastResultString);
            console.log("#########################: ");
            return false;
        }

        // if (symbol == "-" || symbol == "+" || symbol == "÷" || symbol == "×") {
        //     console.log("#########################: ");
        //     console.log("symbol: " + symbol);
        //     console.log("#########################: ");
        //     return false;
        // }

        resultString = resultString + symbol

        symbol = replaceSpecialSymbol(symbol);
        actualResultString = actualResultString + symbol;

        if (symbol === '=') {


            // text.replace
            let newActualResultString = actualResultString.replace("=", ''); //actualResultString.slice(0, -1)
            console.log(newActualResultString.trim())
                // return false;

            if (newActualResultString.trim() == "") {
                return false;
            }


            resultString = compute(newActualResultString.trim());
            actualResultString = resultString;
            // alert("result will be calculated")
            $(".displayResult").text(resultString);
        } else {

            let newResultString = resultString.replace("=", '')
            actualResultString.replace("=", '')
            $(".displayResult").text(newResultString);
        }


    })
});