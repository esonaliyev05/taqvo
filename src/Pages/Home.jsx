// import React, { useEffect } from 'react'
// import Header from '../components/Header/Header'
// import Main from '../components/Main/Main'

// const Home = () => {
//   useEffect(() => {
//     window.scrollTo(50, 0);

    
//   }, []);
//   return (
//     <div>
//      <Header/>
//      <Main/>
//     </div>
//   )
// }

// export default Home

import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const Home = ({ open, handleClose , handleOpen}) => {
  useEffect(() => {
    // Har safar sahifa yangilanganida yuqoriga scroll qiladi
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header komponenti va uning modali ishlashi uchun kerakli propslar */}
      <Header open={open} handleClose={handleClose} handleOpen={handleOpen} />
      {/* Asosiy kontent */}
      <Main />
    </div>
  );
};

export default Home;
