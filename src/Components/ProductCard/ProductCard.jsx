import React from "react";
import { products } from "../../helper/data";
import "./ProductCard.css";
import { FaHeart } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="product-card">
      {products.map((item) => {
        const { id, image, title, price } = item;
        return (
          <div className="card">
            <div className="cards-main">
              <div className="card-price">
                <span>{price}$</span>
                <FaHeart />
              </div>
              <div className="card-image">
                <img src={image} alt="" />
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
