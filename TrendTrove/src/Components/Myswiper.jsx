import { Swiper, SwiperSlide } from "swiper/react";
import { useState,useEffect } from "react";
import "./Myswiper.css"
import axios from "axios";
import "swiper/css";
export default () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://63f5c81b9daf59d1ad7b4257.mockapi.io/data")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {products.map((product, index) => (
        <SwiperSlide>
          <div
            className="sproduct-card"
            key={product.id}
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              className="pimg"
            />
            <div className="sproducts-info">
              <div className="sproducts-name">{product.brand}</div>
              <div className="sproducts-name">{product.name}</div>
              <div className="sproducts-price">₹{product.price}</div>
              <div
                className="sproducts-offer"
                style={{ color: "green", fontSize: "smaller" }}
              >
                offer price ₹{product.offer}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
