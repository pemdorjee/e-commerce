import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Fotter from './components/Footer'
import Footer from './components/Footer'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
          <Route path='/'           element={<Home/>} />
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/contact'    element={<Contact/>}/>
          <Route path='/about'      element={<About/>}/>
          <Route path='/contact'    element={<Contact/>}/>
          <Route path='/product/:produrctId' element={<Product/>}/>
          <Route path='/login'                element={<Login/>}/>
          <Route path='/orders'                element={<Orders/>}/>
          <Route path='/placeorder'            element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App