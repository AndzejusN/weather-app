import './ForecastWeatherOneBox.css';


const ForecastWeatherOneBox = (props) => {
    const data = props.dataList.list;
    const cityName = props.city;

    return (
        data.map((list, index) => {
            return (
                <div key="index" className="weather-box-wrapper">
                    <div className="month-day">
                        <div>{list.dt_txt.split(' ')[0]}</div>
                        <div>{list.dt_txt.split(' ')[1]}</div>
                    </div>
                    <div className="weather-icon">
                        <img src={`https://openweathermap.org/img/w/${list.weather[0].icon}.png`}
                            alt={`Visualization of ${list.weather[0].main}`} />
                    </div>
                    <div className="temp-place">
                        {list.main.temp >= 0 ?
                            <div className="place-grade text-color-red">{Math.round(list.main.temp)} °C</div> :
                            <div className="place-grade text-color-blue">{Math.round(list.main.temp)} °C</div>
                        }

                        <div className="place-words">{list.weather[0].main}</div>
                        <div className="place-city">{cityName}</div>
                    </div>
                </div>
            )
        })
    );
}

export default ForecastWeatherOneBox;