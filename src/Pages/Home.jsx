import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

const Home = () => {
  useEffect(() => {
    window.scrollTo(50, 0);

    
  }, []);
  return (
    <div>
     <Header/>
     <Main/>
    </div>
  )
}

export default Home