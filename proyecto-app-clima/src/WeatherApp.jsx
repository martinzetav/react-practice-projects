import { use, useState } from "react";
import "./WeatherApp.css"

export const WeatherApp = () => {

    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const url = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "df09d7cb9e7203aad349cc966a31cfbb";
    const difKelvin = 273.15;

    const fetchWeatherDate = async() =>{
        if(city.trim() == ""){
            alert("Debe ingresar el nombre de una ciudad.");
            return
        }   
        try {
            const response = await fetch(`${url}?q=${city}&appid=${API_KEY}&lang=es`);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Se produjo el siguiente error: ", error);
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();
        fetchWeatherDate();
    }

  return (
    <div className="container">
        <h1>Aplicacion del Clima</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingresa una ciudad" value={city} onChange={e => setCity(e.target.value)}/>
            <button type="submit">Buscar</button>
        </form>

        {weatherData && (
            <div>
                <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                <p>La temperatura actual es {Math.floor(weatherData.main.temp - difKelvin)}°C</p>
                <p>La condición meteorológica actual es {weatherData.weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
            </div>
        )}
    </div>
  )
}
