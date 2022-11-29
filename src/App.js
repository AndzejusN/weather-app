import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import OneDayWeather from './pages/OneDayWeather/OneDayWeather';
import LongTermWeather from './pages/LongTermWeather/LongTermWeather';

function App() {

  return (
    <div className="App">
      <header className="app-header">
        <ul className="navigation">
          <li key="today-weatherlink" className="menu-item"><Link to={'/'}>Realtime weather</Link></li>
          <li key="forecast-weather-link" className="menu-item"><Link to={'/longtermweather'}>Forecast of weather</Link></li>
        </ul>
      </header>
      <main>
        <section className="main-content">
          <Routes>
            <Route path="/" element={<OneDayWeather />} />
            <Route path="/longtermweather" element={<LongTermWeather />} />
          </Routes>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;