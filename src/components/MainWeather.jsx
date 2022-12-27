import React from 'react'
import "./MainWeather.css"


function MainWeather({weather}) {
  return (
    <div className='mainInfo'>
        <div className='city'>{weather?.location.name} </div>
        <div className='country'>{weather?.location.country}</div>
        <div className='row'>
            <img className='icon' src={`http:${weather?.current.condition.icon}`} alt={`${weather?.current.condition.text}`} width="128" />
        </div>
         <div className='temp'>
            <div className='condition'>
                {weather?.current.condition.text}
            </div>
            <div className='current'>
                {weather?.current.temp_c}º
            </div>
         </div>
        <div>
            <iframe 
            title='mapa'
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13130.27597077164!2d${weather?.location.lon}5!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1672091325857!5m2!1ses-419!2sar`} 
            width="100%" 
            height="450" 
            style={{border:0} }
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div></div>
    </div>
  )
}

export default MainWeather