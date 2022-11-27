import './ForecastWeatherOneBox.css';

const ForecastWeatherOneBox = (props) => {
    const data = props.dataList.list;
    const cityName = props.city;

    return (
        data.map((listElement, index) => {
            return (
                <div key="index" className="weather-box-wrapper">
                    <div className="month-day">
                        <div>{listElement.dt_txt.split(' ')[0]}</div>
                        <div>{listElement.dt_txt.split(' ')[1].slice(0,5)} o'clock</div>
                    </div>
                    <div className="weather-icon">
                        <img src={`https://openweathermap.org/img/w/${listElement.weather[0].icon}.png`}
                            alt={`Visualization of ${listElement.weather[0].main}`} />
                    </div>
                    <div className="temp-place">
                        {listElement.main.temp >= 0 ?
                            <div className="place-grade text-color-red">{Math.round(listElement.main.temp)} °C</div> :
                            <div className="place-grade text-color-blue">{Math.round(listElement.main.temp)} °C</div>
                        }

                        <div className="place-words">{listElement.weather[0].main}</div>
                        <div className="place-city">{cityName}</div>
                    </div>
                </div>
            )
        })
    );
}

export default ForecastWeatherOneBox;