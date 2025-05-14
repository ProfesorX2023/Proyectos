// Capturar los elementos de HTML
const inputNumber = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const resultDisplay = document.getElementById('output');

convertButton.addEventListener('click', () => {
    const numberValue = inputNumber.value.trim();
    if (!numberValue || isNaN(numberValue)) {
        resultDisplay.textContent = "Please enter a valid number";
        resultDisplay.style.display = "block";
    } else {
        const num = parseInt(numberValue, 10);
        if (num < 1) {
            resultDisplay.textContent = "Please enter a number greater than or equal to 1";
        } else if (num > 3999) {
            resultDisplay.textContent = "Please enter a number less than or equal to 3999";
        } else {
            const romanNumerals = [
                { value: 1000, numeral: "M" },
                { value: 900, numeral: "CM" },
                { value: 500, numeral: "D" },
                { value: 400, numeral: "CD" },
                { value: 100, numeral: "C" },
                { value: 90, numeral: "XC" },
                { value: 50, numeral: "L" },
                { value: 40, numeral: "XL" },
                { value: 10, numeral: "X" },
                { value: 9, numeral: "IX" },
                { value: 5, numeral: "V" },
                { value: 4, numeral: "IV" },
                { value: 1, numeral: "I" }
            ];
            let result = "";
            let tempNum = num;
            for (const { value, numeral } of romanNumerals) {
                while (tempNum >= value) {
                    result += numeral;
                    tempNum -= value;
                }
            }
            resultDisplay.textContent = result;
        }
        resultDisplay.style.display = "block";
    }
});
