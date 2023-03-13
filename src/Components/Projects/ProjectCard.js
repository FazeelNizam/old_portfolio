import { Col } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import { RiSlideshow2Line } from "react-icons/ri";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  linksrc,
  linkdemo,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-imagebox">
        <img src={imgUrl} />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a href={linksrc}>
              <BsCodeSlash /> Code
            </a>
            <a href={linkdemo}>
              <RiSlideshow2Line /> Demo
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
