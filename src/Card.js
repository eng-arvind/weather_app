import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import icon from './img/icon1.png';
import icon1 from './img/icon2.png';
export default function Card(props) {
    let newdate= new Date();
    let dat = ['Jan','Feb','March','April','May','June','Jul',"Aug",'Sep','Nov','Dec'];
    let day = ['Mon','Tue','Wed','Thus','Fri','Sat','Sun'];
   let dy =  newdate.getUTCDay()
    let mn =  newdate.getMonth()
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("delhi");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4dae035daf5a713135a22a219f511ae3`
            const resp = await fetch(url);
            const respjson = await resp.json();
            setCity(respjson.main);
        }
        fetchApi();
    }, [search])
    return (

        <div className="card main_style">
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                <img src={icon} className="logo mt-1" alt="" />
                {!city ? (
                    <p>No Data found</p>

                ) : (
                    <div>
                        <div className="info mt-4">
                            <h4 className="location mt-2"><img src={icon1} className="logo" alt="" />{search}</h4>
                            <p id="date">{day[dy-1]} | {dat[mn]} {newdate.getDate()} | {newdate.getHours()%12}:{newdate.getMinutes()}</p>
                            <h1 className="temp">{city.temp}°C</h1>
                            <h6 className="tempmin_max">Min {city.temp_min}°C | Max {city.temp_max}°C</h6>
                        </div>
                    </div>
                )
                }

            </div>
        </div>
    )
}

