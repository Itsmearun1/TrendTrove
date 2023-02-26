import React, { useState } from "react";
export function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [img, setImg] = useState("");
  const [brand, setBrand] = useState("");
  const [discount, setDiscount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ img,brand,name,price,offer,discount});
    setName("");
    setPrice("");
    setImg("");
    setBrand("");
    setDiscount("");
    setOffer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </label>
      <br />
      <label>
      Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        Offer Price:
        <input
          type="text"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image :
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </label>
      <br />
      <label>
        Discount:
        <input
          type="text"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}
