


import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RingLoader } from "react-spinners"; 
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false); 
  const [loading, setLoading] = useState(true); 
  const [contentLoaded, setContentLoaded] = useState(false); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
  
    setTimeout(() => {
      setLoading(false); 
      setContentLoaded(true); 
    }, 2000); 
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading ? ( 
          <div
            className="loader-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <RingLoader size={100} color="#991b1b" />
          </div>
        ) : contentLoaded ? ( 
          <>
            <Navbar handleOpen={handleOpen} toggleSidebar={toggleSidebar} />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    isOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                  />
                }
              />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <div
            className="loading-overlay"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <RingLoader size={100} color="#36D7B7" />
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
