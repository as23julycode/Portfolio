import React from 'react';
import profilePic from "../Images/my.jpg";
import "./Menus.css";
import { Link} from 'react-scroll';
import { MdOutlineWork, MdOutlineCastForEducation } from "react-icons/md";
import { FcVideoProjector, FcParallelTasks, FcContacts, FcAbout, FcHome } from "react-icons/fc";

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div class="navbar-profile-pic ">
        <Zoom>
            <img className="" src={profilePic} alt="Profile Pic" />
        </Zoom>
          </div>
          <div class="nav-items">
          <Fade left>
            <div class="nav-item">
              <div class="nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome size={22} />Home
                </Link>
              </div>
              <div class="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout size={22} />About
                </Link>
              </div>
              <div class="nav-link">
                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                  <MdOutlineWork size={22} />Experience
                </Link>
              </div>
              <div class="nav-link">
                <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector size={22} />Projects
                </Link>
              </div>
              <div class="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcParallelTasks size={22} />Tech Stack
                </Link>
              </div>
              <div class="nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                  <MdOutlineCastForEducation size={22} />Education
                </Link>
              </div>
              <div class="nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcContacts size={22} />Contact
                </Link>
              </div>
            </div>
          </Fade>
          </div>
        </>
      ) : (
        <>
          <div class="nav-items">
            <div class="nav-item">
              <div class="nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome title='Home' size={32} />
                </Link>
              </div>
              <div class="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout title='About' size={32} />
                </Link>
              </div>
              <div class="nav-link">
                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                  <MdOutlineWork title='Work Experience' size={32} />
                </Link>
              </div>
              <div class="nav-link">
                <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector title='Projects' size={32} />
                </Link>
              </div>
              <div class="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcParallelTasks title='Tech Stack' size={32} />
                </Link>
              </div>
              <div class="nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                  <MdOutlineCastForEducation title='Education' size={32} />
                </Link>
              </div>
              <div class="nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcContacts title='Contact' size={32} />
                </Link>
              </div>
            </div>
          </div>
        </>)
      }
    </>
  )
}
export default Menus