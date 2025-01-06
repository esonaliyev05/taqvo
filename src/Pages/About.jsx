import React, { useEffect } from 'react'
import Aboutmain from '../components/Aboutmain/Aboutmain'
const About = () => {
  useEffect(() => {
    window.scrollTo(50, 0);

    
  }, []);
  return (
    <div>
    <Aboutmain/>
    </div>
  )
}

export default About