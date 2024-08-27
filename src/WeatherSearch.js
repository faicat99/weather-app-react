import React, { useState } from "react";

export default function WeatherSearch() {
        const [city, setCity] = useState();
        
        
        function handleSubmit(event) {
                event.preventDefault();
                alert(city);

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

