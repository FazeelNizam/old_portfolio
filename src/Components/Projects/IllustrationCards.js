import { Col } from "react-bootstrap";
import { ImageViewer } from "react-image-viewer-dv";

export const IllustrationCards = ({ img, title }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="img-container">
        <ImageViewer>
          <a className="gallery-item" data-src={img}>
            <img className="img-responsive" src={img} alt={title} />
          </a>
        </ImageViewer>
      </div>
    </Col>
  );
};
