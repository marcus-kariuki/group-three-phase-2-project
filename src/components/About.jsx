import React from "react";

function About({aboutData}) {
  return (
    <div>
      <h1>About Us</h1>
      <p>Here is some information about our organization or company.{aboutData.title}</p>
      <p>{aboutData.description}</p>
    </div>
  );
}

export default About;
