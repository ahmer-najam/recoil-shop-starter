import React from "react";
import { productState } from "../recoil/productRecoil";
import { useRecoilValue } from "recoil";
import ProductItem from "./ProductItem";

export default function Products() {
  const products = useRecoilValue(productState);
  return (
    <div className="columns is-multiline is-mobile">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}
