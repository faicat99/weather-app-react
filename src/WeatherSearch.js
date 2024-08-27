import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
        const [city, setCity] = useState("");
        const [weatherResult, setWeatherResult] = useState(false);

        function displayWeather(response) {
                setWeatherResult(true);
                console.log(response.data.main.temp);

        }
        
        function handleSubmit(event) {
                event.preventDefault();
                let apiKey="bafb81c036f1dc4bfbb21532bb2ot295"
                let apiUrl = 
                `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
                axios.get(apiUrl).then(displayWeather);
        }
        
        function updateCity(event) {
                setCity(event.target.value);
        }

        if (weatherResult) {
                return "Loading..."
        } else {


        return (
                <form onSubmit={handleSubmit}>
                        <input type="search" placeholder="Enter a City..." onChange={updateCity} />
                        <input type="submit" value="Search" />
                 </form>
        );
}
}

