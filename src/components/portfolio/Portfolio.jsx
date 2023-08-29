import React from 'react'
import Portfoliocard from './Portfoliocard.jsx'
import { Container, Row, Col } from "react-bootstrap";
import './portfolio.css'


const Portfolio = () => {
  const event = [
    {
      imgurl: "project/prakarsh.png",
      title: "Prakarsh-23",
      
      link: "https://prakarsh.org/",
    },
    {
      imgurl: "project/Avanta.png",
      title: "Avant",
      
      link: "https://avantexpo.prakarsh.org/",
    },
    {
      imgurl: "project/aeroconnect.png",
      title: "Aero-CONNECT",
      
      link: "https://github.com/VadhwanaParth15/Aero-CONNECT",
    },
   
  ];
  return (
    <section className="portfolio" id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
    <div className='container portfolio__container'>
      {event.map((members) => (
          <Portfoliocard
            imgUrl={members.imgurl}
            title={members.title}
            // description={members.description}
            link={members.link}
          />
      ))}
    </div>
    </section>
  )
}

export default Portfolio