function celsiusToFahrenheit(c) {
    return c * 9 / 5 + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

document.getElementById('toF').addEventListener('click', () => {
    const c = parseFloat(document.getElementById('celsius').value);
    if (isNaN(c)) {
        document.getElementById('resultF').textContent = 'Please enter a number';
    } else {
        const f = celsiusToFahrenheit(c);
        document.getElementById('resultF').textContent = `${c.toFixed(2)}°C = ${f.toFixed(2)}°F`;
    }
});

document.getElementById('toC').addEventListener('click', () => {
    const f = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(f)) {
        document.getElementById('resultC').textContent = 'Please enter a number';
    } else {
        const c = fahrenheitToCelsius(f);
        document.getElementById('resultC').textContent = `${f.toFixed(2)}°F = ${c.toFixed(2)}°C`;
    }
});
