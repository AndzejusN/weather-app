import './OneDayWeather.css';
import OneDayWeatherBox from '../../components/main/OneDayWeatherBox/OneDayWeatherBox';

import axios from 'axios';
import debounce from 'lodash.debounce';

import { useEffect, useState } from 'react';

const OneDayWeather = () => {

    const [dataList, setDataList] = useState();

    const [city, setCity] = useState('Vilnius');

    const apiKey = '900ba87feb461ffe8e1fb40330b9660c';

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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

            {dataList ? (
                < OneDayWeatherBox data={dataList} />
            ) : ('waiting for data')}
        </>
    );
}

export default OneDayWeather;