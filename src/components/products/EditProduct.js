import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { productState } from "../recoil/productRecoil";
import { useHistory, useParams } from "react-router-dom";

export default function EditProduct(props) {
  let { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [type, setType] = useState("");
  const [products, setProducts] = useRecoilState(productState);

  useEffect(() => {
    const product = products.find((item) => item.id == id);
    setName(product.name);
    setPicture(product.picture);
    setPrice(product.price);
    setType(product.type);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    let product = {
      name: name,
      price: price,
      picture: picture,
      type: type,
    };

    let newProducts = products.map((item) => (item.id == id ? product : item));
    setProducts(newProducts);

    history.push("/");
  };

  return (
    <div className="container">
      <div className="section">
        <div className="card">
          <div className="card-header">
            <p className="card-header-title">Edit A product</p>
          </div>
          <div className="card-content">
            <form onSubmit={onSubmit}>
              <div className="columns">
                <div className="column is-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="column is-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="column is-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="Product Picture"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                  />
                </div>
                <div className="column is-3">
                  <div className="select is-fullwidth">
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Select Product Type</option>
                      <option value="fruit">fruit</option>
                      <option value="vegetables">vegetables</option>
                      <option value="beverages">beverages</option>
                      <option value="meals">meals</option>
                      <option value="utensils">utensils</option>
                    </select>
                  </div>
                </div>
                <div className="column is-3"></div>
              </div>
              <button className="button is-primary">Update Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
