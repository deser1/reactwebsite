import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/pages/home/Home";
import Portfolio from "./component/pages/portfolio/Portfolio";
import PageNotFound from "./component/pages/404/404";
import Footer from "./component/pages/footer/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
