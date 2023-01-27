import React, {Fragment} from "react";


import "../stylesheet/App.css";

function About() {
  return (
    <Fragment>
      <div className="content">
    <div className="col-md-7 bg-dark text-center text-white">
          <h4 className="text-uppercase text-white-50"></h4>
          <h1 className="display-5">ABOUT US</h1>
          <p className="lead fw-bolder">
           
          Our Group Members include:
          <ul>
            <li>-Marcus Macharia</li>
            <li>-Liz Wambeti </li>
            <li>-Emmanuel Chacha </li>
            <li>-Melvin Kukwan </li>
           
            

          </ul>


             DIMBA.org is a platform that provides the manager with a comprehensive list of all players available for transfer.<br/>The manager can see a list of all players displayed in form of cards.
             Then the manager can click on each individual player to view their personal statistics.<br/>
            On the home section, the Manager has the ability to filter and search a specific player of their choosing.
            The last function is to add new players to the transfer list.There is a form provided in the Add Player page where the manager inputs the required information <br/>
            </p>
        </div>
        </div>
    </Fragment>
  );
}

export default About;
