import logo from './logo.svg';
import './App.css';
import Beginners from './pages/beginnersIsland';
import Header from './pages/header';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/home" element={ <Home /> }></Route>
          <Route path="/beginner" element={ <Beginners />}></Route>
        </Routes>
        <Header/>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
