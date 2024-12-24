import React from 'react'
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
      <div class="container education">
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">Eduaction Details</h1>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{background:"white", color:"black"}}
            contentArrowStyle={{borderRight:"7px solid white"}}
            date="2019 - 2023"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science and Engineering </h3>
            <h4 className="vertical-timeline-element-subtitle">HCST Mathura, UP</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{background:"white", color:"black"}}
            contentArrowStyle={{borderRight:"7px solid white"}}
            date="2017 - 2018"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">12<sup>th</sup></h3>
            <h4 className="vertical-timeline-element-subtitle">Jawahar Navodaya Vidyalaya</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Education