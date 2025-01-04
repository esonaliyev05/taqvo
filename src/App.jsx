import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [open, setOpen] = useState(false); 

  const handleClose = () => {
    setOpen(false); 
  };

  const handleOpen = () => {
    setOpen(true); 
  };
  return (
    <>
     <BrowserRouter>
     <Navbar handleOpen={handleOpen} toggleSidebar={toggleSidebar}/>
       <Routes>
        <Route path='/' element={<Home open={open} handleClose={handleClose} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>}/>
        <Route path='about' element={<About/>}/>
       </Routes>
       <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App