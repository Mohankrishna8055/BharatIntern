function convertTemperature() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

    if (isNaN(celsius) && isNaN(fahrenheit)) {
        alert('Please enter a temperature value.');
        return;
    }

    var result;

    if (!isNaN(celsius)) {
        var resultFahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = resultFahrenheit.toFixed(2);
        result = `${celsius}°C = ${resultFahrenheit.toFixed(2)}°F`;
    }

    if (!isNaN(fahrenheit)) {
        var resultCelsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = resultCelsius.toFixed(2);
        result = `${fahrenheit}°F = ${resultCelsius.toFixed(2)}°C`;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}