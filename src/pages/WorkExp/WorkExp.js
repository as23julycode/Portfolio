
import React from "react";
import "./WorkExp.css";
import { MdOutlineDeveloperMode } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExp = () => {
  return (
    <>
      <div class="container work">
        <div class="work-exp">
          <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h1>
          <hr />
          <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="July 2024 - Present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdOutlineDeveloperMode />}
            >
              <h3 className="vertical-timeline-element-title">
                IT Consultant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Innova Solutions
              </h4>
              <ol>
                <li>
                  <p>
                  Collaborated with hiring managers to identify key skills and qualifications for open positions, resulting in
 a 20 increase in successful hires and a 10 increase in employee retention.
                  </p>
                </li>
                <li>
                  <p>
                  Prepare reports, emails and create, maintain, and enter information into databases, and other
 documents, using word processing, spreadsheet, database.
                  </p>
                </li>
                <li>
                  <p>
                  Resolving the issues by the medium of Call/ Emails/Remote (Team Viewer).
                  </p>
                </li>
                <li>
                  <p>
                  Utilized social media and other recruiting tools to build a strong talent pipeline, resulting in a 30 increase
 in candidate engagement and a 20 increase in referrals.
                  </p>
                </li>
              </ol>
              {/* <div class="project1-button text-center">
                <a
                  href="https://drive.google.com/file/d/1lwfNtNPuH6o0AFqd7lvj-vR4JOkUbsn1/view?usp=drive_link"
                  class="ad-btn"
                >
                  Certificate
                </a>
              </div> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="December 2023 - April 2024"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdOutlineDeveloperMode />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Infinite Solar Power Solution
              </h4>
              <ol>
                <li>
                  <p>
                    Designed and developed a responsive company website using
                    React.js, showcasing company products, and professional
                    experiences to effectively highlight expertise and
                    accomplishments.
                  </p>
                </li>
                <li>
                  <p>
                    Utilized modern web development techniques, such as
                    component-based architecture and routing, to create a
                    dynamic single-page application, resulting in a seamless and
                    engaging user experience.
                  </p>
                </li>
                <li>
                  <p>
                    Implemented interactive and visually appealing user
                    interfaces using React components, ensuring intuitive
                    navigation and engaging content presentation while
                    maintaining performance optimization.
                  </p>
                </li>
                <li>
                  <p>
                    Integrated external APIs and libraries, such as for contact
                    forms or product item showcases, to enhance website
                    functionality and user engagement.
                  </p>
                </li>
                <li>
                  <p>
                    Employed responsive design principles and CSS frameworks to
                    ensure cross-device compatibility, providing an optimal user
                    experience across different screen sizes.
                  </p>
                </li>
              </ol>
              <div class="project1-button text-center">
                <a
                  href="https://drive.google.com/file/d/1lwfNtNPuH6o0AFqd7lvj-vR4JOkUbsn1/view?usp=drive_link"
                  class="ad-btn"
                >
                  Certificate
                </a>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2023 - August 2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdOutlineDeveloperMode />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Nullclass
              </h4>
              <ol>
                <li>
                  <p>
                  Developed a whole website of the agency using the combo of HTML Themes, CSS and javaScript.
                  </p>
                </li>
                <li>
                  <p>
                  Developed front-end components according to the User interface guidelines.
                  </p>
                </li>
                <li>
                  <p>
                  Being a static site I hosted it on Github and publish it on Netlify.
                  </p>
                </li>
                <li>
                  <p>
                  Used netlify form to get user submissions without worrying about backend.
                  </p>
                </li>
              </ol>
              <div class="project1-button text-center">
                <a
                  href="https://drive.google.com/file/d/1lwfNtNPuH6o0AFqd7lvj-vR4JOkUbsn1/view?usp=drive_link"
                  class="ad-btn"
                >
                  Certificate
                </a>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
