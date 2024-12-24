import React from "react";
import "./Home.css";
import { useTheme } from "../../context/TheamContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume-Aditya.pdf";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Slide from "react-reveal/Slide";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div class="container-fluid home-container" id="home">
        <div class="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div class="container home-content">
          <Slide right>
            <h2>Hi👋 I'm Aditya Singh</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer !",
                    "MERN Stack Developer !",
                    "Java Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Slide>
          <div className="home-buttons">
            <Slide bottom>
              <a
                href="https://api.whatsapp.com/send?phone=8565038010"
                rel="noreferrer"
                target="blank"
                className="btn btn-hire"
              >
                Contact
              </a>
              {/* <button className="btn btn-hire"> Hire Me</button> */}
              <a
                className="btn btn-cv"
                href={Resume}
                download="Resume-Aditya.pdf"
              >
                My Resume
              </a>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
