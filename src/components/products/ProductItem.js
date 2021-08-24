import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { productState } from "../recoil/productRecoil";

export default function ProductItem(props) {
  const { product } = props;
  const [products, setProducts] = useRecoilState(productState);

  const deleteProduct = (id) => {
    let newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  return (
    <div className="column is-one-quarter has-text-centered">
      <div className="box box__custom">
        <Link
          to={`/editProduct/${product.id}`}
          className="button button-edit is-warning"
        >
          edit
        </Link>
        <button
          onClick={() => deleteProduct(product.id)}
          className="button button-delete is-danger"
        >
          delete
        </button>

        <h1 className="title is-1">{product.picture}</h1>
        <h2 className="subtitle is-5">{product.name}</h2>
        <span className="tag">PKR. {product.price}/kg</span>
      </div>
    </div>
  );
}
