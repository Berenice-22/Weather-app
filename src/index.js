let weather = {
    "paris": {
        temp: 19.7,
        humidity: 80
    },
    "tokyo": {
        temp: 17.3,
        humidity: 50
    },
    "lisbon": {
        temp: 30.2,
        humidity: 20
    },
    "san francisco": {
        temp: 20.9,
        humidity: 100
    },
    "moscow": {
        temp: -5,
        humidity: 20
    }
};
let city = prompt("Enter a City");
city = city.toLowerCase();
if (weather[city] !== undefined) {
    let temperature = weather[city].temp;
    let humidity = weather[city].humidity;
    let celciusTemp = Math.round(temperature);
    let farenheitTemp = Math.round((temperature * 9 / 5 + 32));
    alert
        (`It is currently ${celciusTemp}°C (${farenheitTemp}°F) in ${city} with a humidity of ${humidity}%`);
} else {
    alert(`Sorry, we dont know the weather in your city. Try going to https:// www.google.com/search?q=weather+${city}`);
}