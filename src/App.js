import {useState, useEffect} from 'react'
import './App.css'
import WeatherForm from './components/WeatherForm';
import MainWeather from './components/MainWeather'

function Weather() {  
  const [weather, setWeather] = useState(null);
  const REACT_APP_URL = "http://api.weatherapi.com/v1/current.json?";
  const REACT_APP_KEY = "4a8ed4dbcd0146fa9a900942222612";  

  useEffect( () => {
    infoLoaded()
  }, [])
  useEffect(() => {
    document.title = `WEATHER/${weather?.location.name}`;
  }, [weather])
  

  async function infoLoaded(city = "london"){
    
    try {
      const res = await fetch(`${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`);
      const respuesta = await res.json();
      console.log(respuesta);
      setWeather(respuesta)

    } catch (error) {
      console.log(error);
    }

  }

const handlerCity = (city) => {
  setWeather(null)
  infoLoaded(city)
}

  return (
    <div className='conteiner'>
        <WeatherForm onChangeCity={handlerCity}/>
        <MainWeather weather={weather}/>
    </div>
  );
}

export default Weather;
