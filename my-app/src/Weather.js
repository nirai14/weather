import React from 'react'
import './Weather.css'
import axios from 'axios'

const Weather = () => {

    const[data,setData]=React.useState({})
    const[location,setLocation]=React.useState('')
const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bc9dce61234723210050f24ada0e57f8`




//when location is entered shows details in console
const searchLocation=(event)=>{ //event in jsx input2
if(event.key==="Enter"){
            axios.get(url).then(response=>{
                setData(response.data)
                console.log(response.data)
                setLocation("")
            })
         }
}
return (
    <div>
    <center>
        <h1 className="title">Weather App</h1>
            <input type='text'
             value={location}
              onKeyPress={searchLocation} 
              onChange={event=>setLocation(event.target.value)} 
              placeholder='Enter location' />
            
   
    </center>

    <div className="details">
       
        <div>
        <p>{data.name}</p>
        {data.main?<h1>{data.main.temp}°F</h1>:null}
        {data.weather?<p>{data.weather[0].main}</p>:null}
        </div>
        {data.name!==undefined  &&  
        <section>

        <div>
        {data.main?<p>{data.main.feels_like}°F</p>:null}
        <p>feels like</p>
        </div>
        <div> 
        {data.main? <p>{data.main.humidity}%</p>:null}
        <p>Humidity</p>
        </div>
        <div>
        {data.wind? <p>{data.wind.speed}MPH</p>:null}
        <p>Wind speed</p>
        </div>
        
        </section>
}
        </div>

       
        </div>
  
  
        
  )
}

export default Weather