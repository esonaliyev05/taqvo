import React, { useState } from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";


const Navbar = () => {
  const [bars , setBars] = useState(false)

  return (
    <div className='nav'>
        <div className="container">

            <ul>
                <li><NavLink to={"/"}>Bosh sahifa</NavLink></li>
                <li><NavLink to={"about"}>Biz haqmizda</NavLink></li>
            </ul>

            <div className="logo">
                <img src="/Nav-logo/a7a74a802a650e351373ebac10d99ef7.png" alt="" />
            </div>

            <div className="concat">
                <select>
                <option value="">UZB</option>
                <option value="">RU</option>
                <option value="">ENG</option>

                </select>
                <button > Bog'lanish</button>

                <FaBars className='bars' onClick={() => setBars(true)}/>

            </div>

        </div>
        
        <div className={bars ? "bars-open activ" : "bars-open"}>
          <div className="edit" onClick={() => setBars(false)}><AiOutlineCloseCircle/>
          </div>

          <div className="bars-parent">

          <div className="logo">
                <img src="/Nav-logo/a7a74a802a650e351373ebac10d99ef7.png" alt="" />
            </div>

          <ul>
                <li><NavLink to={"/"}>Bosh sahifa</NavLink></li>
                <li><NavLink to={"about"}>Biz haqmizda</NavLink></li>
            </ul>

            <div className="traslation">
               <div className="laguech">UZ</div>
               <div className="laguech">RU</div>
               <div className="laguech">EN</div>
            </div>

          </div>

        </div>

    </div>
  )
}

export default Navbar