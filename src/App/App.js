import './App.css';
import Main from '../pages/Main/Main.js';
import Beers from '../pages/Beers/Beers';
import Random from '../pages/Random/Random';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
              <Routes>
                  <Route path="/drink-cook" element={<Main />} />
                  <Route path="/drink-cook/beers" element={<Beers />} />
                  <Route path="/drink-cook/random" element={<Random />} />
                  <Route path="/drink-cook/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
      </Router>
    </div>
  );
}

export default App;
