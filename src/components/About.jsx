import React, {Fragment} from "react";

import "../stylesheet/App.css";

function About() {
  return (
    <Fragment>
    <div className="about-container">
      <h1 className="about-title" style={{color: "black"}}>About Us</h1>
  
    </div>
    <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Eveniet nostrum laborum porro pariatur minima tenetur.
       Adipisci obcaecati placeat ex veritatis est delectus sunt, 
       quam doloribus nemo sed perferendis ipsa corporis?</p>
       <h3>I Am Web Designer And Developer Having 10 Year Of Experience</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quae accusantium totam mollitia facilis debitis porro sunt repellat eveniet dignissimos.</p>
    </div>
    </Fragment>
  );
}

export default About;
