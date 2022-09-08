
import logo from './logo.svg';
import './app.css';
import Header from './shared/header';
import { Routes, Route, Link } from "react-router-dom";
import Overview from './overview/overview';
import Portfolio from './portfolio/portfolio';
import PortfolioSection from './portfolio/portfolio-section';
import About from './about/about';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Overview/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='portfolio/:sectionId' element={<PortfolioSection/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
