import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
function Slider1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClearanceSale.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/UHP-D-clearance-flat50.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/23022023-UHP-D-MainBanner-P3-Trends-Flat60.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/23022023-UHP-D-MainBanner-P5-Puma-Min40.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/23022023-UHP-D-MainsdsBanner-P4-HomeLiving-Portico-Upto70.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/23022023-UHP-D-MainBanner-P3-Trends-Flat60.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider1;
