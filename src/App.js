import React from "react";
import WeatherSearch from "./WeatherSearch";



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
        <h6>Coded by Fainche Mckeown and is hosted on <a href="https://www.github.com/faicat99">Github</a> and <a href="https://app.netlify.com/sites/weather-app-react-challenge/overview"> Netlify</a></h6>
        </header>
          
    </div>
  );
}

export default App;

