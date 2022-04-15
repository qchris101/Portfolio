import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight,ImMail4 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Christian Quintana </span>
            from <span className="purple"> Linden,NJ!</span>
            <span>I completed my <span className="purple">Associates of Science</span> at Union County College and then pursued to further my Cs knowledge at General Assembly!</span>
            <br />
            <br />
            <span>Feel free to connect with me! <ImMail4 /> qchris101@yahoo.com <ImMail4/></span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Car Enthusiast  
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          {" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
