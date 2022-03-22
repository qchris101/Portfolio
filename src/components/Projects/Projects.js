import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DBDPerkCreator from "../../Assets/Projects/DBDPerkCreator.jpg";

import TicTacToe from "../../Assets/Projects/TicTacToe.png";
import OurSpace from "../../Assets/Projects/OurSpace.png";
import OnePiece from "../../Assets/Projects/PirateCrew.png";
import DiscordBot from "../../Assets/Projects/DiscordBot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OurSpace}
              isBlog={false}
              title="OurSpace"
              description="Social Network Application to hangout with friends built with react.js, Express, and Mongoose.
               Have features which allows user for realtime posting, as well as supports reactions on user posts.Collaborated 
               with a team of four software developers in a 3-week sprint. "
              link="https://github.com/Team-Rendering/project-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DBDPerkCreator}
              isBlog={false}
              title="DBD Perk Creator"
              description=""
              link="https://github.com/qchris101/dbd-perk-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description=""
              link="https://github.com/qchris101/tic-tac-toe-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DiscordBot}
              isBlog={false}
              title="Discord Bot"
              description=""
              link="https://github.com/qchris101/encourage-discord-bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OnePiece}
              isBlog={false}
              title="One Piece Pirate Crew"
              description=""
              link="https://github.com/qchris101/project-pirate-crew-client"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
