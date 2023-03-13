import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Assets/img/logo.png";
import { ImFacebook } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import "./Footer.css";

import "../Projects/sky.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="sky-container">
          <div class="star1"></div>
          <div class="star2"></div>
          <div class="star3"></div>
        </div>

        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div class="media-icons-footer">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/fazeelnizam/"
                      target="_blank"
                    >
                      <ImLinkedin2 size={20} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/FazeelNizam" target="_blank">
                      <FiGithub size={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://web.facebook.com/FazeelNizam00"
                      target="_blank"
                    >
                      <ImFacebook size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <div className="copy-rights">
              <hr />
              <p>Copyright 2023. All Rights Reserved</p>
              <p>Fazeel Nizam</p>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
