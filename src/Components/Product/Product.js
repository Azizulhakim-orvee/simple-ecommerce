import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const cartIcon = <FontAwesomeIcon icon={faCartPlus} />;
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h4>{name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small> Only {stock} left in stock</small>
        </p>
        <button className="main-button" onClick={props.handleAddProduct}> {cartIcon} add to cart</button>
      </div>
    </div>
  );
};

export default Product;
