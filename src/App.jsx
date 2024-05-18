import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Login from './login'
import Home from './home.jsx'
import Left from './left.jsx'
import Right from './right.jsx/'
import TM from './tm.jsx'
import Hemo from './hemo.jsx'
import Diabetes from './diabetes.jsx'
import Covid from './covid.jsx'
import Reservation from './reservation.jsx'
import Success from './success.jsx'
import AdminLogin from './adminlogin.jsx'
import LabAdminDashboard from './adminhome.jsx'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/left' element={<Left />}></Route>
        <Route path='/right' element={<Right />}></Route>
        <Route path='/tm' element={<TM />}></Route>
        <Route path='/hemo' element={<Hemo />}></Route>
        <Route path='/diabetes' element={<Diabetes />}></Route>
        <Route path='/covid' element={<Covid />}></Route>
        <Route path='/reservation' element={<Reservation />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/adminlogin' element={<AdminLogin />}></Route>
        <Route path='/adminhome' element={<LabAdminDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
