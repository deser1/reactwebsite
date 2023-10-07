import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/home/Home';
import Portfolio from './component/portfolio/Portfolio';
import PageNotFound from './component/404/404';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/portfolio' Component={Portfolio} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
