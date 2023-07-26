let result = document.getElementById("result");
let inputHeat = document.getElementById("input-heat");

function convertFahrenheitToClesius(temperature) {
    const fahrenheit = parseFloat(temperature);
    let celsius = (fahrenheit - 32) * 5 / 9;
    celsius = celsius.toFixed(6);
    return celsius;
}

function convertKelvinToCelsius(temperature) {
    return parseInt(temperature) - 273.15;
}

function convertCelsiusToFahrenheit(temperature) {
    const celsius = parseFloat(temperature);
    let fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheit = fahrenheit.toFixed(6);
    return fahrenheit
    result.textContent = fahrenheit + " " + '\u00B0' + "F";
}

function convertCelsiusToKelvin(temperature) {
    return parseInt(temperature) + 273.15
}



function convert() {
    const temperature = inputHeat.value;
    let fromTempType = document.getElementById('from-temp-type').value;
    let toTempType = document.getElementById("to-temp-type").value;
    result.textContent = ""
    if (temperature === "") {
        alert("Please Enter the temperature");
    } else if (fromTempType === toTempType) {
        result.textContent = temperature + " " + '\u00B0' + toTempType.charAt(0).toUpperCase();
    } else {

        if (fromTempType === "celsius") {
            if (toTempType === "fahrenheit") {
                const fahrenheit = convertCelsiusToFahrenheit(temperature);
                result.textContent = fahrenheit + " " + '\u00B0' + "F";
            } else if (toTempType === "Kelvin") {
                const kelvin = convertCelsiusToKelvin(temperature);
                result.textContent = kelvin + " " + '\u00B0' + "K";
            }

        } else if (fromTempType === "fahrenheit") {
            if (toTempType === "celsius") {
                const celsius = convertFahrenheitToClesius(temperature);
                result.textContent = celsius + " " + '\u00B0' + "C";
            } else if (toTempType === "Kelvin") {
                const celsius = convertFahrenheitToClesius(temperature);
                const kelvin = convertCelsiusToKelvin(celsius);
                result.textContent = kelvin + " " + '\u00B0' + "K";
            }
        } else if (fromTempType === "Kelvin") {
            if (toTempType === "celsius") {
                const celsius = convertKelvinToCelsius(temperature);
                result.textContent = celsius + " " + '\u00B0' + "C";
            } else if (toTempType === "fahrenheit") {
                const celsius = convertKelvinToCelsius(temperature);
                const fahrenheit = convertCelsiusToFahrenheit(celsius);
                result.textContent = fahrenheit + " " + '\u00B0' + "F";
            }
        }

    }

}