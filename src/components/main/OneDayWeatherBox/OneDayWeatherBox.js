import './OneDayWeatherBox.css';

const OneDayWeatherBox = (props) => {

    const dataList = props.data;

    const getDayMonth = () => {
        const date = new Date();
        const shortNameMonth = date.toLocaleString('en-US', { month: 'short' });
        const day = date.getDate();
        const monthDay = [shortNameMonth, day].join(' ');
        return monthDay;
    }

    return (
        <section className="section-container">
            <div className="weather-box-wrapper">
                <div className="weather-icon">
                    <img src={`https://openweathermap.org/img/w/${dataList.weather[0].icon}.png`}
                        alt={`Visualization of ${dataList.weather[0].main}`} />
                </div>
                <div className="temp-place">
                    {dataList.main.temp >= 0 ?
                        <div className="place-grade text-color-red">{Math.round(dataList.main.temp)} °C</div> :
                        <div className="place-grade text-color-blue">{Math.round(dataList.main.temp)} °C</div>
                    }
                    <div className="place-words">{dataList.weather[0].main}</div>
                    <div className="place-city">{dataList.name}</div>
                </div>
                <div className="month-day">{getDayMonth()}</div>
            </div>
        </section>
    )
}

export default OneDayWeatherBox;