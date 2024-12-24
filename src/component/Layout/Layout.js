import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import { AiFillCaretLeft, AiFillCaretRight  } from "react-icons/ai";

import "./Layout.css";
import Menus from '../Menus/Menus';

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // toggle change karne ke lea
  const handleToggle = () =>{
    setToggle(!toggle);
  }
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handleToggle}>
              {
                toggle ? (<AiFillCaretLeft size={50}/>) : (<AiFillCaretRight size={50}/>)
              }
            </p>
          </div>
              <Menus toggle={toggle}/>
        </div>
        <div className="container-fluid">
          <Home/>
        </div>
      </div>
    </>
  )
}

export default Layout
