import React, { useState} from "react";
import axios from "axios";



export default function WeatherSearch() {
        const [city, setCity] = useState("");
        const [loaded, setLoaded] = useState(false);
        const [temperature, setTemperature] = useState(null);


        function displayWeather(response) {
                setLoaded(true);
                setTemperature(response.data.temp);
        }

        function handleSubmit(event) {
                event.preventDefault();
                let apiKey = "bafb81c036f1dc4bfbb21532bb2ot295";
                let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
                axios.get(apiUrl).then(displayWeather);

        }

        function updateCity(event) {
                setCity(event.target.value);
        }

        let form = (<form onSubmit={handleSubmit}>
                    <input type="search" 
                    placeholder="Enter A City..." 
                    onChange={updateCity} 
                    />
                    <button type="Submit">Search</button>  
                </form>
        )
        if (loaded) {
                return (
                        <div>
                          (form)
                          (temperature)
                        </div>
                );
                
        } else {
        return (
                form
        )    
        }
}

