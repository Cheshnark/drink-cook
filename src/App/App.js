import './App.css';
import Main from '../pages/Main/Main.js';
import Beers from '../pages/Beers/Beers';
import Random from '../pages/Random/Random';
import About from '../pages/About/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/beers" element={<Beers />} />
                  <Route path="/random" element={<Random />} />
                  <Route path="/about" element={<About />} />
                  {/* <Route path="*" element={<NotFound />} /> */}
              </Routes>
      </Router>
    </div>
  );
}

export default App;
