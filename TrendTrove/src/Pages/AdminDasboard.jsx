import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import { AddProductForm } from "../Components/AddProductForm";
function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(
      "https://63f5c81b9daf59d1ad7b4257.mockapi.io/data"
    );
    setProducts(
      res.data.map((product, index) => ({ ...product, item_number: index + 1 }))
    );
  };

  const fetchUsers = async () => {
    const res = await axios.get(
      "https://63f5c81b9daf59d1ad7b4257.mockapi.io/users"
    );
    setUsers(res.data);
  };

  const handleDeleteProduct = async (id) => {
    const res = await axios.delete(
      `https://63f5c81b9daf59d1ad7b4257.mockapi.io/data/${id}`
    );
    fetchProducts();
  };

  const handleDeleteUser = async (id) => {
    const res = await axios.delete(
      `https://63f5c81b9daf59d1ad7b4257.mockapi.io/users${id}`
    );
    fetchUsers();
  };

  const handleAddProduct = async (newProduct) => {
    const res = await axios.post(
      `https://63f5c81b9daf59d1ad7b4257.mockapi.io/data`,
      newProduct
    );
    alert("Product added successfully")
    fetchProducts();
    setShowAddProduct(false);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <h2 style={{textAlign:"center"}}>ADMIN DASHBOARD</h2>
    <div className="wrapper">
      <div className="productssection">
        <input
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value),console.log(searchTerm)}}
        />
        <table>
          <thead>
            <tr>
              <th>Item Number</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.item_number}</td>
                <td>
                  <img
                    src={product.img}
                    alt={product.name}
                    width="50"
                    height="50"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="adminButton" onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rightside">
        <div className="addprod">
          
            <AddProductForm onAddProduct={handleAddProduct} />
          
        </div>
        <div className="users">
          {showUsers ? (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    
                    <tr key={user.id}>
                      <td>{user.firstName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="adminButton" onClick={() => handleDeleteUser(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <button
              onClick={() => {
                setShowUsers(true);
                fetchUsers();
              }}
            >
              Customer List
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default AdminDashboard;
