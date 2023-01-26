import React from "react";

import "../stylesheet/App.css";

function About({aboutData}) {
  return (
    <div className="about-container">
      <h1 className="about-title" style={{color: "black"}}>About Us</h1>
      <p className="about-info" style={{color: "black"}}>Here is some information about our organization.
        Our company is based in Nairobi Kenya and with offices along Ngong road inside the 
        Ngong lane plaza.The CEO of our company is named Marcus Kariuki, there are other three co-founders
        that are responsible for handling matters related to this website, we give managers and coaches
        of every team to look into the available players we have for transfer you can check the 
        player by navigating through the players section next to this about section.  .{aboutData.title}</p>
      <p className="about-info" style={{color: "black"}}>
      Here is some information about our organization.
        Our company is based in Nairobi Kenya and with offices along Ngong road inside the 
        Ngong lane plaza.The CEO of our company is named Marcus Kariuki, there are other three co-founders
        that are responsible for handling matters related to this website, we give managers and coaches
        of every team to look into the available players we have for transfer you can check the 
        player by navigating through the players section next to this about section.
        Here is some information about our organization.
        Our company is based in Nairobi Kenya and with offices along Ngong road inside the 
        Ngong lane plaza.The CEO of our company is named Marcus Kariuki, there are other three co-founders
        that are responsible for handling matters related to this website, we give managers and coaches
        of every team to look into the available players we have for transfer you can check the 
        player by navigating through the players section next to this about section.
        {aboutData.description}</p>
    </div>
  );
}

export default About;
