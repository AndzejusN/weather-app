import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import OneDayWeather from './pages/OneDayWeather/OneDayWeather';
import LongTermWeather from './pages/LongTermWeather/LongTermWeather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li key="first-link" className="menu-item"><Link to={'/'}>Today weather in Lithuania</Link></li>
          <li key="second-link" className="menu-item"><Link to={'/longtermweather'}>Forecast of weather in Lithuania</Link></li>
        </ul>
      </header>
      <main>
        <section>
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
