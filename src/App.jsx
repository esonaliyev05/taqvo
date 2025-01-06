import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RingLoader } from 'react-spinners'; // RingLoader spinnerini import qilamiz
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Saytni yuklanishini tekshirish uchun holat

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClose = () => {
    setOpen(false); 
  };

  const handleOpen = () => {
    setOpen(true); 
  };

  // useEffect yordamida sayt yuklangach, loading holatini o'zgartiramiz
  useEffect(() => {
    // Sayt yuklanishi tugagach loading ni false ga o'zgartiramiz
    window.onload = () => setLoading(false);
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading ? ( // Agar loading true bo'lsa, spinner ko'rsatiladi
          <div className="loader-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <RingLoader size={100} color="#36D7B7" />
          </div>
        ) : (
          <>
            <Navbar handleOpen={handleOpen} toggleSidebar={toggleSidebar}/>
            <Routes>
              <Route path="/" element={<Home open={open} handleClose={handleClose} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>}/>
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
