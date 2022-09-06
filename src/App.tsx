
import logo from './logo.svg';
import './App.css';
import Header from './header';
import { Routes, Route, Link } from "react-router-dom";
import Overview from './overview';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='about' element={<div className='about'></div>}/>
      </Routes>
    </div>
  );
}

export default App;
