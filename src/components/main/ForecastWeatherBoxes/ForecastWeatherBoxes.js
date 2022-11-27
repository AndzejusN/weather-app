import './ForecastWeatherBoxes.css';
import ForecastWeatherOneBox from './ForecastWeatherOneBox/ForecastWeatherOneBox';

import axios from 'axios';
import debounce from 'lodash.debounce';

import { useEffect, useState } from 'react';

const ForecastWeatherBoxes = () => {

    const [dataList, setDataList] = useState();

    const [city, setCity] = useState('Vilnius');

    const apiKey = '900ba87feb461ffe8e1fb40330b9660c';

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        };

        axios.request(options)
            .then(function (response) {
                setDataList(response.data);
            }).catch(function (error) {
                console.error(error);
            });
    }, [city]);

    const cityInputHandel = (event) => setCity(event.target.value);
    const debounceCityInput = debounce(cityInputHandel, 1000);

    return (
        <>
            <div className="input-wrapper">
                <input type="text" onChange={debounceCityInput} placeholder="Search by city name..."></input>
            </div>

            {
                dataList ? (
                    <section className="container-forecast">

                        <ForecastWeatherOneBox dataList={dataList} city={city} />

                    </section>
                ) : ('waiting for data')
            }
        </>
    );
}

export default ForecastWeatherBoxes;