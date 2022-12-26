import {useState, useEffect} from 'react'
import WeatherForm from './components/WeatherForm'

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
    <div>
      <WeatherForm onChangeCity={handlerCity}/>
      <div>{weather?.location.name} </div>
      <p> {weather?.current.temp_c} </p>
    </div>
  );
}

export default Weather;
