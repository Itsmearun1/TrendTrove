import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
function Slider1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/23022023-UHP-D-TopBanner-P4-trends-under499.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/23022023-UHP-D-TopBanner-P3-Kidswear-pepejeansuspa-4060.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/23022023-UHP-D-TopBanner-P2-ClogsFlipFlops-CrocsAdorly-Upto40.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/23022023-UHP-D-MainsdsBanner-P4-HomeLiving-Portico-Upto70.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider1;
