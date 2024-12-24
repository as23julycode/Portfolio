import React from "react";
import "./About.css";
import profilePic from "../../assets/images/About_my.jpg";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div class="container about">
          <div class="row about-box">
            <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img className="" src={profilePic} alt="profile_pic" />
            </div>
            <div class="col-md-6 col-xl-7 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                Enthusiastic and results-driven Computer Science Engineering
                graduate with a passion for learning new technology to solve
                complex problems. Eager to contribute my skills and knowledge to
                a dynamic team in a professional work environment. My academic
                background, coupled with hands-on project experiences, has
                equipped me with a solid foundation in software development,
                algorithm design, and system analysis. <br />
                <br />
                During my academic journey, I excelled in coursework related to
                data structures, algorithms, and software engineering
                principles. My dedication to staying current with industry
                trends and emerging technologies has enabled me to develop a
                proficiency in programming languages such as Java, Python, and
                C++. I have successfully applied theoretical concepts to
                real-world scenarios through collaborative projects, showcasing
                my ability to work in a team-oriented environment. <br />
                <br />I am motivated by a desire for continuous learning and
                growth, recognizing the importance of adapting to evolving
                technologies. Possessing excellent problem-solving skills,
                attention to detail, and a commitment to producing high-quality
                code, I am eager to contribute my skills to a forward-thinking
                company. As a recent graduate, I am excited about the
                opportunity to apply my knowledge and make meaningful
                contributions while further developing my expertise in
                Computer Science.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};
export default About;
