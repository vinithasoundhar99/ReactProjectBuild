
import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Navbar from './router/Navbar';
import Services from './router/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/Home" element ={<Home/>}></Route>
        <Route path="/About" element ={<About/>}></Route>
        <Route path="/services" element ={<Services/>}></Route>        
      </Routes>
    </div>
  );
}

export default App;
