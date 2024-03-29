import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Products.css";
import Footer from "../Components/Footer";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [currentImage, setCurrentImage] = useState({});
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [baseData, setbaseData] = useState([]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "") {
      setProducts(baseData);
      console.log("empty search term", baseData);
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    axios
      .get("https://63f5c81b9daf59d1ad7b4257.mockapi.io/data")
      .then((res) => {
        console.log(res.data);
        setbaseData(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    let value = e.target.value;
    if (value === "") {
      setFilterBy("");
    } else if (value === "High Star") {
      setFilterBy("High Star");
    } else if (value === "PERFORMAX") {
      setFilterBy("PERFORMAX");
    } else if (value === "Teamspirit") {
      setFilterBy("Teamspirit");
    } else if (value === "VOXATI") {
      setFilterBy("VOXATI");
    }
  };
  const filteredAndSortedProducts = products
    .filter((product) =>
      product.brand.toLowerCase().includes(filterBy.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "highest-price") {
        return b.price - a.price;
      } else if (sortBy === "lowest-price") {
        return a.price - b.price;
      } else if (sortBy === "featured") {
        return a.featured - b.featured;
      } else if (sortBy === "top-rated") {
        return b.rating - a.rating;
      }
    });
  console.log(products);
  return (
    <>
      <div className="head">
        <h1>MEN'S Jackets & Coats</h1>
        <p>
          Versatile and sophisticated, AJIO brings to you a wide range of coats
          and jackets for men. Be it printed, embroidered, ripped or distressed
          – we have everything. Browse through cool gilets, quilted bombers and
          winter jackets to keep your fashion game on fleek this cold season.
        </p>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products"
          onChange={handleSearchChange}
        />
      </div>
      <div className="product-page">
        <div className="sidebar">
          <div className="section-title">SORT BY</div>
          <select onChange={handleSortChange}>
            <option value="featured">Featured</option>
            <option value="top-rated">Top Rated</option>
            <option value="highest-price">Highest Price</option>
            <option value="lowest-price">Lowest Price</option>
          </select>
          <div className="section-title">FILTER BY BRAND</div>

          <select onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="High Star">High Star</option>
            <option value="PERFORMAX">PERFORMAX</option>
            <option value="Teamspirit">Teamspirit</option>
            <option value="VOXATI">VOXATI</option>
          </select>

          <div className="section-title">CATEGORY</div>
          <div>Casual Dresses</div>
          <div>Mother of the Bride</div>
          <div>Special Occasion</div>
          <div>Jacket Dresses</div>
          <div>Pant Suits</div>
          <div>Dress Sets</div>
          <div>Curvy Dresses</div>
          <div>Liz & Me Dresses</div>
          <div>Petite Dresses</div>
          <div>Dresses by Length</div>
          <div>Wear Underneath</div>
        </div>
        <div className="product-grid">
          {filteredAndSortedProducts.map((product, index) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <img
                src={currentImage[product.id] || product.img}
                alt={product.name}
              />
              <div className="products-info">
                <div className="products-name">{product.brand}</div>
                <div className="products-name">{product.name}</div>
                <div className="products-price">₹{product.price}</div>
                <div
                  className="products-offer"
                  style={{ color: "green", fontSize: "smaller" }}
                >
                  offer price ₹{product.offer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
