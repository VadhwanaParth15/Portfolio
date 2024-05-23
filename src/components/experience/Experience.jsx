import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experience.css'; // Make sure to create this CSS file

const experiences = [
  {
    date: 'Jan 2024 - April 2024',
    title: 'Software Developer',
    company_name: 'Easeteq Software Solutions',
    icon: 'company/easeteq1.png',
    iconBg: '#1f242d',
  }
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'transparent',
      color: '#292929',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      borderRadius: '10px',
      border: '1px solid #fff',
    }}
    contentArrowStyle={{ borderRight: '7px solid #fff' }}
    date={<h3 className="text-dim text-18px font-bold" style={{color:"#fff"}}>{experience.date}</h3>}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-60% h-60% object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-24px font-bold">{experience.title}</h3>
      <p className="text-taupe text-22px font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => (
  <div>
     <section id='experience'>
      <h5 data-aos="zoom-in-up" data-aos-duration="1200">What I've done so far</h5>
      <h2 data-aos="zoom-in-up" data-aos-duration="1300">Work Experience</h2>

    <div className="timeline">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>

    </section>
  </div>
);

export default Experience;
