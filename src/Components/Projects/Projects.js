import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { IllustrationCards } from "./IllustrationCards";
import "./Projects.css";
import "./sky.scss";
import "animate.css";
import { projects } from "./ProjectData.js";
import { itemData } from "./IllustrationData.js";

const Projects = () => {
  return (
    <>
      <section className="project" id="projects">
        <div className="sky-container">
          <div class="star1"></div>
          <div class="star2"></div>
          <div class="star3"></div>
        </div>

        <Container className="tab-container">
          <Row>
            <Col size={12}>
              <h2>Projects</h2>
              <p>A small gallery of my recent projects.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web Devs</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Illustrations</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {itemData.map((item, index) => {
                        return <IllustrationCards key={index} {...item} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
