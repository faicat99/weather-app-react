import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
        const [city, setCity] = useState();
        
        
        function handleSubmit(event) {
                event.preventDefault();
                let apiKey="bafb81c036f1dc4bfbb21532bb2ot295"
                let apiUrl = 
                `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
                console.log(apiUrl);



        }
        
        function updateCity(event) {
                setCity(event.target.value);
        }


        return (
                <form onSubmit={handleSubmit}>
                        <input type="search" placeholder="Enter a City..." onChange={updateCity} />
                        <input type="submit" value="Search" />
                 </form>
        );
}

