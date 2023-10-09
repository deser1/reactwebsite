import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './component/pages/home/Home';
import Portfolio from './component/pages/portfolio/Portfolio';
import PageNotFound from './component/pages/404/404';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/portfolio' Component={Portfolio} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
