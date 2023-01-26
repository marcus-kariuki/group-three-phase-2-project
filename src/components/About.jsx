import React from "react";

function About({aboutData}) {
  return (
    <div style={{"color": "white"}}>
      <h1>About Us</h1>
      <p>Here is some information about our organization.
        Our company is based in Nairobi Kenya and with offices along Ngong road inside the 
        Ngong lane plaza.The CEO of our company is named Marcus Kariuki, there are other three co-founders
        that are responsible for handling matters related to this website, we give managers and coaches
        of every team to look into the available players we have for transfer you can check the 
        player by navigating through the players section next to this about.  .{aboutData.title}</p>
      <p>{aboutData.description}</p>
    </div>
  );
}

export default About;
