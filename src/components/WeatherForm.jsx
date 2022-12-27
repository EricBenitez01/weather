import React from 'react';
import {useState} from 'react'
import "./WeatherForm.css"

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
      <form className="conteinerForm" onSubmit={handlerSubmit}  >
          <input  className="input" type="text" onChange={handlerChange} />
      </form>
  )
}

export default WeatherForm