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
  const [contentLoaded, setContentLoaded] = useState(false); // Kontentning yuklanishini nazorat qilish uchun

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClose = () => {
    setOpen(false); 
  };

  const handleOpen = () => {
    setOpen(true); 
  };

  // Sayt yuklanganidan so'ng 1 soniya kutib turish
  useEffect(() => {
    window.onload = () => {
      setLoading(false); // Sayt yuklandi
      setTimeout(() => {
        setContentLoaded(true); // 1 soniya kutgandan so'ng kontentni ko'rsatamiz
      }, 500); // 1000ms = 1 soniya
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading ? ( // Agar loading true bo'lsa, spinner ko'rsatiladi
          <div className="loader-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <RingLoader size={100} color="#36D7B7" />
          </div>
        ) : contentLoaded ? ( // Agar kontent yuklanishi tugagan bo'lsa
          <>
            <Navbar handleOpen={handleOpen} toggleSidebar={toggleSidebar}/>
            <Routes>
              <Route path="/" element={<Home open={open} handleClose={handleClose} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>}/>
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </>
        ) : ( // Agar 1 soniya kutish davom etsa
          <div className="loading-overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <RingLoader size={100} color="#36D7B7" />
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
