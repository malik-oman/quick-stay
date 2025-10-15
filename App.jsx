import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import {Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRooms from './Pages/AllRooms'
import RoomDetail from './Pages/RoomDetail'
import MyBooking from './Pages/MyBooking'
import HotelReg from './Components/HotelReg'
import Layout from './Pages/HotelOwner/Layout'
import Dashboard from './Pages/HotelOwner/Dashboard'
import AddRoom from './Pages/AddRoom'
import ListRoom from './Pages/HotelOwner/ListRoom'

const App = () => {

  


  
const isOwnerpath  = useLocation().pathname.includes("owner");

  return (
    <div className="min-h-screen flex flex-col" >
 { !isOwnerpath &&   <Navbar/>}
 {false  &&  <HotelReg/>}
 <div className="flex-1" >
<Routes>
<Route  path='/' element={<Home/>} />
<Route  path='/rooms' element={<AllRooms/>} />
<Route  path='/rooms/:id' element={<RoomDetail/>} />
<Route  path='/my-booking' element={<MyBooking/>} />
  <Route path='/owner' element={<Layout/>} >
<Route  index element={<Dashboard/>} />
<Route   path="add-room" element={<AddRoom/>} />
<Route   path="List-room" element={<ListRoom/>} />

  </Route>



</Routes>

 </div>
 <Footer/>
</div>
  )
}

export default App
