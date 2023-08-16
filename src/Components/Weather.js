import { useEffect, useState } from "react";
import "./Weather.css"

function Weather(){
    const[city,setcity]=useState(null)
    const[input,setinput]=useState("Ahmedabad")
    useEffect(()=>{
        const fetchapi = async() =>{
            const Url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=77ae1f5ec40c09c6f20b7338596d5fba`
            const response = await fetch(Url)
            const resJson = await response.json();
            setcity(resJson.main)
        }
        fetchapi();
    },[input])
    return(
        <div className="container">
            <div className='city-search'>
                <input type='search' value={input} onChange={(e)=>{
                    setinput(e.target.value)
                }}></input>
            </div>
            {
                !city ?(
                    <p className="error">No data Found</p>
                ):(
                    <div>
                    <div className="weather-city">
                    {input}
                    </div>
                    <div className="weather-degree">
                    {city.temp}
                    </div>
                    <div className="min-max">
                        <div className="min">Min:{city.temp_min}</div>
                        <pre> | | </pre>
                        <div className="max">Max:{city.temp_max}</div>
                    </div>
                    </div>
                )
            }
               
        </div>
    )
}

export default Weather;