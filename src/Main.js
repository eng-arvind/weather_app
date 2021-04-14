import React, { Component, useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import icon from './img/icon1.png';
import icon1 from './img/icon2.png';
import './style.css'
function Main(e) {
    let newdate = new Date();
    let dat = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'Jul', "Aug", 'Sep', 'Nov', 'Dec'];
    let day = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'];
    let dy = newdate.getUTCDay()
    let mn = newdate.getMonth()
    const [city, setCity] = useState(null);
    const [cityname,setcityname] = useState("delhi")
    const [updatloc,setupdatloc] = useState("delhi")
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${updatloc}&units=metric&appid=4dae035daf5a713135a22a219f511ae3`
            const resp = await fetch(url);
            const respjson = await resp.json();
            setCity(respjson.main);
        }
        fetchApi();
    },[updatloc])
const searchloc = (e) =>{
 e.preventDefault()
    setupdatloc(cityname)
}
    return (
        <>
            <div className="search">
                <form className="form-inline btn_resp">
                    <input id="data" className="form-control mr-sm-2" placeholder="Enter Location" aria-label="Search" onChange={(event) => { setcityname(event.target.value)  }} />
                    <button className="btn btn-success btn_resp" onClick={searchloc}>Search</button>
                </form>
            </div>
            <div className="row my_row d-flex align-item-center justify-content-center">

                <div className="card main_style">
                    <div className="card-body">
                        <h2 className="card-title">Today</h2>
                        <img src={icon} className="lg logo mt-4" alt="" />
                        {!city ? (
                            <p>No Data found</p>

                        ) : (
                            <div className="mt-5">
                                <h3 className="location mt-1"><img src={icon1} className="logo" alt="" />{updatloc}</h3>
                                <p id="date">{day[dy - 1]} | {dat[mn]} {newdate.getDate()} | {newdate.getHours() % 12}:{newdate.getMinutes()}</p>
                                <h1 className="temp"><b>{city.temp}°C</b></h1>
                                <h6 className="tempmin_max">Min {city.temp_min}°C | Max {city.temp_max}°C</h6>
                            </div>
                        )
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
export default Main