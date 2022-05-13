import React from 'react';
import Home from './Component/Home';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import ListRoom from './Component/ListRoom';
import InfoRoom from './Component/InfoRoom';
import Booking from './Component/Booking';
import Payment from './Component/Payment';
import Success from './Component/Success';
import Check from './Component/Check';
import Login from './Component/Login';
import Register from './Component/Register';





export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/ListRoom' element={<ListRoom/>}/>
              <Route path='/InfoRoom' element={<InfoRoom/>}/>
              <Route path='/Booking' element={<Booking/>}/>
              <Route path='/Payment' element={<Payment/>}/>
              <Route path='/Success' element={<Success/>}/>
              <Route path='/Check' element={<Check/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/Register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>     
      </div>
    );
  }
}
