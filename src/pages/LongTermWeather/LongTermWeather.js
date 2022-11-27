import './LongTermWeather.css';
import ForecastWeatherBoxes from '../../components/main/ForecastWeatherBoxes/ForecastWeatherBoxes';

import axios from 'axios';
import debounce from 'lodash.debounce';

import { useEffect, useState } from 'react';

const LongTermWeather = () => {

    return (
        < ForecastWeatherBoxes />
    );

}

export default LongTermWeather;