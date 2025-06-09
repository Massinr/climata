import React, { useState } from 'react';
import './App.css';




  const api = {
    key: '183dd81e69a6c0b7e13585993519b181',
    base: 'https://api.openweathermap.org/data/2.5/'
  };
function App() {
  const [search,setSearch] = useState('')
  const [weather,setWeather] = useState({})

  const searchPressed = ()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res)=>res.json())
      .then((result)=>{
        setWeather(result)
      });
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Climata</h1>
          <div className="form">
            <input 
            type="text" 
            placeholder="What city?" 
            onChange={(e)=>setSearch(e.target.value) }
            />
            <button onClick={searchPressed}>Search</button>
          </div>
          <div className="results">
  {weather.main ? (
    <>
      <p className="city">{weather.name}</p>
      <p className="temp">{weather.main.temp}°C</p>
      <p className="weather">{weather.weather[0].main}</p>
      <p className="weather">{weather.weather[0].description}</p>
    </>
  ) : (
    <p>Search for a city to get the weather!</p>
  )}
</div>

        </div>
      </header>
    </div>
  );
}

export default App;
