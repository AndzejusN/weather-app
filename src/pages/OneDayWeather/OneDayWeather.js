import './OneDayWeather.css';
import axios from 'axios';

import { useEffect, useState } from 'react';

const OneDayWeather = () => {
    const [dataList, setDataList] = useState();

    const [latitude, setLatitude] = useState('54.68');
    const [longitude, setLongitude] = useState('25.27');

    const [city, setCity] = useState('Vilnius');

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const yearMonthDay = [year, month, day].join('-');

    const handelLatitudeInput = (event) => setLatitude(event.target.value);
    const handelLongitudeInput = (event) => setLongitude(event.target.value);
    const cityInputHandel = (event) => setCity(event.target.value);

    const apiKey = '900ba87feb461ffe8e1fb40330b9660c';

    // &units=metric  or  &units=imperial
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=lt`
        };

        axios.request(options)
            .then(function (response) {
                setDataList(response.data);
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
    }, [latitude, longitude])

    const handleTempOutput = () => {
        let tempPlaceElement = document.querySelector('temp-place');
        let temp = tempPlaceElement.textContent;
        let roundedTemperature = Math.round(temp);
        roundedTemperature >= 0 ? tempPlaceElement.classList.add('text-color-green') : tempPlaceElement.classList.add('text-color-red');
        tempPlaceElement.innerHTML = roundedTemperature;
    }

    return (
        <>
            <input type="number" placeholder="Enter Longitude" step=".01" min="-90" max="90" value={longitude} onChange={handelLongitudeInput}></input>
            <input type="number" placeholder="Enter Latitude" step=".01" min="-180" max="180" value={latitude} onChange={handelLatitudeInput}></input>

            <input type="text" value={city} onChange={cityInputHandel}></input>
            {dataList ? (
                <section className="section-container">
                    <div className="weather-box-wrapper">
                        <div className="weather-icon"></div>
                        <div className="temp-place">{dataList.main.temp} °C</div>
                        <div className="month-day"></div>
                    </div>
                </section>
            ) : ('waiting for data')}


        </>
    );
}

export default OneDayWeather;