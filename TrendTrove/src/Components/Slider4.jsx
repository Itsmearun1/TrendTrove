import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
function Slider4() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-JIT-P1-Brands-Min40.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-JIT-P7-brands-min50.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/JIT-D.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-JIT-P5-brands-min40.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider4;
