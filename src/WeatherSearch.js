import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
        const [city, setCity] = useState("");
        const [weatherResult, setWeatherResult] = useState(false);
        const [weather, setWeather] = useState(null);

        function displayWeather(response) {
                setWeatherResult(true);
                setWeather({
                        temperature: response.data.main.temp,
                        wind: response.data.wind.speed,
                        humidity: response.data.main.humidity,
                        icon: ` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                        description: response.data.weather[0].description
                });
        }
        
        function handleSubmit(event) {
                event.preventDefault();
                let apiKey="094780c710fa4efd669f0df8c3991927";
                let apiUrl = 
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                axios.get(apiUrl).then(displayWeather);
        }
        
        function updateCity(event) {
                setCity(event.target.value);
        }

        let form = <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a City..." onChange={updateCity} />
        <button type="submit">Search</button>
 </form>;


        if (weatherResult) {
                return (
                        <div>
                                {form}
                                <ul>
                                        <li>Temperature: {Math.round(weather.temperature)}'C</li>
                                        <li>Description: {weather.description}</li>
                                        <li>Humidity: {weather.humidity}%</li>
                                        <li>Wind: {Math.round(weather.wind)}km/h</li>
                                        <li>
                                        <img src={weather.icon} alt="Weather.description" />
                                        </li>
                                </ul>
                        </div>
                );
        } else {
                return form;
        }
}

