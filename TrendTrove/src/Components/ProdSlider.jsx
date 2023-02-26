import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
function ProdSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/medias/sys_master/root/20221104/j0kW/63652445f997ddfdbd58d2e8/the-indian-garage-co-dark-grey-hoodies-%26-tracks-zip-front-track-jacket-with-insert-pockets.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/medias/sys_master/root/20210805/szLx/610ae723f997ddce8994e33c/voxati-maroon-bikers-%26-bombers-jacket-with-insert-pockets.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/medias/sys_master/root/20210805/x8fo/610ae732aeb269a26869e7a8/voxati-black-bikers-%26-bombers-washed-denim-jacket-with-flap-pockets.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/medias/sys_master/root/20210908/EWcL/6137deddf997ddce89c017a5/voxati-olive-bikers-%26-bombers-panelled-jacket-with-buttoned-flap-pockets.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ProdSlider;
