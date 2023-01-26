import React from "react";

function About({aboutData}) {
  return (
    <div style={{"color": "white"}}>
      <h1>About Us</h1>
      <p>Here is some information about our organization our company
        Our company is based in Nairobi Kenya and with offices along ngong road inside the 
        Ngong lane plaza.The CEO of our company is named Marcus Kariuki, there are other three co-founders
        that are responsible to handle matters relating to this website and we give managers and coaches
        of every team to look into the available olayers we have for transfer you can check the .{aboutData.title}</p>
      <p>{aboutData.description}</p>
    </div>
  );
}

export default About;
