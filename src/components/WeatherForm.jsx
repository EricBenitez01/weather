import React from 'react';
import {useState} from 'react'





function WeatherForm({onChangeCity}) {
  const [city, setCity] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city); 

  }  
  const handlerChange = (e) => {
        const value = e.target.value;
          setCity(value) 
      }
  

  return (
    <div>
      <form onSubmit={handlerSubmit} >
          <input type="text" onChange={handlerChange} />
      </form>
    </div>
    
  )
}

export default WeatherForm