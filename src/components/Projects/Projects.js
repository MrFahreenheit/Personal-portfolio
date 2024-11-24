import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My First <strong className="purple">Project </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is the project I did in my first educational term.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Personal Website (Pure HTML & CSS)"
              description="Welcome to my personal website! Built with plain HTML and CSS, it is fully responsive, ensuring seamless viewing on any device. Explore my journey, interests, educational background, hobbies, workplaces with a lot of photos through a clean, minimalist design."
              ghLink="https://github.com/MrFahreenheit/Personal-Website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
