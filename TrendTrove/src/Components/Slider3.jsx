import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
function Slider3() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P3-Azorte-Brands-Min50.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P2-Winterwear-Brands-Min50.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P1-AvaasaNetplayAcai-Upto70.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id="zoom"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P7-KidswearKGFrendzRio-Under399.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider3;
