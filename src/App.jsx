
import './App.css';

import OtpAuth from './OtpAuth';
import Header from './Header';
import Register from './Register';
import Login from './Login';
import {  Route, Routes } from 'react-router-dom';
import VerifyOtp from './VerifyOtp';
import Home from './Home';


function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>
    
    
    <Route path='/' element={<OtpAuth/>}/>
    <Route path='/verify' element={<VerifyOtp/>}/>

    <Route path='/reg' element={<Register/>}/>
    <Route path='/log' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
   
   
    </Routes>
    </div>
  );
}

export default App;
