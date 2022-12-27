import {useState, useEffect} from 'react'
import './App.css'
import WeatherForm from './components/WeatherForm';
import MainWeather from './components/MainWeather'

function Weather() {  
  const [weather, setWeather] = useState(null);


  useEffect( () => {
    infoLoaded()
  }, [])
  useEffect(() => {
    document.title = `WEATHER/${weather?.location.name}`;
  }, [weather])
  

  async function infoLoaded(city = "london"){
    
    try {
      const res = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
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
