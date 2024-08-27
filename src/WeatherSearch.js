import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
        const [city, setCity] = useState("");
        const [weatherResult, setWeatherResult] = useState(false);
        const [temperature, setTemperature] = useState(null);

        function displayWeather(response) {
                setWeatherResult(true);
                setTemperature(response.data.main.temp);
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

        if (weatherResult) {
                return temperature;
        } else {


        return (
                <form onSubmit={handleSubmit}>
                        <input type="search" placeholder="Enter a City..." onChange={updateCity} />
                        <input type="submit" value="Search" />
                 </form>
        );
}
}

