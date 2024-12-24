import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-scroll';
import { MdOutlineWork, MdOutlineCastForEducation } from "react-icons/md";
import { FcVideoProjector, FcParallelTasks, FcContacts, FcAbout, FcHome } from "react-icons/fc";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const handleopen = () => {
        setOpen(!open);
    }
    const handleMenuclick =() =>{
        setOpen(!open);
    }
    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    <div className="mobile-nav-toggle" onClick={handleopen}>
                        {open ? (<AiOutlineMenuFold size={30} />) : (<AiOutlineMenuUnfold size={30} />)}
                    </div>
                    <div className="mobile-nav-title">
                        <a href="#">Aditya Singh</a>
                    </div>
                </div>
                {open && (
                <div className="mobile-nav-menus">
                    <div class="nav-items">
                        <div class="nav-item">
                            <div class="nav-link">
                                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuclick}>
                                    <FcHome size={22} />Home
                                </Link>
                            </div>
                            <div class="nav-link">
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuclick}>
                                    <FcAbout size={22} />About
                                </Link>
                            </div>
                            <div class="nav-link">
                                <Link to="work" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuclick}>
                                    <MdOutlineWork size={22} />Work Experience
                                </Link>
                            </div>
                            <div class="nav-link">
                                <Link to="project" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuclick}>
                                    <FcVideoProjector size={22} />Projects
                                </Link>
                            </div>
                            <div class="nav-link">
                                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuclick}>
                                    <FcParallelTasks size={22} />Tech Stack
                                </Link>
                            </div>
                            <div class="nav-link">
                                <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuclick}>
                                    <MdOutlineCastForEducation size={22} />Education
                                </Link>
                            </div>
                            <div class="nav-link">
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuclick}>
                                    <FcContacts size={22} />Contact
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                )}
            </div>


            {/* 
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mobile-nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Aditya Singh</a>
                    
                    {open ? (<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation"><AiOutlineMenuFold /></button>) : (<button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <AiOutlineMenuUnfold /> </button>)}

                    {open && (

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <div class="nav-items">
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
                                        <MdOutlineWork size={22} />Work Experience
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

                        </div>
                    </div>
                    )}
                </div>
            </nav> */}
        </>
    )
}

export default MobileNav